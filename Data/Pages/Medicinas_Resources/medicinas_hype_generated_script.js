//	HYPE.documents["Medicinas"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Medicinas_Resources";
	var documentName = "Medicinas";
	var documentLoaderFilename = "medicinas_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:2,i:"e",e:"0.000000",r:1,s:"1.000000",o:"3"},{f:"2",t:0,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:2,d:2,i:"d",e:659,r:1,s:785,o:"2"},{f:"2",t:4,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"8"},{f:"2",t:5,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"12"},{f:"2",t:5,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"21"},{f:"2",t:6,d:0.5,i:"d",e:34,r:1,s:42,o:"12"},{f:"2",t:6,d:0.5,i:"a",e:183,r:1,s:176,o:"12"},{f:"2",t:6,d:0.5,i:"b",e:367,r:1,s:363,o:"12"},{f:"2",t:6,d:0.5,i:"c",e:58,r:1,s:72,o:"12"},{f:"2",t:6,d:0.5,i:"d",e:34,r:1,s:42,o:"21"},{f:"2",t:6,d:0.5,i:"a",e:73,r:1,s:66,o:"21"},{f:"2",t:6,d:0.5,i:"b",e:466,r:1,s:462,o:"21"},{f:"2",t:6,d:0.5,i:"c",e:58,r:1,s:72,o:"21"},{f:"2",t:6.5,d:0.5,i:"d",e:43,s:34,o:"12"},{f:"2",t:6.5,d:0.5,i:"a",e:175,s:183,o:"12"},{f:"2",t:6.5,d:0.5,i:"b",e:362,s:367,o:"12"},{f:"2",t:6.5,d:0.5,i:"c",e:74,s:58,o:"12"},{f:"2",t:6.5,d:0.5,i:"d",e:43,s:34,o:"21"},{f:"2",t:6.5,d:0.5,i:"a",e:65,s:73,o:"21"},{f:"2",t:6.5,d:0.5,i:"b",e:461,s:466,o:"21"},{f:"2",t:6.5,d:0.5,i:"c",e:74,s:58,o:"21"},{f:"2",t:7,d:0,i:"d",e:42,s:43,o:"12"},{f:"2",t:7,d:0.5,i:"d",e:34,s:42,o:"12"},{f:"2",t:7,d:0,i:"a",e:176,s:175,o:"12"},{f:"2",t:7,d:0.5,i:"a",e:183,s:176,o:"12"},{f:"2",t:7,d:0,i:"b",e:363,s:362,o:"12"},{f:"2",t:7,d:0.5,i:"b",e:367,s:363,o:"12"},{f:"2",t:7,d:0,i:"c",e:72,s:74,o:"12"},{f:"2",t:7,d:0.5,i:"c",e:58,s:72,o:"12"},{f:"2",t:7,d:0,i:"d",e:42,s:43,o:"21"},{f:"2",t:7,d:0.5,i:"d",e:34,s:42,o:"21"},{f:"2",t:7,d:0,i:"a",e:66,s:65,o:"21"},{f:"2",t:7,d:0.5,i:"a",e:73,s:66,o:"21"},{f:"2",t:7,d:0,i:"b",e:462,s:461,o:"21"},{f:"2",t:7,d:0.5,i:"b",e:466,s:462,o:"21"},{f:"2",t:7,d:0,i:"c",e:72,s:74,o:"21"},{f:"2",t:7,d:0.5,i:"c",e:58,s:72,o:"21"},{f:"2",t:7.5,d:0.5,i:"d",e:43,s:34,o:"12"},{f:"2",t:7.5,d:0.5,i:"a",e:175,s:183,o:"12"},{f:"2",t:7.5,d:0.5,i:"b",e:362,s:367,o:"12"},{f:"2",t:7.5,d:0.5,i:"c",e:74,s:58,o:"12"},{f:"2",t:7.5,d:0.5,i:"d",e:43,s:34,o:"21"},{f:"2",t:7.5,d:0.5,i:"a",e:65,s:73,o:"21"},{f:"2",t:7.5,d:0.5,i:"b",e:461,s:466,o:"21"},{f:"2",t:7.5,d:0.5,i:"c",e:74,s:58,o:"21"},{f:"2",t:8,d:0,i:"d",e:42,s:43,o:"12"},{f:"2",t:8,d:0.5,i:"d",e:34,s:42,o:"12"},{f:"2",t:8,d:0,i:"a",e:176,s:175,o:"12"},{f:"2",t:8,d:0.5,i:"a",e:183,s:176,o:"12"},{f:"2",t:8,d:0,i:"b",e:363,s:362,o:"12"},{f:"2",t:8,d:0.5,i:"b",e:367,s:363,o:"12"},{f:"2",t:8,d:0,i:"c",e:72,s:74,o:"12"},{f:"2",t:8,d:0.5,i:"c",e:58,s:72,o:"12"},{f:"2",t:8,d:0,i:"d",e:42,s:43,o:"21"},{f:"2",t:8,d:0.5,i:"d",e:34,s:42,o:"21"},{f:"2",t:8,d:0,i:"a",e:66,s:65,o:"21"},{f:"2",t:8,d:0.5,i:"a",e:73,s:66,o:"21"},{f:"2",t:8,d:0,i:"b",e:462,s:461,o:"21"},{f:"2",t:8,d:0.5,i:"b",e:466,s:462,o:"21"},{f:"2",t:8,d:0,i:"c",e:72,s:74,o:"21"},{f:"2",t:8,d:0.5,i:"c",e:58,s:72,o:"21"},{f:"2",t:8.5,d:0.5,i:"d",e:43,s:34,o:"12"},{f:"2",t:8.5,d:0.5,i:"a",e:175,s:183,o:"12"},{f:"2",t:8.5,d:0.5,i:"b",e:362,s:367,o:"12"},{f:"2",t:8.5,d:0.5,i:"c",e:74,s:58,o:"12"},{f:"2",t:8.5,d:0.5,i:"d",e:43,s:34,o:"21"},{f:"2",t:8.5,d:0.5,i:"a",e:65,s:73,o:"21"},{f:"2",t:8.5,d:0.5,i:"b",e:461,s:466,o:"21"},{f:"2",t:8.5,d:0.5,i:"c",e:74,s:58,o:"21"},{f:"2",t:9,d:0,i:"d",e:42,s:43,o:"12"},{f:"2",t:9,d:0.5,i:"d",e:34,s:42,o:"12"},{f:"2",t:9,d:0,i:"a",e:176,s:175,o:"12"},{f:"2",t:9,d:0.5,i:"a",e:183,s:176,o:"12"},{f:"2",t:9,d:0,i:"b",e:363,s:362,o:"12"},{f:"2",t:9,d:0.5,i:"b",e:367,s:363,o:"12"},{f:"2",t:9,d:0,i:"c",e:72,s:74,o:"12"},{f:"2",t:9,d:0.5,i:"c",e:58,s:72,o:"12"},{f:"2",t:9,d:0,i:"d",e:42,s:43,o:"21"},{f:"2",t:9,d:0.5,i:"d",e:34,s:42,o:"21"},{f:"2",t:9,d:0,i:"a",e:66,s:65,o:"21"},{f:"2",t:9,d:0.5,i:"a",e:73,s:66,o:"21"},{f:"2",t:9,d:0,i:"b",e:462,s:461,o:"21"},{f:"2",t:9,d:0.5,i:"b",e:466,s:462,o:"21"},{f:"2",t:9,d:0,i:"c",e:72,s:74,o:"21"},{f:"2",t:9,d:0.5,i:"c",e:58,s:72,o:"21"},{f:"2",t:9.5,d:0.5,i:"d",e:43,s:34,o:"12"},{f:"2",t:9.5,d:0.5,i:"a",e:175,s:183,o:"12"},{f:"2",t:9.5,d:0.5,i:"b",e:362,s:367,o:"12"},{f:"2",t:9.5,d:0.5,i:"c",e:74,s:58,o:"12"},{f:"2",t:9.5,d:0.5,i:"d",e:43,s:34,o:"21"},{f:"2",t:9.5,d:0.5,i:"a",e:65,s:73,o:"21"},{f:"2",t:9.5,d:0.5,i:"b",e:461,s:466,o:"21"},{f:"2",t:9.5,d:0.5,i:"c",e:74,s:58,o:"21"},{f:"2",t:10,d:0,i:"d",e:42,s:43,o:"12"},{f:"2",t:10,d:0.5,i:"d",e:34,s:42,o:"12"},{f:"2",t:10,d:0,i:"a",e:176,s:175,o:"12"},{f:"2",t:10,d:0.5,i:"a",e:183,s:176,o:"12"},{f:"2",t:10,d:0,i:"b",e:363,s:362,o:"12"},{f:"2",t:10,d:0.5,i:"b",e:367,s:363,o:"12"},{f:"2",t:10,d:0,i:"c",e:72,s:74,o:"12"},{f:"2",t:10,d:0.5,i:"c",e:58,s:72,o:"12"},{f:"2",t:10,d:0,i:"d",e:42,s:43,o:"21"},{f:"2",t:10,d:0.5,i:"d",e:34,s:42,o:"21"},{f:"2",t:10,d:0,i:"a",e:66,s:65,o:"21"},{f:"2",t:10,d:0.5,i:"a",e:73,s:66,o:"21"},{f:"2",t:10,d:0,i:"b",e:462,s:461,o:"21"},{f:"2",t:10,d:0.5,i:"b",e:466,s:462,o:"21"},{f:"2",t:10,d:0,i:"c",e:72,s:74,o:"21"},{f:"2",t:10,d:0.5,i:"c",e:58,s:72,o:"21"},{f:"2",t:10.5,d:0.5,i:"d",e:43,s:34,o:"12"},{f:"2",t:10.5,d:0.5,i:"a",e:175,s:183,o:"12"},{f:"2",t:10.5,d:0.5,i:"b",e:362,s:367,o:"12"},{f:"2",t:10.5,d:0.5,i:"c",e:74,s:58,o:"12"},{f:"2",t:10.5,d:0.5,i:"d",e:43,s:34,o:"21"},{f:"2",t:10.5,d:0.5,i:"a",e:65,s:73,o:"21"},{f:"2",t:10.5,d:0.5,i:"b",e:461,s:466,o:"21"},{f:"2",t:10.5,d:0.5,i:"c",e:74,s:58,o:"21"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:11}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"7":{o:"content-box",h:"Patrocinadores.png",x:"visible",a:0,q:"100% 100%",b:642,j:"absolute",r:"inline",c:1031,z:"1",k:"div",d:119.565},"3":{o:"content-box",h:"EntregaErnestoVagencia3A-22.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,z:"3",k:"div",d:712,e:"1.000000"},"21":{o:"content-box",w:"",h:"Nuevo.png",x:"visible",a:66,q:"100% 100%",b:462,j:"absolute",r:"inline",c:72,z:"7",k:"div",d:42,e:"0.000000"},"8":{o:"content-box",h:"Medicinas.png",x:"visible",a:-66,q:"100% 100%",b:330,j:"absolute",r:"inline",c:1156,z:"5",k:"div",d:305,e:"0.000000"},"4":{o:"content-box",h:"EntregaErnestoVagencia3A-23.png",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,z:"4",k:"div",d:712,e:"0.000000"},"12":{o:"content-box",w:"",h:"Nuevo.png",x:"visible",a:176,q:"100% 100%",b:363,j:"absolute",r:"inline",c:72,z:"6",k:"div",d:42,e:"0.000000"},"2":{o:"content-box",h:"EntregaErnestoVagencia3A-01.png",x:"visible",a:0,q:"100% 100%",b:-17,j:"absolute",r:"inline",c:1024,z:"2",k:"div",d:785}},backgroundColor:"#FFFFFF",name:"Untitled Scene"},{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:1,perspective:"600px",oid:"22",initialValues:{},backgroundColor:"#FFFFFF",name:"Untitled Scene 2"}];


	
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
	hypeDoc.setMainContentContainerID("medicinas_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(1);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

