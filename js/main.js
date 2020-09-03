// let trySpan = document.getElementById("trySpan");
let cardBase = ["img/pairePokemon/1.png", "img/pairePokemon/2.png", "img/pairePokemon/3.png", "img/pairePokemon/4.png", "img/pairePokemon/5.png", "img/pairePokemon/6.png"];
let allCards = cardBase.concat(cardBase);   // On copie le tableau pour avoir les images en double
let backCard = "img/pairePokemon/hidden.png";     // On définie l'image de dos
let click = 0;  // Nombre de cliques
let pair = 0;   // Nombre de paires
let tryUser = 0;
let choiceOne;  // Choix de la 1ère carte
let choiceTwo;  // Choix de la 2ème carte
var noRepeat = true;
let timer = 0;
let min = 0;
let sec= 0;


function generateCard(){
    let html = "";
    for(i=0; i<=allCards.length-1; i++){
        let divRow = document.getElementById("divRow");
        html += `
        <div class="divCol col-3">
            <div class="divCard">
                <img src="img/pairePokemon/hidden.png" onclick="chooseCard(${i})" draggable="false">
            </div>
        </div> 
        `;
        divRow.innerHTML = html;
        
    } 
}
generateCard();

function chooseCard(card){
    
    if (noRepeat == true) {
        timerID = setInterval('chrono()', 1000);
        noRepeat = false;
    }
    if(click ===2 ){
        return
    }
    if(click === 0){
        choiceOne = card;
        document.images[card].src = allCards[card];
        document.images[choiceOne].style.pointerEvents = 'none';
        click = 1;
        console.log("prout");
    }
    else{
        click = 2
        choiceTwo = card; 
        document.images[card].src = allCards[card];
        timer = setTimeout('checkCard()', 1000);

        }
    }


function checkCard(){
    tryUser ++;
    document.getElementById("trySpan").innerText = tryUser;
    clearTimeout(checkCard);
    click = 0;
    if(allCards[choiceOne] === allCards[choiceTwo] ){
        document.images[choiceOne].style.pointerEvents = 'none';
        document.images[choiceOne].style.opacity = '0.3';
        document.images[choiceTwo].style.pointerEvents = 'none';
        document.images[choiceTwo].style.opacity = '0.3';
        pair++;
    }
    else{
        document.images[choiceOne].src = backCard;
        document.images[choiceOne].style.pointerEvents = 'auto';
        document.images[choiceTwo].src = backCard;
        return;
    }
    if(pair === 6){
        alert("you win");
        clearInterval(timerID);
    }
    
}   

function random() { 
    for(var i=allCards.length; i; i--) { 
        j = Math.floor(Math.random() * i);
        x = allCards[i-1];
        allCards[i-1] = allCards[j]; 
        allCards[j] = x; 
        console.log(i);
    }
}

random(allCards);

function chrono() {
    if (sec<59) {
        sec++;
        if (sec<10) {
            sec = "0" +sec;
        }
    }
    else if (sec=59) {
        min++;
        sec = "0" + 0;
    }
    document.getElementById("chrono").innerHTML = min + ':' + sec;
}

