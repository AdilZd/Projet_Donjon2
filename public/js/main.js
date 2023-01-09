import * as INSTANCES from "./module/instance.js"
import * as FONCTIONS from "./module/fonctions.js"
import {
    enigmes,
    reponses,
    reponseCorrecte,
    nbmr_Essais,
    checkAnswer
} from "./module/fonctions.js";


// window.addEventListener("load", function () {
//     document.getElementById("mySound").play();
// });


const guerrier = INSTANCES.heros1
const mage = INSTANCES.heros2
const archer = INSTANCES.heros3
let totalPVHeros = 500;
let totalADHeros = 500;

let boss = FONCTIONS.getRandomBoss();
let totalPVBoss = boss.pv;


// L'histoire le début

alert("Bienvenue dans le donjon de Geek Of Legends");


// Choix du nom des héros  par l'utilisateur

alert(" Vous entendez un bruit sourd de vent , dans le fond du donjon vous appercevez une silhouette immense et ténébreuse devant cette monstruosité vous voyez 3 lueurs scintillantes. LES HEROS !")
let nomHeros1 = prompt(" Quel est le nom du premier Héros ? (Guerrier) ")
guerrier.nom = nomHeros1

let nomHeros2 = prompt(" Quel est le nom du deuxième Héros ? (Mage) ")
mage.nom = nomHeros2

let nomHeros3 = prompt(" Quel est le nom du troisième Héros ? (Archer) ")
archer.nom = nomHeros3


// Répartition des points de compétences par l'utilisateur

// Le choix des PV 

alert(" Vous avez 500 pv et 500 ad à repartir entre vos héros. ")
let pvHero1 = prompt(" Combien le guerrier a t'il de vie ? ")
totalPVHeros -= pvHero1
guerrier.pv = pvHero1

let pvHero2 = prompt(" Combien le mage a t'il de vie? ")
totalPVHeros -= pvHero2
mage.pv = pvHero2

let pvHero3 = prompt(" Combien le archer a t'il de vie? ")
totalPVHeros -= pvHero3
archer.pv = pvHero3

// Le choix de l'AD 

let adHero1 = prompt(" Combien le guerrier a t'il de puissance d'attaque ? ")
totalADHeros -= adHero1
guerrier.ad = adHero1

let adHero2 = prompt(" Combien le mage a t'il de puissance d'attaque ? ")
totalADHeros -= adHero2
mage.ad = adHero2

let adHero3 = prompt(" Combien le archer a t'il de puissance d'attaque ? ")
totalADHeros -= adHero3
archer.ad = adHero3

let postureHero1 = prompt("Quel posture voulez vous que " + guerrier.nom + " adopte ? (attaque/defense/normal) ")
if (postureHero1 == "attaque") {
    guerrier.Offensive()
} else if (postureHero1 == "defense") {
    guerrier.Defensive()
}

let postureHero2 = prompt("Quel posture voulez vous que " + mage.nom + " adopte ? (attaque/defense/normal) ")
if (postureHero2 == "attaque") {
    mage.Offensive()
} else if (postureHero2 == "defense") {
    mage.Defensive()
}

let postureHero3 = prompt("Quel posture voulez vous que " + archer.nom + " adopte ? (attaque/defense/normal) ")
if (postureHero3 == "attaque") {
    archer.Offensive()
} else if (postureHero3 == "defense") {
    archer.Defensive()
}
// Le random / Attribution de la mana et des flèches  

archer.Nmbr_Flèches = FONCTIONS.getRandomFleche();
mage.manaPoints = FONCTIONS.getRandomManaPoint();

// Lé début du combat / La fin du combat / Enigme

alert(" Les héros se battent de manière acharné contre " + boss.nom + " , un combat terrible se prolifère ...")


while (INSTANCES.heros1.pv > 0 || INSTANCES.heros2.pv > 0 || INSTANCES.heros3.pv > 0) {
    if (INSTANCES.heros1.pv <= 0 && INSTANCES.heros2.pv <= 0 && INSTANCES.heros3.pv <= 0) {
        alert("Le boss est venu à bout des héros ...");
        break;
    }
    if (boss.pv <= 0.2 * totalPVBoss) {
        if (checkAnswer()) {
            boss.pv = 0;
            alert(`${max.nom} est mort, les héros ont gagné !`);
            break;
        } else {
            guerrier.pv = 0;
            mage.pv = 0;
            archer.pv = 0;
            alert("Vous avez échoué à l'énigme, les héros sont morts.");
            break;
        }
    }
    boss.attackHeros();
    guerrier.AttaqueBoss(boss);
    mage.AttaqueBoss(boss);
    archer.AttaqueBoss(boss);
    while (guerrier.pv <= 0 && mage.pv <= 0 && archer.pv <= 0) {
        alert(" Le boss a terassé les héros ... Les ténébres envahissent le monde , c'est la fin.");
        break;
    }
}