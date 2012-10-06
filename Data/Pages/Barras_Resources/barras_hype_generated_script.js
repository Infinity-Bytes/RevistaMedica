//	HYPE.documents["Barras"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Barras_Resources";
	var documentName = "Barras";
	var documentLoaderFilename = "barras_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_124 == "undefined") {
		if(typeof window.HYPE_124_DocumentsToLoad == "undefined") {
			window.HYPE_124_DocumentsToLoad = new Array();
			window.HYPE_124_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=124';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_124_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// guard against loading multiple times
	if(HYPE.documents[documentName] != null) {
		return;
	}
	
	var hypeDoc = new HYPE_124();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",aZ:"i",aL:"i",A:"c",Y:"i",X:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"3"},{f:"2",t:0,d:2,i:"e",e:"0.000000",r:1,s:"1.000000",o:"2"},{f:"2",t:0,d:6,i:"P",e:0,r:1,s:0,o:"6"},{f:"2",t:0,d:6,i:"N",e:0,r:1,s:0,o:"6"},{f:"2",t:0,d:6,i:"O",e:0,r:1,s:0,o:"6"},{f:"2",t:0,d:6,i:"M",e:0,r:1,s:0,o:"6"},{f:"2",t:3,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:4,d:2,i:"e",e:"0.751830",r:1,s:"1.000000",o:"6"},{f:"2",t:4,d:2,i:"d",e:129,r:1,s:0,o:"10"},{f:"2",t:4,d:2,i:"b",e:555,r:1,s:684,o:"10"},{f:"2",t:4,d:2,i:"d",e:171,r:1,s:0,o:"14"},{f:"2",t:4,d:2,i:"b",e:513,r:1,s:684,o:"14"},{f:"2",t:4,d:2,i:"d",e:166,r:1,s:0,o:"15"},{f:"2",t:4,d:2,i:"b",e:518,r:1,s:684,o:"15"},{f:"2",t:4,d:2,i:"d",e:155,r:1,s:0,o:"16"},{f:"2",t:4,d:2,i:"b",e:529,r:1,s:684,o:"16"},{f:"2",t:4,d:2,i:"d",e:151,r:1,s:0,o:"17"},{f:"2",t:4,d:2,i:"b",e:533,r:1,s:684,o:"17"},{f:"2",t:6,d:1,i:"e",e:"0.994072",r:1,s:"0.000000",o:"18"},{f:"2",t:7,d:2,i:"d",e:253,r:1,s:0,o:"24"},{f:"2",t:7,d:2,i:"b",e:431,r:1,s:684,o:"24"},{f:"2",t:7,d:2,i:"d",e:226,r:1,s:0,o:"23"},{f:"2",t:7,d:2,i:"b",e:458,r:1,s:684,o:"23"},{f:"2",t:7,d:2,i:"d",e:259,r:1,s:0,o:"21"},{f:"2",t:7,d:2,i:"b",e:425,r:1,s:684,o:"21"},{f:"2",t:7,d:2,i:"d",e:237,r:1,s:0,o:"22"},{f:"2",t:7,d:2,i:"b",e:447,r:1,s:684,o:"22"},{f:"2",t:7,d:2,i:"b",e:486,r:1,s:684,o:"20"},{f:"2",t:7,d:2,i:"d",e:198,r:1,s:0,o:"20"},{f:"2",t:9,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"25"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:10}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"10":{k:"div",c:57,d:0,I:"None",e:"1.000000",J:"None",K:"None",g:"#FFF351",L:"None",M:0,N:0,aI:5,j:"absolute",x:"visible",O:0,A:"#0F289A",aJ:5,P:0,C:"#0F289A",Q:0,z:"6",aK:5,R:"#E9E9E9",D:"#0F289A",B:"#0F289A",S:0,a:161,aL:5,T:0,b:684},"2":{o:"content-box",h:"EntregaErnestoVagencia3A-10.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1103,z:"1",k:"div",d:767,e:"1.000000"},"21":{k:"div",c:57,d:0,I:"None",e:"1.000000",J:"None",K:"None",g:"#FF1E18",L:"None",M:0,N:0,aI:5,j:"absolute",x:"visible",O:0,A:"#0F289A",aJ:5,P:0,C:"#0F289A",Q:0,z:"14",aK:5,R:"#E9E9E9",D:"#0F289A",B:"#0F289A",S:0,a:633,aL:5,T:0,b:684},"15":{k:"div",c:57,d:0,I:"None",e:"1.000000",J:"None",K:"None",g:"#FFF351",L:"None",M:0,N:0,aI:5,j:"absolute",x:"visible",O:0,A:"#0F289A",aJ:5,P:0,C:"#0F289A",Q:0,z:"8",aK:5,R:"#E9E9E9",D:"#0F289A",B:"#0F289A",S:0,a:557,aL:5,T:0,b:684},"3":{o:"content-box",h:"EntregaErnestoVagencia3A-11.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1107,z:"2",k:"div",d:770,e:"0.000000"},"25":{o:"content-box",h:"Texto10.png",x:"visible",a:823,q:"100% 100%",b:422,j:"absolute",r:"inline",c:183,z:"18",k:"div",d:60,e:"0.000000"},"16":{k:"div",c:57,d:0,I:"None",e:"1.000000",J:"None",K:"None",g:"#FFF351",L:"None",M:0,N:0,aI:5,j:"absolute",x:"visible",O:0,A:"#0F289A",aJ:5,P:0,C:"#0F289A",Q:0,z:"9",aK:5,R:"#E9E9E9",D:"#0F289A",B:"#0F289A",S:0,a:424,aL:5,T:0,b:684},"4":{o:"content-box",h:"Diclofenaco.png",x:"visible",a:783,q:"100% 100%",b:538,j:"absolute",r:"inline",c:223,z:"3",k:"div",d:158,e:"0.000000"},"22":{k:"div",c:57,d:0,I:"None",e:"1.000000",J:"None",K:"None",g:"#FF1E18",L:"None",M:0,N:0,aI:5,j:"absolute",x:"visible",O:0,A:"#0F289A",aJ:5,P:0,C:"#0F289A",Q:0,z:"15",aK:5,R:"#E9E9E9",D:"#0F289A",B:"#0F289A",S:0,a:500,aL:5,T:0,b:684},"23":{k:"div",c:57,d:0,I:"None",e:"1.000000",J:"None",K:"None",g:"#FF1E18",L:"None",M:0,N:0,aI:5,j:"absolute",x:"visible",O:0,A:"#0F289A",aJ:5,P:0,C:"#0F289A",Q:0,z:"16",aK:5,R:"#E9E9E9",D:"#0F289A",B:"#0F289A",S:0,a:367,aL:5,T:0,b:684},"17":{k:"div",c:57,d:0,I:"None",e:"1.000000",J:"None",K:"None",g:"#FFF351",L:"None",M:0,N:0,aI:5,j:"absolute",x:"visible",O:0,A:"#0F289A",aJ:5,P:0,C:"#0F289A",Q:0,z:"10",aK:5,R:"#E9E9E9",D:"#0F289A",B:"#0F289A",S:0,a:291,aL:5,T:0,b:684},"6":{c:723,q:"100% 100%",d:188,I:"None",r:"none",e:"1.000000",J:"None",K:"None",L:"None",h:"BarrasAmarillas.png",M:0,N:0,j:"absolute",x:"visible",O:0,k:"div",P:0,z:"4",a:89,o:"content-box",b:498},"18":{o:"content-box",h:"Dolo.png",x:"visible",a:783,q:"100% 100%",b:491,j:"absolute",r:"inline",c:182,z:"11",k:"div",d:50,e:"0.000000"},"24":{k:"div",c:57,d:0,I:"None",e:"1.000000",J:"None",K:"None",g:"#FF1E18",L:"None",M:0,N:0,aI:5,j:"absolute",x:"visible",O:0,A:"#0F289A",aJ:5,P:0,C:"#0F289A",Q:0,z:"17",aK:5,R:"#E9E9E9",D:"#0F289A",B:"#0F289A",S:0,a:234,aL:5,T:0,b:684},"14":{k:"div",c:57,d:0,I:"None",e:"1.000000",J:"None",K:"None",g:"#FFF351",L:"None",M:0,N:0,aI:5,j:"absolute",x:"visible",O:0,A:"#0F289A",aJ:5,P:0,C:"#0F289A",Q:0,z:"7",aK:5,R:"#E9E9E9",D:"#0F289A",B:"#0F289A",S:0,a:690,aL:5,T:0,b:684},"20":{k:"div",c:57,d:0,I:"None",e:"1.000000",J:"None",K:"None",g:"#FF1E18",L:"None",M:0,N:0,aI:5,j:"absolute",x:"visible",O:0,A:"#0F289A",aJ:5,P:0,C:"#0F289A",Q:0,z:"13",aK:5,R:"#E9E9E9",D:"#0F289A",B:"#0F289A",S:0,a:104,aL:5,T:0,b:684},"19":{o:"content-box",h:"BarrasRojas.png",x:"visible",a:110,q:"100% 100%",b:409,j:"absolute",r:"none",c:630,z:"12",k:"div",d:275}},backgroundColor:"#FFFFFF",name:"Untitled Scene"},{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:1,perspective:"600px",oid:"26",initialValues:{},backgroundColor:"#FFFFFF",name:"Untitled Scene 2"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("barras_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(1);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

