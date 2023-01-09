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
    " Quelle était la montagne la plus haute avant que le monde découvre l’Everest ? ",
    "Avant de l’avoir, on ne la veut pas, mais quand on l’a, on ne veut pas la perdre. Qu’est-ce ? ?",
    "Qu’est-ce qui peut remplir une pièce entière sans prendre de place ? ?",
];
export const reponses = ["Le mont everest", "La guerre", "La lumière"];

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



