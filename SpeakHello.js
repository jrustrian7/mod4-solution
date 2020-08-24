//*********************Inmediately Invoked Function Expression
(function (window){

	var helloSpeaker = {}; //creacion del objeto
	//helloSpeaker.name = "";/* terminar el codigo para recibir el nombre */
	
	var speakWord = "Hello";

	/*function speak(name) {*/ //funcion anterior
	helloSpeaker.speak = function(name){ //funcion re-escrita
	  console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker; //haciendo visible el objeto helloSpeaker en global

})(window);