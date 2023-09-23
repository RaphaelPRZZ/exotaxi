 "use scrict"


 let musiques=["Musique1", "Musique2", "Musique3", "Musique4", "Anissa-Wejdene"];//variable tableau pour la musique

// Variables pour le personnage, les feux rouges et les taxis restants
let prenom = "John";
let santeMentale = 10;
let feuxRougesRestants = 30;
let taxisRestants = 30; // Nombre initial de taxis disponibles que jai mis au meme nombre max de feu rouge
let taxisUtilises = 0; // Nombre de taxis utilisés

// Fonction du feu rouge pour quand John passe, le total de feu restant diminue de 1
function passerFeuRouge(){
    feuxRougesRestants--;

    // Générer une musique aléatoire
    const musiqueEcoutee=musiques[Math.floor(Math.random() * musiques.length)];

    // Vérifier si la musique est "Anissa-Wejdene" John perd 1 point de santé mentale et qu'il change de taxi par la même occasion
    if (musiqueEcoutee == "Anissa-Wejdene") {
        santeMentale -= 1;
        utiliserTaxi();
    }

    return musiqueEcoutee;//fait pour que la musique redevienne aléatoire a tout les feux
}

// Fonction pour utiliser un taxi 
function utiliserTaxi(){
    if (taxisRestants > 0) {
        taxisUtilises++;
        taxisRestants--;
        console.log(" John a utilisé taxi numero " + (taxisUtilises));//pour montrer le nombre de taxi que Joohn a utilisé
    }
}

// Boucle principale jusqu'à ce que la santé mentale atteigne 0 ou qu'il n'y ait plus de feux rouges
while (santeMentale > 0 && feuxRougesRestants>0){
    const musiqueEcoutee = passerFeuRouge();
    console.log(`${prenom} a écouté la musique "${musiqueEcoutee}". Santé mentale : ${santeMentale}`);
}

// Vérifier si John est arrivé chez lui ou s'il y a eu une "explosion"
if (feuxRougesRestants <= 0){
    console.log("John est bien arrivé chez lui.");
}

if (santeMentale <=0 ){
    console.log("EXPLOSION");//si la santé mental est a 0 alors message EXPLOSION s'affiche
}

// Afficher le nombre de taxis utilisés
console.log(`Nombre de taxis utilisés : ${taxisUtilises}`);

