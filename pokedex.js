//variables

let type1 = document.querySelector(".type1");
let type2 = document.querySelector(".type2");
let mainImgScreen = document.querySelector(".main-img-screen");
let weight = document.querySelector(".weight");
let ok = document.querySelector(".ok");
let altura = document.querySelector(".altura");
let input = document.querySelector(".input");
let checkbox = document.querySelector(".checkbox");

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
let hatchCounter = document.querySelector(".hatch-counter");

var arra = [
	
]
var flavorText;
var koko = arra.length-1;
var text = document.querySelector(".pokedex-text")

let allH3 = document.querySelectorAll("h3");


function resetAll  () {
        for (let i = 0; i < allH3.length; i++) {
     allH3[i].innerHTML = "";
}
    
    	type1.className = "";
		type2.className = "";

		spriteFemale.style.background="";
		spriteFemale.innerHTML = "";
		spriteBackDefault.innerHTML="";
		spriteBackDefault.style.background="";
    
console.log("Resetted");    
}

      



        //mainFunction    
let search = (numero) => {
            resetAll();
        

         	if (typeof numero === "string") {
         		numero = numero.toLowerCase();
         		numero = numero.trim();

         	}
	{

fetch(`https://pokeapi.co/api/v2/pokemon/${numero}/`)
        
	.then(function (response) {
    if (!response.ok) { 
        console.log("xx") ;
        text.innerHTML="No se pudo encontrar ese Pokemon"
                      } else {
			response.json()
    
				.then(function (pokemon) {
						//Nombre
						ok.innerHTML = pokemon.name;
						//Sprite
						if (checkbox.checked == true) {
							mainImgScreen.style.background = `rgb(90, 255, 0)  url(${pokemon.sprites.front_shiny})`;
						} else {
							mainImgScreen.style.background = `rgb(90, 255, 0)  url(${pokemon.sprites.front_default})`;
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
						
         					}	
                     )
}
}
         )
			 
.then(function(pokemon) {   

 fetch(`https://pokeapi.co/api/v2/pokemon-species/${numero}/`)
		 .then(function (response) {
         		response.json()
	 .then(function (pokemon)
		  {
		console.log(`El capture rate de este pokemon es ${pokemon.capture_rate}`);
let values= pokemon.flavor_text_entries;
let items = Object.values(values);
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

			flavorText =	Object.values(items[i].flavor_text); 
text.innerHTML=flavorText.slice().join("");		

	}
    }
    return null;
}
findObjectByKey();				
	
}
				   
				  )
}
			  )
				
				}
		  ) 
        
        arra.push(numero); 

}

}
    

		 
		 

         
         
       let getPokemon =   () => {
         search(input.value);

         }
         

 search(1);

function pokeRandom () {
    let random= Math.floor(Math.random() * 803) + 1;
    search(random);
    console.log(random);
    
}



function backPokemon() {
    if ( arra.length == 0){
        resetAll();
        
text.innerHTML="Can´t return to the last Pokémon";      
    } else{
    arra.pop();
    console.log(arra[arra.length - 1]);
    let lastElement = arra[arra.length - 1];
	search(lastElement);
        arra.pop();

}
    
}


function getShiny (){
    let shiny = document.querySelector(".shiny");

if( checkbox.checked == true){
		shiny.style.background = "linear-gradient(120deg,#ea4806,#ffb805)";
	   }  else {
	shiny.style.background = " #bdb9b9";
	   }

}
	