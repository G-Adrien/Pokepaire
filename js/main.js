let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

let gameZone = document.getElementById("gameZone");
let divRow = document.getElementById("divRow");

let nbClick = 0;





for (i=0; i< cards.length; i++){
    
    let card = document.createElement("div");
    card.classList.add("card", "col-3");
    card.id = i;
    divRow.appendChild(card);

    let picture = document.createElement("img");

    picture.classList.add("card-img-top");
    card.appendChild(picture);
    picture.src = "/img/pairePokemon/hidden.png";
    
    card.addEventListener("click", function(){
        nbClick++
        picture.src = "/img/pairePokemon/"+ cards[card.id] + ".png";
        
    })
};




// picture.src = "/img/pairePokemon/"+ cards[i] + ".png";

