// stock les images joueur dans des variables
// stocker les balise Computer en dur dans des variables
const pierreComp = '<img data-name="shi" class="computerCard" id="shi-computer" src="assets/img/shi-computer.png" width="20%">'
const ciseauxComp = '<img data-name="mi" class="computerCard" id="mi-computer" src="assets/img/mi-computer.png" width="20%">'
const papierComp = '<img data-name="fu" class="computerCard" id="fu-computer" src="assets/img/fu-computer.png" width="20%">'
// stocker les balise JOUEUR en dur dans des variables
const pierre = '<img data-name="shi" id="shi-player" src="assets/img/shi-player.png" width="20%">'
const ciseaux = '<img data-name="mi" id="mi-player" src="assets/img/mi-player.png" width="20%">'
const papier = '<img data-name="fu" id="fu-player" src="assets/img/fu-player.png" width="20%">'
// stock les bouttons dans des variables
const papierBut = document.getElementById('button-fu');
const pierreBut = document.getElementById('button-shi');
const ciseauxBut = document.getElementById('button-mi');
// stock les image de l'adversaire dans des variables

// Place mes bouttons dans un tableau
var mesElmts = [papierBut, pierreBut, ciseauxBut];
var mesImgArrayJoueur = [papier, pierre, ciseaux];
var mesImgArrayComp = [papierComp, pierreComp, ciseauxComp];
for (let i = 0; i < mesElmts.length; i++) {
    mesElmts[i].addEventListener('click', function () {
        let changeMain = document.querySelector('#cardPlayJoueur');
        // changeMain = mesImgArrayJoueur[i];
        document.getElementById('player').innerHTML = mesImgArrayJoueur[i];
        console.log("resultat", document.getElementById('player').childNodes[0].dataset.name);
        // Choix du symbole aléatoire par le computer
        // recuperer aléatoirement 
        // [Math.floor(Math.random() * buttons.length)=> permet de generer un chiffre aléatore compris entre 0 et 2
        // transformer chiffre par mot en js =>
        var indexComputer = Math.floor(Math.random() * 3);

        // console.log("monResultat", computerSign);
        let computerSign = document.getElementById('computer').innerHTML = mesImgArrayComp[indexComputer];
        console.log("resultat", document.getElementById('computer').childNodes[0].dataset.name);
        // recuperer les id pour creer des comparateurs
        // id du joueur:
        let signPlayer = document.getElementById('player').childNodes[0].dataset.name;
        let signComputer = document.getElementById('computer').childNodes[0].dataset.name;
        //    console.log(nameCiseaux);
        // id du computer:

        //     // 1er cas de figure affiche les égalités
        //     // 2eme cas de figure mes conditions de victoire sinon c'est une défaite
        
    
     
        if ( signPlayer == signComputer ){
            console.log('égalite');
            console.log(scorePlayer);
        } else if ((signPlayer == 'shi' && signComputer == 'mi') || (signPlayer == 'mi' && signComputer == 'fu') || (signPlayer == 'fu' && signComputer == 'shi')) {
            scorePlayer++;
            console.log('playerScore', scorePlayer);
            document.getElementById('player-score').textContent = scorePlayer;
        }
        else{
           console.log('perdu');
           scoreComp++;
           console.log('compScore', scoreComp);
           document.getElementById('computer-score').textContent = scoreComp;
        }
   
    })
}
var scorePlayer = 0;
var scoreComp = 0;

// console.log('joueur:', nbrPointJoueur);
// console.log('computer:', nbrPointComputer);




