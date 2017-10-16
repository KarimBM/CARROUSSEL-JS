
'use strict';   // Mode strict du JavaScript

/***********************************************************************************/
/* ********************************* DONNEES CARROUSEL *****************************/
/***********************************************************************************/
var button;
var photos;

var link;
var slides;
var img;
var current;
var title;
var random;
var play;
var pause;
var timer;
var pause;
/***********************************************************************************/
/* ******************************** FONCTIONS CARROUSEL ****************************/
/***********************************************************************************/
function refreshSlider ()
{
	img.src = slides[current].src;
	title.textContent = slides[current].title;
}
//----------------------
function onClickLink()
{
	var arrow = document.querySelector("#toolbar-toggle i");
	var toolbar = document.querySelector(".toolbar ul");

    toolbar.classList.toggle("hide");
    arrow.classList.toggle("fa-arrow-right");
    arrow.classList.toggle("fa-arrow-down");
}
//------------------------

function onNextSlide()
{
    current++;
    if(current > slides.length - 1)
    {
    	current = 0;
   	}
	refreshSlider();
}
//------------------------------
function onPreviousSlide()
{
    current--;
    if(current < 0)
    {
    	current = slides.length - 1;
    }
	refreshSlider();
}
//-----------------------------------
function onRandom ()
{
	var x;
    do
	{
		x = Math.floor(Math.random()*slides.length);
	}
	while (current == x)
	current = x;
	img.src = slides[x].src;
	refreshSlider();
}
//--------------------------------------
function onPlay()
{
	var pause= document.querySelector("#slider-toggle i");
	console.log(pause);
	pause.classList.toggle("fa-play");
	pause.classList.toggle("fa-stop");

    if (timer) {
       // stop
       clearInterval( timer );
       timer=null;
    }
    else {
       timer = setInterval(onNextSlide,1000);
    }
}
//-------
function onChangeSlide(event)
{
	console.log(event);
	console.log("J'ai appuyé sur n'importe quelle touche");

}



//var onKeyPress="if (event.keyCode == 37) onPreviousSlide()"
//var onKeyPress="if (event.keyCode == 39) onNextSlide()"





/***********************************************************************************/
/* ******************************** CODE PRINCIPAL *********************************/
/***********************************************************************************/

/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Le gestionnaire d'évènement est une fonction anonyme que l'on donne en deuxième
 * argument directement à document.addEventListener().
 */

 document.addEventListener('DOMContentLoaded', function()
 {


 	/* Initialisation des éléments HTML
      *
      * Exemple :
      *
      * button = document.querySelector("button");
      * photos = document.querySelectorAll("#photos li");
      */

      current = 0; //La première slide c'est la 0
// BOUTONS
      var next = document.querySelector("#slider-next");
      var previous = document.querySelector("#slider-previous");
	  var random = document.querySelector("#slider-random");
	 var play=  document.querySelector("#slider-play");

// Initialisation
      link = document.querySelector("#toolbar-toggle");
      img = document.querySelector("#slider img");
      title = document.querySelector("#slider figcaption");

	  random = document.querySelector("#slider-random");
	  play= document.querySelector("#slider-toggle");

      slides = [
          { src: 'images/1.jpg', title: 'Street Art'          },
          { src: 'images/2.jpg', title: 'Fast Lane'           },
          { src: 'images/3.jpg', title: 'Colorful Building'   },
          { src: 'images/4.jpg', title: 'Skyscrapers'         },
          { src: 'images/5.jpg', title: 'City by night'       },
          { src: 'images/6.jpg', title: 'Tour Eiffel la nuit' }
      ];
	  // affichage de la 1ere image
	  refreshSlider();


	  link.addEventListener("click", onClickLink);
	  document.addEventListener("keydown", onChangeSlide);
      next.addEventListener("click", onNextSlide);
      previous.addEventListener("click", onPreviousSlide);
	  random.addEventListener("click", onRandom);
	  play.addEventListener("click", onPlay);
	  document.addEventListener("keydown", function(e){
    	if(e.keyCode === 37){
        	onPreviousSlide();
    	}
    	else if(e.keyCode === 39){
        	onNextSlide();
    	}
	});

});
