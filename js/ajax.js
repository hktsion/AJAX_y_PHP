'use strict';

function listaPaises(p){

	/*Creamos el objeto Ajax*/
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		//IE5y6
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	/*Realiza la petición al servidor mediante el métood GET*/
	xmlhttp.open("GET", "servidor/paises.php?q="+p, true);
	xmlhttp.send();

	/*ReadyState y status indican el estado de la solicitud,
	a nosotros nos interesa que el readyState == 4 y status = 200*/
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			//Áquí puedes ver el estado de la solicitud.
			console.log(xmlhttp);

			//Aquí es donde realmente se muestra el resultado;
			$("#contenido").html(xmlhttp.responseText);
		}
	}


}