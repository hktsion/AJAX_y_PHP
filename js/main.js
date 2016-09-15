'use strict';
//Indica que el documento está listo;
$(document).ready(function(){

	/*
		Estamos utilizando jQuery, pero si te desenvuelves mejor con javascript "nativo", 
		tú eliges, el resultado es el mismo
	*/

	//Mostramos todos los países del array
	$("#contenido").html(listaPaises(""));

	/* 
		Creamos un evento de forma que al ir metiendo letras para buscar el país,
		de forma que cada vez que metememos una letra, vamos lamando a la función de
		Ajax;
	*/
	$("#pais").keyup(function() {
		var pais = $("#pais").val();
		
		listaPaises(pais);

	});
	
});