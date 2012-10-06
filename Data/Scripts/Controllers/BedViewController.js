var BedViewController = function(){
	var self = this;
	self.imageService = null;
	self.bedsContainer= null;
	self.imageNumber = 1;

	self.createContent = function(){
		self.bedsContainer = $('#beds');
		self.imageService.obtainBedImages();
	};
	self.assignBedImages = function(bedImages){
		var invert = false;
		$.each(bedImages,function(index,value){
			self.createBedArticle(value,index, invert);
			invert = (invert? false: true);
		});
	};
	self.createBedArticle = function(bedData, imageId, invert){
		var article = $('<div></div>');
		var bedImage = $('<img/>');
		var paragraph = $('<p></p>');

		paragraph.attr("class","bedParag");
		article.attr('class', 'article-wrapper');
		paragraph.text(bedData.article);
		bedImage.attr('class','bed-mini');
		bedImage.attr('src',bedData.imageUrl);

		self.bedsContainer.append(article);

		if(invert){
			article.append(paragraph);
			article.append(bedImage);
		}else{
			article.append(bedImage);
			article.append(paragraph);
		}

		bedImage.lazyload();
		bedImage.data('imageId',imageId);
		bedImage.bind('tr').hammer({
        	transform: true,
        	tap: true,
        	prevent_default: true
		});
		bedImage.bind('transform', function(event){
			event.preventDefault();
			if(event.scale > 1){
				self.imageService.obtainBedImage($(this).data('imageId'));
				self.disableImageEvents();
			}
			return false;
		});
		bedImage.bind('tap', function(event){
			event.preventDefault();
			self.imageService.obtainBedImage($(this).data('imageId'));
			self.disableImageEvents();
			return false;
		});
	};
	self.disableImageEvents = function(){
		$('.bed-mini').unbind('tap');
		$('.bed-mini').unbind('transform');
	}
	self.enableImageEvents = function(){
		$('.bed-mini').bind('transform', function(event){
			event.preventDefault();
			if(event.scale > 1){
				self.imageService.obtainBedImage($(this).data('imageId'));
				self.disableImageEvents();
			}
			return false;
		});
		$('.bed-mini').bind('tap', function(event){
			event.preventDefault();
			self.imageService.obtainBedImage($(this).data('imageId'));
			self.disableImageEvents();
			return false;
		});
	}

	self.createBedModalBox = function(bedData){
		$('.bed-modalbox').remove();
		var bedModalBox = $('<div></div>');
		var modalTitle = $('<h2></h2>');
		var bedImage  = $('<img/>');
		var bedInfo = $('<span></span>');


		bedModalBox.attr('class', 'bed-modalbox');
		bedImage.attr('class','bed-image');
		bedInfo.attr('class','bed-span');
		bedImage.attr('src',bedData.imageUrl);
		bedImage.data('imageId',bedData.imageId);
		bedInfo.text(bedData.article);
		bedModalBox.hide();

		bedImage.hammer({
			drag_min_distance: 0,
        	drag_horizontal: true,
      		drag_vertical: false,
        	transform: true,
        	hold: false,
        	prevent_default: true
		});

		self.bedsContainer.before(bedModalBox);
		bedModalBox.append(bedImage);
		bedModalBox.append(bedInfo);

		bedImage.lazyload();

		bedModalBox.fadeIn('fast', function(){
			$(document).unbind('.modalbox');
			$(document).bind('click.modalbox', function(event) {self.validateClickModalbox(event)});
		});
		bedImage.bind('dragstart', function(){
			self.actualImage = $(this);
		});
		bedImage.bind('drag', function(event){
			self.validateDragDirection(event);
		});
		bedImage.bind('transform', function(event){
			event.preventDefault();
			if(event.scale < 1){
				$('.bed-modalbox').fadeOut('fast', function(){$('.bed-modalbox').remove();});
				self.disableMask();
			}
			return false;
		});
		var callback = function(){
			$('.bed-modalbox').fadeOut('fast', function(){$('.bed-modalbox').remove();});
			self.enableImageEvents();
		}
		self.enableMask(callback);
	};
	self.enableMask = function(callback){
		$('#mask').fadeIn('fast');
		$('#mask').hammer({
        	drag_horizontal: false,
      		drag_vertical: false,
        	transform: false,
        	hold: false,
        	tap: true,
        	prevent_default: true
		});
		$('#mask').bind('tap', function(){
			self.disableMask();
			var isFunction = callback && typeof callback == "function";
			if(!isFunction) return;
			callback.call();
		});
	};
	self.disableMask = function(){
		$('#mask').fadeOut('fast');
		$('#mask').unbind('tap');
	};
	self.validateDragDirection = function(event){
		if(self.actualImage){
			self.actualImage.unbind('drag');
			if(event.direction == 'right')
				self.onRightDrag(event);
			if(event.direction == 'left')
				self.onLeftDrag(event);
		}
	};
	self.onRightDrag = function(event){
		var distance = -1;
		self.imageNumber+= distance;
		self.imageNumber = self.imageNumber < 1? 35: self.imageNumber;
		setTimeout(function(){
			self.imageService.obtainBedImageWithNumber(self.imageNumber,self.actualImage.data('imageId'));
		},100);
	};
	self.onLeftDrag = function(event){
		var distance = 1;
		self.imageNumber+= distance;
		self.imageNumber = self.imageNumber > 36? 1: self.imageNumber;
		setTimeout(function(){
			self.imageService.obtainBedImageWithNumber(self.imageNumber,self.actualImage.data('imageId'));
		},100);
	};
	self.assignBedImage = function(imageUrl){
		if($('.bed-modalbox').attr('class')){
			var bedImage = $('.bed-modalbox').find('.bed-image');
			bedImage.attr('src',imageUrl);
			bedImage.bind('drag',function(event){self.validateDragDirection(event);});
			bedImage.lazyload();
		}
	};
	self.validateClickModalbox = function(event){
		if($('.bed-modalbox').attr('class')){
			if($('.bed-modalbox').has(event.target).length < 1){
				$('.bed-modalbox').fadeOut('fast', function(){$(this).remove();});
				$(document).unbind('.modalbox');
				self.disableMask();
			}
		}
	};
};
var bedViewController = null;
$(document).ready(function(){
	bedViewController = new BedViewController();
	var imageService = new ImageService();
	imageService.imageDelegate = bedViewController;
	bedViewController.imageService = imageService;
	bedViewController.createContent();
});