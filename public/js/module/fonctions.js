import * as INSTANCES from "./instance.js"

// Fonction Random le mana du Mage 

export function getRandomManaPoint() {
    let randomNbr = [7, 9, 11];
    let i = Math.floor(Math.random() * randomNbr.length)
    return randomNbr[i];
}

// Fonction Random Flèche de l'archer  

export function getRandomFleche() {
    let randomFleche = [7, 8, 9, 10, 11];
    let i = Math.floor(Math.random() * randomFleche.length)
    return randomFleche[i];
}


// Boss Aléatoire 

export function getRandomBoss() {
    let randomBoss = [INSTANCES.Chronos, INSTANCES.Lilith, INSTANCES.Sauron];
    let i = Math.floor(Math.random() * randomBoss.length)
    return randomBoss[i];
}

// l'énigme de Fort Boyard

export function EnigmeFoutu() {
    const enigmes = [{
            enigme: "Toute chose, il dévore. Il ronge le fer, fait disparaître l’acier et réduit les pierres en poussière. Qui est-ce ?",
            reponse: "Le temps"
        },
        {
            enigme: "Quelle est la lettre la plus tranchante ?",
            reponse: "La H"
        },
        {
            enigme: "Qui a deux aiguilles, mais ne pique pas ?",
            reponse: "Une montre"
        }
    ];
    const enigme = enigmes[Math.floor(Math.random() * enigmes.length)];
    let reponseCorrecte = false;
    let nbmr_Essais = 0;
    while (!reponseCorrecte && nbmr_Essais < 2) {
        const reponse = prompt(enigme.enigme);
        if (reponse === enigme.reponse) {
            reponseCorrecte = true;
        }
        nbmr_Essais++;
    }
    return reponseCorrecte;
}