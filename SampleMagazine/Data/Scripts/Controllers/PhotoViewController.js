var PhotoViewController = function(){
	var self = this;
	self.imageService = null;

	self.createContent = function(){
	 	self.photoContainer = $(".photo-container");
		self.menuContainer = $(".menu-container");
		self.imageService.obtainMenuImages();
	}

	self.createMenuButton = function(){
		menuBtn = $("<div></div>");
		menuBtn.attr("class","menu-button");
		menuBtn.text("<");
		self.menuContainer.after(menuBtn);

		menuBtn.bind("click", function(){
			self.toggleMenu($(this));
		});
	}

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
	}

	self.assignMenuImages = function(menuImages){
		$.each(menuImages, function(index,value){
			menuLink = self.createMenuLink(value,  index);
			self.menuContainer.append(menuLink);
		});

		self.createMenuButton();
	}

	self.createMenuLink = function(src, index){
		menuLink = $("<div></div>");
		menuLink.attr("class","menuLink-container");
		menuImage = $("<img />");
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
				"left" : $(".ui-draggable-dragging").css("left"),
				"top" : $(".ui-draggable-dragging").css("top")
			}
			self.photoContainer.unbind("mousemove");
			self.imageService.obtainImage($(this).data("id"));
		});
		
		return menuLink;
	}

	self.assignImage = function (src) {
		image = self.createImage(src, 130,130);
		self.photoContainer.append(image);
		if(self.position.left && self.position.top){
			image.css(self.position);
			image.css({"top": "-=15px", "left": "-=15px"});
		}
		else
			image.css({"top": "200px", "left": "200px"});

		image.find(".ui-resizable-handle").hide();

		image.draggable({containment: self.photoContainer}).resizable({
			containment: self.photoContainer,
			alsoResize: imageContainer.find('img'),
			handles: 'ne, se, sw, nw',
			minHeight: 50,
      		minWidth: 50
		});
	}


	self.createImage = function(imageUrl,height,width){
		imageContainer = $("<div></div>");
		imageContainer.attr("class","image-container");

		image = $("<img />");
		image.attr("alt","dragImage");
		image.attr("src",imageUrl);
		
		closeBtn = $("<button></button>");
		closeBtn.attr("class","close-button");
		closeBtn.text("x");

		imageContainer.append(image);
		imageContainer.append(closeBtn);

		closeBtn.hide();

		closeBtn.bind("mousedown", function(){
			$(this).parents(".image-container").remove();
		});
		imageContainer.css({
			"height": height,
			"width": width,
			"position":"absolute", 
			"z-index": "2"
		});
		image.css({
			"height": height-30,
			"width": width-30,
			"margin-top": (height - (height-30))/2 +"px",
			"margin-left": (width - (width-30))/2 +"px"
		});

		
		self.photoContainer.bind("mousedown", function(event){
			if(!$(event.target).hasClass("ui-resizable-handle") &&
				!$(event.target).hasClass("image-container") &&
				!$(event.target).parents(".image-container").hasClass("image-container")
				)
			{
				$(".image-container").find(".ui-resizable-handle").hide();
				$(".image-container").find(".close-button").hide();
				$(".image-container").find("div[class^='turn']").hide();
			}
		})
		imageContainer.bind("mousedown", function(){
			$(".image-container").css({"z-index":"1"});
			$(".image-container").find(".ui-resizable-handle").hide();
			$(".image-container").find(".close-button").hide();
			$(".image-container").find("div[class^='turn']").hide();
			$(this).css({"z-index":"2"});
			$(this).find(".ui-resizable-handle").show();
			$(this).find(".close-button").show();
			$(this).find("div[class^='turn']").show();
		});

		return imageContainer;
	}
}

$(document).ready(function(){
	var imageService = new ImageService();
	var photoViewController = new PhotoViewController();

	photoViewController.imageService = imageService;
	imageService.imageDelegate = photoViewController;
	photoViewController.createContent();
});
