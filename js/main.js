let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
let cardStat = []
let gameZone = document.getElementById("gameZone");
let divRow = document.getElementById("divRow");
let cardStatus = false;

function toggle(id, picture){
    alert("ok" + cardStatus)
    if(cardStatus === false){
        cardStatus = true;
        picture.src = "/img/pairePokemon/"+ id + ".png";
    }
    else{
        cardStatus = false;
        picture.src = "/img/pairePokemon/hidden.png";
    }
    console.log(cardStatus)
}


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
      toggle(cards[card.id],picture);
    });
}



// picture.src = "/img/pairePokemon/"+ cards[card.id] + ".png";
// picture.src = "/img/pairePokemon/"+ cards[i] + ".png";


// if(cardStatus === false){
//     picture.src = "/img/pairePokemon/hidden.png";
// }
// else{
//     picture.src = "/img/pairePokemon/"+ cards[card.id] + ".png";
// }