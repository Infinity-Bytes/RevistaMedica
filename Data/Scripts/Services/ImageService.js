var ImageService = function() {
	var self = this;
	self.imageDelegate = null;

	self.bedImages = {
		"0" : "White-Bed",
		"1" : "Brown-Bed",
		"2" : "Green-Bed"
	};
	//Pillow Images
	self.obtainPillowMenuImages = function(){
		self.menuImages = {};
		for (var i = 1 ; i <= 4; i++) {

			self.menuImages[i-1] = "../Images/Draggables/Cushion/"+self.addZero(i)+".png";
		};
		self.imageDelegate.assignMenuImages(self.menuImages);
	};
	self.obtainPillowImage = function(imageId){
		self.imageDelegate.assignImage(self.menuImages[imageId]);
	};
	self.obtainBackgroundPhoto = function(){
		var image = new Image();
		image.onload = function(){
			self.imageDelegate.refreshBackgroundImage();
		}
		image.onerror = function(){
			self.imageDelegate.createDefaultckgroundImage();
		}
		image.src = '../../../Documents/bphoto.png';
	};
	//Bed Images
	self.obtainBedImages = function(){
		var bedData = {};
		$.each(self.bedImages,function(index,value){
			bedData[index] = {
				"imageUrl": "../Images/Rotatables/"+value+"/01.jpg",
				"article": 	"Conjunto de cama 2903931 "+
		 					"Materiales: Seda, Algodón, Lino, Lycra."
			};
		});
		self.imageDelegate.assignBedImages(bedData);
	};
	self.obtainBedImage = function(imageId){
		var imageName = self.bedImages[imageId]
		var bedData = {
			'title': 'Cama Blanca',
			'imageUrl': "../Images/Rotatables/"+imageName+"/01.jpg",
			'imageId': imageId,
			"article": 	"Conjunto de cama 2903931 "+
		 					"Materiales: Seda, Algodón, Lino, Lycra."
		};
		self.imageDelegate.createBedModalBox(bedData);
	}
	self.obtainBedImageWithNumber = function(imageNumber, imageId){
		var imageName = self.bedImages[imageId];
		var imageUrl= "../Images/Rotatables/"+imageName+"/"+self.addZero(imageNumber)+".jpg";
		self.imageDelegate.assignBedImage(imageUrl);
	}
	//File Name Services
	self.addZero = function(num){
		var stringNum = String(num);
		if(stringNum.length < 2){
			return String("0"+""+stringNum);
		}else
			return stringNum;	
	};
}