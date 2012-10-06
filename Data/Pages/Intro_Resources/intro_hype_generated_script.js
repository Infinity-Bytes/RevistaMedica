//	HYPE.documents["Intro"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Intro_Resources";
	var documentName = "Intro";
	var documentLoaderFilename = "intro_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:4.6666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"13"},{f:"2",t:0,d:14,i:"f",e:"360deg",r:1,s:"-3240deg",o:"13"},{f:"2",t:2,d:12,i:"f",e:"360deg",r:1,s:"-3240deg",o:"10"},{f:"2",t:2,d:4,i:"e",e:"1.000000",r:1,s:"0.000000",o:"10"},{f:"2",t:2,d:12,i:"f",e:"360deg",r:1,s:"-3240deg",o:"15"},{f:"2",t:2,d:4,i:"e",e:"1.000000",r:1,s:"0.000000",o:"15"},{f:"2",t:2,d:12,i:"f",e:"360deg",r:1,s:"-3240deg",o:"16"},{f:"2",t:2,d:4,i:"e",e:"1.000000",r:1,s:"0.000000",o:"16"},{f:"2",t:2,d:12,i:"f",e:"360deg",r:1,s:"-3240deg",o:"18"},{f:"2",t:2,d:4,i:"e",e:"1.000000",r:1,s:"0.000000",o:"18"},{f:"2",t:2,d:12,i:"f",e:"360deg",r:1,s:"-3240deg",o:"19"},{f:"2",t:2,d:4.0333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"19"},{f:"2",t:2,d:4,i:"e",e:"1.000000",r:1,s:"0.000000",o:"17"},{f:"2",t:2,d:12,i:"f",e:"360deg",r:1,s:"-3240deg",o:"17"},{f:"2",t:4,d:10,i:"f",e:"360deg",r:1,s:"-3240deg",o:"14"},{f:"2",t:4,d:3.3333335,i:"e",e:"1.000000",r:1,s:"0.000000",o:"14"},{f:"2",t:4,d:3.3333335,i:"e",e:"1.000000",r:1,s:"0.000000",o:"20"},{f:"2",t:4,d:10,i:"f",e:"360deg",r:1,s:"-3240deg",o:"20"},{f:"2",t:4,d:3.3333335,i:"e",e:"1.000000",r:1,s:"0.000000",o:"22"},{f:"2",t:4,d:10,i:"f",e:"360deg",r:1,s:"-3240deg",o:"22"},{f:"2",t:4,d:3.3333335,i:"e",e:"1.000000",r:1,s:"0.000000",o:"23"},{f:"2",t:4,d:10,i:"f",e:"360deg",r:1,s:"-3240deg",o:"23"},{f:"2",t:4,d:3.3333335,i:"e",e:"1.000000",r:1,s:"0.000000",o:"24"},{f:"2",t:4,d:10,i:"f",e:"360deg",r:1,s:"-3240deg",o:"24"},{f:"2",t:4.0333333,d:9.9666672,i:"f",e:"360deg",r:1,s:"-3240deg",o:"21"},{f:"2",t:4.0333333,d:3.3333335,i:"e",e:"1.000000",r:1,s:"0.000000",o:"21"},{f:"2",t:4.6666665,d:4.8666673,i:"e",e:"0.252458",s:"1.000000",o:"13"},{f:"2",t:6,d:4.166667,i:"e",e:"0.252458",s:"1.000000",o:"10"},{f:"2",t:6,d:4.166667,i:"e",e:"0.252458",s:"1.000000",o:"15"},{f:"2",t:6,d:4.166667,i:"e",e:"0.252458",s:"1.000000",o:"16"},{f:"2",t:6,d:4.166667,i:"e",e:"0.252458",s:"1.000000",o:"17"},{f:"2",t:6,d:4.166667,i:"e",e:"0.252458",s:"1.000000",o:"18"},{f:"2",t:6.0333333,d:4.0999999,i:"e",e:"0.252458",s:"1.000000",o:"19"},{f:"2",t:7.3333335,d:3.4666667,i:"e",e:"0.252458",s:"1.000000",o:"14"},{f:"2",t:7.3333335,d:3.4666667,i:"e",e:"0.252458",s:"1.000000",o:"20"},{f:"2",t:7.3333335,d:3.4666667,i:"e",e:"0.252458",s:"1.000000",o:"22"},{f:"2",t:7.3333335,d:3.4666667,i:"e",e:"0.252458",s:"1.000000",o:"23"},{f:"2",t:7.3333335,d:3.4666667,i:"e",e:"0.252458",s:"1.000000",o:"24"},{f:"2",t:7.3666668,d:3.4333334,i:"e",e:"0.252458",s:"1.000000",o:"21"},{f:"2",t:9.5333338,d:4.4666662,i:"e",e:"1.000000",s:"0.252458",o:"13"},{f:"2",t:10.133333,d:3.8666668,i:"e",e:"1.000000",s:"0.252458",o:"19"},{f:"2",t:10.166667,d:3.833333,i:"e",e:"1.000000",s:"0.252458",o:"10"},{f:"2",t:10.166667,d:3.833333,i:"e",e:"1.000000",s:"0.252458",o:"15"},{f:"2",t:10.166667,d:3.833333,i:"e",e:"1.000000",s:"0.252458",o:"16"},{f:"2",t:10.166667,d:3.833333,i:"e",e:"1.000000",s:"0.252458",o:"17"},{f:"2",t:10.166667,d:3.833333,i:"e",e:"1.000000",s:"0.252458",o:"18"},{f:"2",t:10.8,d:3.1999998,i:"e",e:"1.000000",s:"0.252458",o:"14"},{f:"2",t:10.8,d:3.1999998,i:"e",e:"1.000000",s:"0.252458",o:"20"},{f:"2",t:10.8,d:3.1999998,i:"e",e:"1.000000",s:"0.252458",o:"22"},{f:"2",t:10.8,d:3.1999998,i:"e",e:"1.000000",s:"0.252458",o:"23"},{f:"2",t:10.8,d:3.1999998,i:"e",e:"1.000000",s:"0.252458",o:"24"},{f:"2",t:10.8,d:3.1999998,i:"e",e:"1.000000",s:"0.252458",o:"21"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:14}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"10":{o:"content-box",h:"orange.png",x:"visible",a:590,q:"100% 100%",b:192,j:"absolute",r:"inline",c:172,z:"5",k:"div",d:172,aY:"0",e:"0.000000",f:"-3240deg"},"25":{o:"content-box",h:"Boton_Ir.png",p:"no-repeat",x:"visible",a:867,q:"100% 100%",b:638,j:"absolute",r:"inline",aA:{type:1,transition:5,sceneOid:"26"},z:"16",c:141,d:75,k:"div",aP:"pointer"},"21":{o:"content-box",w:"",h:"red.png",x:"visible",a:303,q:"100% 100%",b:552,j:"absolute",r:"inline",c:123,z:"12",k:"div",d:123,aY:"0",e:"0.000000",f:"-3240deg"},"15":{o:"content-box",h:"orange.png",x:"visible",a:590,q:"100% 100%",b:396,j:"absolute",r:"inline",c:172,z:"3",k:"div",d:172,aY:"0",e:"0.000000",f:"-3240deg"},"3":{o:"content-box",h:"fondo.png",x:"visible",a:-41,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1105,z:"1",k:"div",d:769},"16":{o:"content-box",h:"orange.png",x:"visible",a:426,q:"100% 100%",b:97,j:"absolute",r:"inline",c:172,z:"6",k:"div",d:172,aY:"0",e:"0.000000",f:"-3240deg"},"22":{o:"content-box",w:"",h:"red.png",x:"visible",a:193,q:"100% 100%",b:323,j:"absolute",r:"inline",c:123,z:"13",k:"div",d:123,aY:"0",e:"0.000000",f:"-3240deg"},"17":{o:"content-box",h:"orange.png",x:"visible",a:254,q:"100% 100%",b:192,j:"absolute",r:"inline",c:172,z:"7",k:"div",d:172,aY:"0",e:"0.000000",f:"-3240deg"},"23":{o:"content-box",w:"",h:"red.png",x:"visible",a:317,q:"100% 100%",b:86,j:"absolute",r:"inline",c:123,z:"14",k:"div",d:123,aY:"0",e:"0.000000",f:"-3240deg"},"13":{o:"content-box",h:"yellow.png",x:"visible",a:370,q:"100% 100%",b:243,j:"absolute",r:"inline",c:283,z:"2",k:"div",d:283,aY:"0",e:"0.000000",f:"-3240deg"},"18":{o:"content-box",h:"orange.png",x:"visible",a:254,q:"100% 100%",b:380,j:"absolute",r:"inline",c:172,z:"8",k:"div",d:172,aY:"0",e:"0.000000",f:"-3240deg"},"24":{o:"content-box",w:"",h:"red.png",x:"visible",a:604,q:"100% 100%",b:86,j:"absolute",r:"inline",c:123,z:"15",k:"div",d:123,aY:"0",e:"0.000000",f:"-3240deg"},"14":{o:"content-box",w:"",h:"red.png",x:"visible",a:700,q:"100% 100%",b:327,j:"absolute",r:"inline",c:123,z:"10",k:"div",d:123,aY:"0",e:"0.000000",f:"-3240deg"},"20":{o:"content-box",w:"",h:"red.png",x:"visible",a:598,q:"100% 100%",b:552,j:"absolute",r:"inline",c:123,z:"11",k:"div",d:123,aY:"0",e:"0.000000",f:"-3240deg"},"19":{o:"content-box",h:"orange.png",x:"visible",a:426,q:"100% 100%",b:482,j:"absolute",r:"inline",c:172,z:"9",k:"div",d:172,aY:"0",e:"0.000000",f:"-3240deg"}},backgroundColor:"#FFFFFF",name:"Escena1"},{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:-0.5,d:0,i:"d",e:768,r:1,s:771,o:"28"},{f:"2",t:-0.5,d:0,i:"a",e:-40,r:1,s:-43,o:"28"},{f:"2",t:-0.5,d:0,i:"b",e:0,r:1,s:0,o:"28"},{f:"2",t:-0.5,d:0,i:"c",e:1104,r:1,s:1109,o:"28"},{f:"2",t:0,d:3.5,i:"f",e:"2160deg",r:1,s:"0deg",o:"27"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:3.5}},sceneIndex:1,perspective:"600px",oid:"26",initialValues:{"28":{o:"content-box",h:"EntregaErnestoVagencia3A-02.png",x:"visible",a:-40,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1104,z:"1",k:"div",d:768},"27":{o:"content-box",h:"IconoCarga.png",x:"visible",a:479,q:"100% 100%",b:351,j:"absolute",r:"inline",c:65,z:"2",k:"div",d:65,aY:"0",e:"0.500710",f:"0deg"}},backgroundColor:"#FFFFFF",name:"Escena2"},{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:2,perspective:"600px",oid:"30",initialValues:{},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("intro_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(1);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

