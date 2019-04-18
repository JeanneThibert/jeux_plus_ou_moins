// Variable definissant le nombre entre 0 et 100
var nb_random = Math.floor(Math.random() * 101);
// Variable du bouton permettant l'envoi du nombre pour la vérification futur 
var btn = document.getElementById('clickme');
// Variable du nombre d'essai étant égale à 10
var nbEssai = 10;

// Les clics et entrer :

btn.addEventListener('click', function (e) {
    // Si clic sur le bouton Validé alors execute les fonctionnalité du jeux    
    game()
});

window.addEventListener('keydown', function (e) {
    // Si clic sur entrer alors execute les fonctionnalité du jeux 
    if (e.keyCode === 13) {
        game();
    }
});

// FONCTIONNALITÉ DU JEUX

function game() {

    // Variable de la valeur saisie est égale a l'id nb
    var valeur_saisie = document.getElementById('nb');
    // Analyse de la valeur de la  saisie 
    var saisie = parseInt(valeur_saisie.value);

// Si le nombre d'essai est supérieur à 0
    if (nbEssai > 0) {
        // Si la valeur saisie est inférieur au chiffre hasard alors trop petit et diminution du nombre d 'essai 
        if (saisie < nb_random) {
            document.getElementById('res').innerHTML = "Trop petit.";
            nbEssai--;
            document.getElementById('nbEssai').innerHTML = nbEssai;
            // Si la valeur saisie est supérieur  au chiffre hasard alors trop grand et diminution du nombre d 'essai  
        }  else if (saisie > nb_random) { 
            document.getElementById('res').innerHTML = "Trop grand.";
            nbEssai--;
            document.getElementById('nbEssai').innerHTML = nbEssai;
            // Si la valeur a été trouvé en moin de 10 essai alors gagné
        } else {
            document.getElementById('res').innerHTML = "Gagné !";
            nbEssai = 10;
        }
           
    } else {
// Si la valeur saisie n'a pas été trouvé en 10 essai alors essayer à nouveau 
        document.getElementById('nbEssai').innerHTML = nbEssai;

        alert("vous avez utilser vos 10 chances ! Réssayer à nouveau ");
    }

    

        
    
   

};