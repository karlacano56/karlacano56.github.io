//Obtener los elementos de la clase .close//
let links = document.querySelectorAll(".close");


//Recorrerlos

links.forEach(function(link) {

//Agregar un evento click a cada uno de ellos - case sensitive
	link.addEventlistener("clik", function(ev){
		ev.preventDeFault();
		let content = document.querySelector(".content");

//Quitarle las clases de animación que ya tiene
		content. classList.remove("animate__heartBeat");
		content. classList.remove("animate_animated");

//Quitarle las clases de animación que ya tiene
		content.classList.add("animate__heartBeat");
		content.classList.add("animate_animated");

		setTymeout(function() {
			window.history.go(-1);
		}, 600);
		setInterval
    
		return false;

	});
});