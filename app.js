// Variable definissant le nombre entre 0 et 100
var nombre = Math.floor(Math.random() * 101 );
// Variable du bouton permettant l'envoi du nombre pour la vérification futur 
var btn = document.getElementById('clickme');
// Variable du nombre d'essai étant égale à 10
var nombressai = 10;

// Les clics et entrer :

btn.addEventListener('click' , function(e){
    // Si clic sur le bouton Validé alors execute les fonctionnalité du jeux    
        game()
});

window.addEventListener('keydown', function(e){
    // Si clic sur entrer alors execute les fonctionnalité du jeux 
    if (e.keyCode ===13){
        game();
    }
});

// FONCTIONNALITÉ DU JEUX

function game(){
    // Variable de la valeur saisie est égale a l'id nb
    var valeur_saisie = document.getElementById('nb');
    // Analyse de la valeur de la  saisie 
    var saisie = parseInt(valeur_saisie.value);

    // Si la valeur saisie est inférieur au chiffre hasard alors trop petit et diminution du nombre d 'essai 
    if (saisie < nb_random) {
        document.getElementById('res').innerHTML = "Trop petit.";
        nombreEssai--;
        document.getElementById('nbEssai').innerHTML = nombreEssai;
    } else
     // Si la valeur saisie est supérieur  au chiffre hasard alors trop grand et diminution du nombre d 'essai  
    if (saisie > nb_random) {
        document.getElementById('res').innerHTML = "Trop grand.";
        nombreEssai--;
        document.getElementById('nbEssai').innerHTML = nombreEssai;
    // Si les 10 essai on été utilisé alors essayer de nouveau 
    }if (nombreEssai == 10) {
        nombreEssai--;
        document.getElementById('nbEssai').innerHTML = nombreEssai;
        alert ="vous avez utilser vos 10 chances ! Réssayer à nouveau ";
    }else 
    // Si la valeur saisie est égale au nombre à chercher alors vous avez gagné 
    if (saisie === nb_random ) {
        document.getElementById('res').innerHTML = "Gagné !";
        
    }
}


