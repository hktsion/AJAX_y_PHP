# AJAX_y_PHP
Encontrar nombres de países a medida que vamos introduciendo el nombre.

¿Cómo funciona ésto del AJAX?

Vale, a medida que vamos metiendo letras, nos van apareciendo países y ésto, ¿cómo se hace?

Bien, ante todo, que no cunda en pánico... 

Lo que hace AJAX es que pide datos al servidor y somos capaces de recuperar esos datos que vendrán normalmente en un XML o un JSON, y podremos mostrar esos datos sin necesidad de recargar la página.

El funcionamiento es el siguiente: 

El documento PHP está preparado para recibir un parámetro GET (que va o van a ser las letras que vamos a ir introduciendo, el país que queremos buscar). Tenemos también un array de países y una función que lo que hace es que a medida que vamos introduciendo palabras, nos da las coincidencias del país (si se encuentra en el array, los países se van mostrando, si no hay coincidencias, no se muestra nada).

Y el AJAX dónde está?
Aún no lo hemos puesto en marcha, ésto son los preparativos.
Ahora sí....

/* Función listaPaises*/
Creamos un script con una función que va  a recibir el "parámetro GET" (lo que vamos metiendo por teclado). Dentro de esta función creamos el objeto Ajax, que es el que se pone en contacto con el servidor para pedir los datos. Con "open" y "send" estamos pidiendo al servidor los datos y con el "onreadystatechange", el servidor nos devuelve los datos, lo único que nos falta es tratarlos con otra función, que en este caso se encuentra en el main.js.

Así de fácil.... o así lo veo yo!

Suerte!

