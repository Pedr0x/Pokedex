//variables

var type1 = document.querySelector(".type1");
var type2 = document.querySelector(".type2");
var x = document.querySelector(".x");
var weight = document.querySelector(".weight");
var ok = document.querySelector(".ok");
var altura = document.querySelector(".altura");
var input = document.querySelector(".input");
var checkbox = document.querySelector(".checkbox");

//var checked = {state : false};
var more = document.querySelector(".more");
var card = document.querySelector(".card");
var cardDisplay = false;
var abilities = document.querySelector(".abilities");
           // var abilities= document.querySelector(".abilities");
            //var i = 0;
var spriteBackDefault = document.querySelector(".sprite-back");
var spriteFemale = document.querySelector(".sprite_female");
var green = "rgb(90, 255, 5)";
//let materialCheckbox =document.querySelector(".material-checkbox");
//let materialCheckbox = document.querySelector(".material-checkbox");
//side 2
let ability1 = document.querySelector(".ability1");
let ability2 = document.querySelector(".ability2");
let baseXP = document.querySelector(".base-xp");
let habitat = document.querySelector(".habitat");
let generation = document.querySelector(".generation");
let growthRate = document.querySelector(".growth_rate");
let captureRate = document.querySelector(".capture-rate");
let Happiness= document.querySelector(".baseHappiness");
let shape = document.querySelector(".shape");
let previousEvolution = document.querySelector(".previous-evolution");
let hatchCounter = document.querySelector(".hatch-Counter");

var arra = [
	
]
var p;
var h;
var xx;
var koko = arra.length-1;
var text = document.querySelector(".pokedex-text")

let allH3 = document.querySelectorAll("h3");

/*
function isChecked() {
    "use strict";
    if (checkbox.checked === true) {
        checked.state = true;
    } else {
        checked.state = false;
    }
}
         function isChecked (){
			 
	if (checkbox.checked =!= true ) {
		checked.state =! true;
		materialCheckbox.innerHTML = "check_box";
		}
else {
        checked.state =! false;
	materialCheckbox.innerHTML = "check_box_outline_blank";
    }
}*/
/*
function isChecked(){
	if( checked.state == true){
	   			   console.log("t");

		materialCheckbox.innerHTML = `check_box`;
	   } if (checked.state == false) {
	materialCheckbox.innerHTML = "check_box_outline_blank";
		   console.log("f");
    } 
	checkbox.checked = !checkbox.checked;
	console.log(checkbox.checked);



}*/
		   

function resetH3  () {
        for (let i = 0; i < allH3.length; i++) {
     allH3[i].innerHTML = "";
}
console.log("Resetted");    
}



function cardVisibility() {
    "use strict";
    cardDisplay = !cardDisplay;
    if (cardDisplay === true) {
        card.classList.add("card_visible");
    } else {
        card.classList.remove("card_visible");
    }
    console.log(cardDisplay);
}    
        //función    
var poke = (numero) => {
            resetH3();
    
         	if (typeof numero === "string") {
         		numero = numero.toLowerCase();
         		numero = numero.trim();

         	}
			 
	{
		type1.className = "";
		type2.className = "";

		spriteFemale.style.background="";
		spriteFemale.innerHTML = "";
		spriteBackDefault.innerHTML="";
		spriteBackDefault.style.background="";

		x.classList.remove("scale-in-ver-center");
fetch(`https://pokeapi.co/api/v2/pokemon/${numero}/`)
	.then(function (response) {
			response.json()
				.then(function (pokemon) {
						//Nombre
						ok.innerHTML = pokemon.name;
						//Sprite
						if (checkbox.checked == true) {
							x.style.background = `rgb(90, 255, 0)  url(${pokemon.sprites.front_shiny})`;
						} else {
							x.style.background = `rgb(90, 255, 0)  url(${pokemon.sprites.front_default})`;
						}
						//Altura y peso
						baseXP.innerHTML =  ` ${pokemon.base_experience}`;//nuevo

						weight.innerHTML = `${pokemon.weight / 10} Kg`;
						altura.innerHTML = `${pokemon.height / 10} M`;
						//tipo
						let tipoP1 = pokemon.types[0].type.name;
						let typeCSS1 = `type_${pokemon.types[0].type.name}`;
						type1.classList.add(typeCSS1);
						if (pokemon.types[1] == undefined) {
							tipoP2 = "";

						} else {
							tipoP2 = pokemon.types[1].type.name;
							let typeCSS2 = `type_${pokemon.types[1].type.name}`;
							type2.classList.add(typeCSS2);

						}
						type1.innerHTML = tipoP1;
						type2.innerHTML = tipoP2;
					//Sprite back
                
if (pokemon.sprites.back_default == null) {
	spriteBackDefault.innerHTML="Image not available";
} else {
    if(checkbox.checked == true && pokemon.sprites.back_shiny != null){
        spriteBackDefault.style.background = `rgb(90, 255, 0,0) url(${pokemon.sprites.back_shiny}) `;
        
    } else {
         		spriteBackDefault.style.background = `rgb(90, 255, 0,0) url(${pokemon.sprites.back_default}) `;
    }
}
                
if (pokemon.sprites.front_female == null){
   spriteFemale.innerHTML = "Image not available"
   } else { if (checkbox.checked == true && pokemon.sprites.front_shiny_female != null)
          {
              spriteFemale.style.background= `rgb(90, 255, 0,0) url(${pokemon.sprites.front_shiny_female}) `;
          }
          else
        {  
	   spriteFemale.style.background = `rgb(90, 255, 0,0) url(${pokemon.sprites.front_female}) `;}
   }

         				//card
         				//console.log(pokemon.abilities.length);
         				//console.log(tipoP1); dasdasd 
         				//console.log(tipoP2);
         				//console.log(pokemon.abilities[0].ability.name);
         				//   console.log(pokemon.abilities.length);
         	for (let k = 0; k < pokemon.abilities.length; k++) {
         	console.log(pokemon.abilities[k].ability.name);
			ability1.innerHTML = pokemon.abilities[0].ability.name;
				if (pokemon.abilities[1] == undefined){
					ability2.innerHTML="";
					}
				else{
				ability2.innerHTML = pokemon.abilities[1].ability.name
				}
			}
							
         					//  console.log(k);
	/*if (pokemon.abilities[1] == undefined) {
         					//tipoP2 = "";

         				} else {
         					tipoP2 = pokemon.types[1].type.name;
							let typeCSS2 =`type_${pokemon.types[1].type.name}`;
							type2.classList.add(typeCSS2);

         				}*/ 
         					}	)	}	)
			 
.then(function(pokemon) {   

 fetch(`https://pokeapi.co/api/v2/pokemon-species/${numero}/`)
		 .then(function (response) {
         		response.json()
	 .then(function (pokemon)
		  {
		console.log(`El capture rate de este pokemon es ${pokemon.capture_rate}`);
//for(let i = 0; pokemon.flavor_text_entries.language.name != "en"; i++){
var values= pokemon.flavor_text_entries;
let items = Object.values(values);
//let obj = items.find(obj => obj.[].language.name == "en");
    if(pokemon.habitat ==null){habitat.innerHTMl = "" } 
                    else
    {habitat.innerHTML =  `${pokemon.habitat.name}`;
    }

        if (pokemon.evolves_from_species == null){
                        previousEvolution.innerHTML="---";
                    }
        else {
        previousEvolution.innerHTML= `${pokemon.evolves_from_species.name}`;
}
                    
    Happiness.innerHTML=`${pokemon.base_happiness}`;
    captureRate.innerHTML =  `${pokemon.capture_rate}`; generation.innerHTML =  `${pokemon.generation.name}`;
    growthRate.innerHTML =  `${pokemon.growth_rate.name}`;
    shape.innerHTML = `${pokemon.shape.name}`;
hatchCounter.innerHTML= `${pokemon.hatch_counter}`;
					
function findObjectByKey() {
    for (var i = 0; i < items.length; i++) {
        if (items[i].language.name === "en") {
            // h = items[i].flavor_text;
			 // Object.values(h); 
			p =	Object.values(items[i].flavor_text); 
		//console.log(p);
text.innerHTML=p.slice().join("");		
			//console.log(typeof (h));
			
			//console.log(h);
			//p= Object.values(h);}
//console.log( {h{2}.flavor_text});     
//	var xx= (p [0] );	
			
			//console.log(h); OBJECT
			//console.log(p); OBJECT
			//console.log(xx);STRING
			//console.log(xx);
			//console.log(xx.length);		
/*for( var i = 0; i < p.length; i++) {
	
}			*/
		
	}
    }
    return null;
}
findObjectByKey();				
	
}
				   
				  )
		//var entries = Object.entries(pokemon.flavor_text_entries);
}
			  )
				
				}
		  )
			arra.push(numero)	 

}
}
		 
		 



		 //)	)}
	
			
/*.then(function(response) { 
console.log(pokemon.base_happiness);
return response.json();

} )

	 
.catch(function(error) { 
  console.log('Requestfailed', error) 
}); 
		 }*/
			 
			 /*fetch(`https://pokeapi.co/api/v2/pokemon-species/${numero}/`).then(function (response) {
         		response.json().then(
         			function (pokemon) {
         				console.log("funciona");
         	 		})
         	})

         }*/
         
         
       let hello =   () => {
         poke(input.value);

         }
         
            
       poke(1);

function pokeRandom () {
    var random= Math.floor(Math.random() * 803) + 1;
    poke(random);
    input.innerHTML=random;
}



function backPokemon() {
    if ( arra.length == 0){
text.innerHTML="Can´t return to the last Pokémon";      
    } else{
    arra.pop();
    console.log(arra[arra.length - 1]);
    let lastElement = arra[arra.length - 1];
	poke(lastElement);
arra.pop();

}
}


function kk (){
    var shiny = document.querySelector(".shiny");

if( checkbox.checked == true){
		shiny.classlist.add(`shiny_active`);
	   }  else {
	shiny.classlist.remove("shiny_active");
	   }

}
	