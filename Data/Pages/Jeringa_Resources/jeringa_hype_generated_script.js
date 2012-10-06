//	HYPE.documents["Jeringa"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Jeringa_Resources";
	var documentName = "Jeringa";
	var documentLoaderFilename = "jeringa_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:2,i:"b",e:96,r:1,s:96,o:"5"},{f:"2",t:1,d:1,i:"a",e:41,r:1,s:-397,o:"5"},{f:"2",t:2,d:1,i:"b",e:46,r:1,s:49,o:"4"},{f:"2",t:2,d:1,i:"a",e:535,r:1,s:-467,o:"4"},{f:"2",t:3,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"6"},{f:"2",t:5,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"10"},{f:"2",t:7,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"17"},{f:"2",t:9,d:2,i:"c",e:164,r:1,s:225,o:"11"},{f:"2",t:9,d:2,i:"b",e:606,r:1,s:579,o:"11"},{f:"2",t:9,d:2,i:"a",e:845,r:1,s:814,o:"11"},{f:"2",t:9,d:2,i:"d",e:146,r:1,s:200,o:"11"},{f:"2",t:9,d:2,i:"e",e:"1.000000",r:1,s:"0.000000",o:"11"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:11}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"3":{o:"content-box",h:"bannerazul.png",x:"visible",a:0,q:"100% 100%",b:71,j:"absolute",r:"inline",c:1024,z:"2",k:"div",d:8.90435},"11":{o:"content-box",h:"Sello.png",x:"visible",a:814,q:"100% 100%",b:579,j:"absolute",r:"inline",c:225,z:"7",k:"div",d:200,e:"0.000000"},"4":{o:"content-box",h:"Ahora.png",x:"visible",a:-467,q:"100% 100%",b:49,j:"absolute",r:"inline",c:383,z:"3",k:"div",d:227},"17":{o:"content-box",h:"jeringa%20dc.png",x:"visible",a:108,q:"100% 100%",b:409.226,j:"absolute",r:"inline",c:808,z:"9",k:"div",d:248.774,e:"0.000000"},"5":{o:"content-box",h:"Antes.png",x:"visible",a:-397,q:"100% 100%",b:96,j:"absolute",r:"inline",c:295,z:"4",k:"div",d:134},"6":{o:"content-box",h:"Texto11.png",x:"visible",a:22,q:"100% 100%",b:222,j:"absolute",r:"inline",c:582,z:"5",k:"div",d:244,e:"0.000000"},"10":{o:"content-box",h:"Texto12.png",x:"visible",a:583,q:"100% 100%",b:238,j:"absolute",r:"inline",c:400,z:"6",k:"div",d:212,e:"0.000000"},"2":{o:"content-box",h:"EntregaErnestoVagencia3A-01.png",x:"visible",a:-40,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1104,z:"1",k:"div",d:768}},backgroundColor:"#FFFFFF",name:"Untitled Scene"},{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:1,perspective:"600px",oid:"19",initialValues:{},backgroundColor:"#FFFFFF",name:"Untitled Scene 2"}];


	
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
	hypeDoc.setMainContentContainerID("jeringa_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(1);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

