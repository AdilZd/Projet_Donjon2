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


// Fonction pour le Boss Aléatoire 

export function getRandomBoss() {
    let randomBoss = [INSTANCES.Chronos, INSTANCES.Lilith, INSTANCES.Sauron];
    let i = Math.floor(Math.random() * randomBoss.length)
    return randomBoss[i];
}

// Fonction pour les énigmes de Fort Boyard

export const enigmes = [
    "Je suis un animal domestique, j'ai quatre pattes, une queue et des moustaches. Qui suis-je ?",
    "J'ai une tête et des pattes, mais pas de corps. Qu'est-ce que je suis ?",
    "Je suis un animal, j'ai des griffes et je suis très agile. Qui suis-je ?",
];
export const reponses = ["Un chat", "Un crayon", "Un cat"];

export let reponseCorrecte = false;
export let nbmr_Essais = 0;

export function checkAnswer() {
    if (reponseCorrecte || nbmr_Essais >= 2) {
        return;
    }
    for (let i = 0; i < enigmes.length; i++) {
        const reponse = prompt(enigmes[i]);
        switch (true) {
            case reponse === reponses[i]:
                reponseCorrecte = true;
                return;
            case nbmr_Essais >= 2:
                return;
            default:
                nbmr_Essais++;
                break;
        }
    }
}



