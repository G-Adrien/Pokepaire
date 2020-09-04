let cardBase = ["img/pairePokemon/1.png", "img/pairePokemon/2.png", "img/pairePokemon/3.png", "img/pairePokemon/4.png", "img/pairePokemon/5.png", "img/pairePokemon/6.png"];
let allCards = cardBase.concat(cardBase);   // On copie le tableau pour avoir les images en double
let backCard = "img/hidden.jpg";     // On définie l'image de dos
let click = 0;  // On stock le nombre de cliques pour différencier la première et le deuxième carte
let pair = 0;   // On stock le nombre de paires pour savoir si le joueur à gagné
let tryUser = 0; // On stock le nombre d'éssaie pour savoir combien de tentative le joueur à fait
let timeVictory = ""; // On stock le nombre temps que le joueur à passé sur la partie
let choiceOne;  // Choix de la 1ère carte
let choiceTwo;  // Choix de la 2ème carte
var noRepeat = true; // Pour déclencher le timer que lorsque le joueur à commencé à jouer
let timerID = 0;
let min = 0;
let sec= 0;

function generateCard(){  // Fonction pour afficher les cartes au chargement
    let html = "";
    for(i=0; i<=allCards.length-1; i++){
        let divRow = document.getElementById("divRow");
        html += `
        <div class="divCol col-4 col-md-3 col-lg-3 col-lg-3">
            <div class="divCard">
                <img src="img/hidden.jpg" onclick="chooseCard(${i})" draggable="false">
            </div>
        </div> 
        `;
        divRow.innerHTML = html;
        
    } 
}

generateCard(); // On charge la fonction

function chooseCard(card){
    
    if (noRepeat == true) {
        timerID = setInterval('chrono()', 1000);
        noRepeat = false;
    }
    if(click ===2){ // On affiche rien à plus de deux clique
        return;
    }
    if(click === 0){ // Choix de la premiere carte
        choiceOne = card;
        document.getElementsByClassName("divCard")[choiceOne].style.border = '0.6rem solid #ffcb05';
        document.images[card].src = allCards[card];
        document.images[choiceOne].style.pointerEvents = 'none';
        click = 1;
    }
    else{ // Choix de la deuxième carte
        click = 2
        choiceTwo = card; 
        document.getElementsByClassName("divCard")[choiceTwo].style.border = '0.6rem solid #ffcb05';
        document.images[card].src = allCards[card];
        timerID= setTimeout('checkCard()', 1000);
    }
}


function checkCard(){ // Vérification des cartes
    tryUser ++;
    document.getElementById("trySpan").innerText = tryUser;
    clearTimeout(checkCard);
    click = 0;
    if( allCards[choiceOne] === allCards[choiceTwo] ){
        document.images[choiceOne].style.pointerEvents = 'none';
        document.images[choiceOne].style.opacity = '0.3';
        document.images[choiceTwo].style.pointerEvents = 'none';
        document.images[choiceTwo].style.opacity = '0.3';
        document.getElementsByClassName("divCard")[choiceOne].style.border = '0.6rem solid #ffcb05';
        document.getElementsByClassName("divCard")[choiceTwo].style.border = '0.6rem solid #ffcb05';
        pair++;
    }
    else{
        document.getElementsByClassName("divCard")[choiceOne].style.border = '0.6rem solid #192653';
        document.getElementsByClassName("divCard")[choiceTwo].style.border = '0.6rem solid #192653';
        document.images[choiceOne].src = backCard;
        document.images[choiceOne].style.pointerEvents = 'auto';
        document.images[choiceTwo].src = backCard;
        return
    }
    
    if(pair === 6){ // Si les 6 paires on été trouvé
        document.getElementById("closePanel").style.display = "block"
        document.getElementById("userTime").innerText = min + ':' + sec;
        document.getElementById("userTry").innerText = tryUser;
        clearInterval(timerID);
    }
}   

function random() { // Function pour génération de l'aléatoire 
    for(var i=allCards.length; i; i--) { 
        j = Math.floor(Math.random() * i);
        x = allCards[i-1];
        allCards[i-1] = allCards[j];
        allCards[j] = x;
    }
}

random(allCards); // Appel de la fonction

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
    if(pair === 6){ //fin du minuteur lorsque la partie est fini
        return;
    }
    document.getElementById("chrono").innerHTML = min + ':' + sec;
}

function closePanel(){ // fonction pour caché le panneau de victoire.
    document.getElementById("closePanel").style.display = "none";
}