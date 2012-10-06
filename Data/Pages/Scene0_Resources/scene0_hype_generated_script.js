//	HYPE.documents["Scene0"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Scene0_Resources";
	var documentName = "Scene0";
	var documentLoaderFilename = "scene0_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:10,i:"f",e:"360deg",r:1,s:"0deg",o:"21"},{f:"2",t:0,d:10,i:"f",e:"360deg",r:1,s:"0deg",o:"19"},{f:"2",t:0,d:10,i:"f",e:"-360deg",r:1,s:"0deg",o:"20"},{f:"2",t:0,d:1,i:"a",e:531,r:1,s:1092,o:"22"},{f:"2",t:1,d:1,i:"b",e:339,r:1,s:335,o:"23"},{f:"2",t:1,d:1,i:"a",e:547,r:1,s:1108,o:"23"},{f:"2",t:2,d:1,i:"b",e:416,r:1,s:410,o:"24"},{f:"2",t:2,d:1,i:"a",e:580,r:1,s:1124,o:"24"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:10}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"21":{o:"content-box",h:"yellow.png",x:"visible",a:-359,q:"100% 100%",b:138,j:"absolute",r:"inline",c:583,z:"15",k:"div",d:583,aY:"0",f:"0deg"},"24":{o:"content-box",h:"Texto3.png",x:"visible",a:1124,q:"100% 100%",b:410,j:"absolute",r:"inline",c:346,z:"19",k:"div",d:110},"19":{o:"content-box",h:"orange.png",x:"visible",a:-105,q:"100% 100%",b:-75,j:"absolute",r:"inline",c:340,z:"14",k:"div",d:340,aY:"0",f:"0deg"},"22":{o:"content-box",h:"Texto1.png",x:"visible",a:1092,q:"100% 100%",b:301,j:"absolute",r:"inline",c:303,z:"17",k:"div",d:67},"20":{o:"content-box",h:"red.png",x:"visible",a:16,q:"100% 100%",b:138,j:"absolute",r:"inline",c:273,z:"16",k:"div",d:273,aY:"0",f:"0deg"},"6":{o:"content-box",h:"A.png",x:"visible",a:199,q:"100% 100%",b:189,j:"absolute",r:"inline",c:427,z:"11",k:"div",d:389},"2":{o:"content-box",h:"EntregaErnestoVagencia3A-01.png",x:"visible",a:-52,q:"100% 100%",b:-17,j:"absolute",r:"inline",c:1128,z:"1",k:"div",d:785},"23":{o:"content-box",h:"TEXTO2.png",x:"visible",a:1108,q:"100% 100%",b:335,j:"absolute",r:"inline",c:303,z:"18",k:"div",d:90}},backgroundColor:"#FFFFFF",name:"Untitled Scene"},{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:1,perspective:"600px",oid:"25",initialValues:{},backgroundColor:"#FFFFFF",name:"Untitled Scene 2"}];


	
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
	hypeDoc.setMainContentContainerID("scene0_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(1);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

