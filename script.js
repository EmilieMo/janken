const BUTTONS = document.querySelectorAll("button");


var score = 100 ;
var resultat = " ";

for ( let i = 0; i < BUTTONS.length; i++ ){

    BUTTONS[i].addEventListener("click", function(){
        const player = BUTTONS[i].innerHTML;
// player est egal au bouton sur laquel je clic dans le tableau BUTTON
        const robot = BUTTONS[Math.floor(Math.random() * BUTTONS.length)].innerHTML
// robot est egale au bouton selectionne de maniere aléatoire grace a la methode RANDOM() qui permet de choisir un nbre au hasard 
// Math.floor() est une fonction qui permet d arrondir un nbre a virgule
        alert("Moi" +" " + ":" + " " + player);
        alert("Lui" + " " + ":" +" " + robot);


if (player == robot){
    resultat = "Egalité";
}
else if ((player == "Pierre" && robot == "Ciseaux") || (player == "Ciseaux" && robot == "Feuille") || (player == "Feuille") && (robot == "Pierre")) {
    resultat = "Gagné";
    hisLife()
}
else {
    resultat = "Perdu";
    myLife()

}
alert(resultat);
    })
}



function myLife(){
    var myLife = document.getElementById("myLife").value += -20;
    if (resultat == "perdu"){
    value = score - 20
}}



function hisLife(){
    var hisLife = document.getElementById("hisLife").value += -20;
    if (resultat == "perdu"){
    score = score - 20 ; 
}}


