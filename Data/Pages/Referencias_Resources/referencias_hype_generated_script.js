//	HYPE.documents["Referencias"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Referencias_Resources";
	var documentName = "Referencias";
	var documentLoaderFilename = "referencias_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:2}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"4":{o:"content-box",h:"ADolo.png",x:"visible",a:0,q:"100% 100%",b:28,j:"absolute",r:"inline",c:529,z:"2",k:"div",d:190},"5":{o:"content-box",h:"Texto13.png",x:"visible",a:0,q:"100% 100%",b:246,j:"absolute",r:"inline",c:1024,z:"3",k:"div",d:483.803,e:"0.000000"},"2":{o:"content-box",h:"EntregaErnestoVagencia3A-01.png",x:"visible",a:-40,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1104,z:"1",k:"div",d:768}},backgroundColor:"#FFFFFF",name:"Untitled Scene"},{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:1,perspective:"600px",oid:"6",initialValues:{},backgroundColor:"#FFFFFF",name:"Untitled Scene 2"}];


	
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
	hypeDoc.setMainContentContainerID("referencias_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(1);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

