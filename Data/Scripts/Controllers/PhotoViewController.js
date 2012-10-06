var PhotoViewController = function(){
	var self = this;
	self.imageService = null;
	$(document).bind('resize', function(){self.validateSize()});
	
	self.createContent = function(){
		self.photoSection = $(".photo-section");
	 	self.photoContainer = $(".photo-container");
		self.menuContainer = $(".menu-container");
		self.imageService.obtainBackgroundPhoto();
		self.createLoadingImage();
	};

	//ImageMenu Functionality
	self.createMenuButton = function(){
		$('.menu-button').remove();
		var menuBtn = $("<div></div>");
		menuBtn.attr("class","menu-button");
		menuBtn.text("<");
		self.menuContainer.after(menuBtn);
		menuBtn.bind("click", function(){
			self.toggleMenu($(this));
		});
	};
	self.toggleMenu = function(button){
		if(self.menuContainer.is(":visible")){
			self.menuContainer.animate({"width": "0px"},300, function(){
				$(this).hide()
			});
			button.text(">").animate({"margin-left": "0px"},300);
		}else{
			self.menuContainer.show().animate({'width':'120px','display':'block'},300, function(){
				$(this).removeAttr("style");
			});
			button.text("<").animate({"margin-left": "130px"},300);
		}
	};
	self.assignMenuImages = function(menuImages){
		self.menuContainer.empty();
		$.each(menuImages, function(index,value){
			menuLink = self.createMenuLink(value,  index);
			self.menuContainer.append(menuLink);
		});
		self.createMenuButton();
	};
	self.createMenuLink = function(src, index){
		var menuLink = $("<div></div>");
		var menuImage = $("<img />");

		menuLink.attr("class","menuLink-container");
		menuImage.attr("alt","dragImage");
		menuImage.attr("src",src);
		menuLink.append(menuImage);
		menuLink.data("id",index);
		menuImage.draggable({
			containment: self.photoContainer,
			helper: "clone"
		});
		menuLink.bind('mousedown',function(){
			self.actualLink = $(this);
		});
		menuLink.bind('mouseup',function(){
			self.position = 
			{
				left : $(".ui-draggable-dragging").css("left"),
				top : $(".ui-draggable-dragging").css("top")
			};
			self.imageService.obtainPillowImage($(this).data("id"));
		});
		menuImage.lazyload();
		return menuLink;
	};
	//Images Functionality
	self.assignImage = function (imageUrl) {
		var imageContainer = $("<div></div>");
		var image = $("<img/>");
		var closeBtn = $("<div></div>");

		imageContainer.attr('class', 'image-container');
		self.photoContainer.append(imageContainer);
		image.attr('src',imageUrl);
		closeBtn.attr('class', 'close-button');
		closeBtn.text("X");

		closeBtn.hide();
		imageContainer.append(image);
		imageContainer.append(closeBtn);
		
		imageContainer.draggable({containment: self.photoContainer});
		self.validatePosition(imageContainer);

		self.photoContainer.bind("mousedown", function(event){
			if(!$(event.target).hasClass("image-container") &&
				!$(event.target).parents(".image-container").hasClass("image-container"))
				$(".image-container").find(".close-button").hide();
		});
		closeBtn.bind('click', function(){
			$(this).parents('.image-container').remove();
		});
		imageContainer.bind("mousedown", function(){
			$(".image-container").css({"z-index":"1"});
			$(".image-container").find(".close-button").hide();
			$(this).css({"z-index":"2"});
			$(this).find(".close-button").show();
		});
		
		ZoomView(imageContainer, image);
	};
	self.validatePosition = function(container){
		if(self.position.left && self.position.top){
			container.css(self.position);
			container.css({"top": "-=10px", "left": "-=10px"});
		}
		else
			container.css({"top": "200px", "left": "200px"});
	};
	//Backgorund Photo Functionality
	self.createPhotoButton = function(){
		$(".takePhoto-button").remove();
		var photoBtn = $("<a></a>");
		photoBtn.attr("class","takePhoto-button");
		self.photoContainer.before(photoBtn);
		
		photoBtn.unbind('click');
		photoBtn.bind('click', function(){
			self.createLoadingImage();
			NativeBridge.call('showPhotoViewBefore','',self.refreshBackgroundImage);
		});
	};
	self.createDefaultckgroundImage = function(){
		$(".background-image").remove();
		var backgroundImage = $('<img/>');
		backgroundImage.attr('class','background-image');
		backgroundImage.attr('src',"../Images/defaultBed.jpeg");
		backgroundImage.hide();
		self.photoContainer.append(backgroundImage);
		backgroundImage[0].onload = function(){
			self.createInstructionMessage();
			self.actualImage = $(this);
			NativeBridge.call('validateOrientation','',self.showBackgroundImage);
		}
	};
	self.refreshBackgroundImage = function(){
		if(self.actualImage){
			window.location.reload();
			return;
		}
		$(".background-image").remove();
		var backgroundImage = $('<img/>');
		backgroundImage.attr('class','background-image');
		backgroundImage.attr('src',"../../../Documents/bphoto.png");
		backgroundImage.hide();
		self.photoContainer.append(backgroundImage);
		backgroundImage[0].onload = function(){
			self.actualImage = $(this);
			NativeBridge.call('validateOrientation','',self.showBackgroundImage);
		}
	};
	self.showBackgroundImage = function(){
		self.actualImage.fadeIn(100, function(){
			$(".backLoading").remove();
			self.imageService.obtainPillowMenuImages();
			self.createPhotoButton();
		});
	}
	self.createLoadingImage = function(){
		$(".background-image").remove();
		$(".backLoading").remove();
		var loadingImage = $("<img/>");
		loadingImage.attr('class','backLoading');
		loadingImage.attr('src','../Images/loading.gif');
		self.photoContainer.append(loadingImage);
		loadingImage.lazyload();
	};
	self.createInstructionMessage = function(){
		$(".instrictions-span").remove();
		var message = $("<span></span>");
		message.attr('class','instrictions-span');
		message.text('Pruébelo con su habitacion');
		self.photoContainer.append(message);
	}
	self.obtainBackgroundPhoto = function(){
		self.imageService.obtainBackgroundPhoto();
	};
	
	self.changeToPortrait = function(){
		var origin = "35% 35%";
		self.actualImage.css({
			'-webkit-transform': 'rotate(90deg)',
			'-moz-transform':'rotate(90deg)',
            'transform': 'rotate(90deg)',
            '-webkit-transform-origin': origin,
			'-moz-transform-origin':origin,
            'transform-origin': origin
		});
	}
	self.changeToLandscape = function(){
		self.actualImage.removeAttr('style');
	}
};

var photoViewController = null;
$(document).ready(function(){
	var imageService = new ImageService();
	photoViewController = new PhotoViewController();

	photoViewController.imageService = imageService;
	imageService.imageDelegate = photoViewController;
	photoViewController.createContent();
});
