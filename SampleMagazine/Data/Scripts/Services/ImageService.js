var ImageService = function() {
	var self = this;

	self.imageDelegate = null;
	self.menuImages = {};
	

	self.obtainMenuImages = function(){
		for (var i = 1 ; i <= 10; i++) {
			self.menuImages[i-1] = "../Images/Draggables/Cushion/"+self.addZero(i)+".png";
		};
		self.imageDelegate.assignMenuImages(self.menuImages);
	}

	self.obtainImage = function(imageID){
		self.imageDelegate.assignImage(self.menuImages[imageID]);
	}
	
	self.addZero = function(num){
		stringNum = String(num)
		if(stringNum.length < 2){
			return String("0"+""+stringNum)
		}else
			return stringNum;	
	}

	self.obtainBedImage = function(){
		$.ajax({
		    url:'../Images/bed.jpg',
		    type:'HEAD',
		    error: function()
		    {
		        //file not exists
		    },
		    success: function()
		    {
		        //file exists
		    }
		});

	}
}