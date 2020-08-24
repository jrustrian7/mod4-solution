//*********************Inmediately Invoked Function Expression
(function (window) {

	var byeSpeaker = {}; //creacion del objeto
	
	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {//funcion re-escrita y recibe de valor el nombre de la persona
	  console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker; //haciendo visible el objeto byeSpeaker en global

})(window);