// # GeekOfLegends

import * as FONCTIONS from "../main.js"
import * as INSTANCES from "./instance.js"

export class Characters {
    constructor(nom, pv, ad) {
        this.nom = nom;
        this.pv = pv;
        this.ad = ad;
    }
}

export class Boss extends Characters {
    constructor(nom, pv, ad, ) {
        super(nom, pv, ad);
    }
    attackHeros(){
        let listHeros = [INSTANCES.heros1, INSTANCES.heros2, INSTANCES.heros3]
        let choix = Math.floor(Math.random() * listHeros.length)
        let heros = listHeros [choix];
        heros.pv -= this.ad;
    }
    if ( ) {
        
    }
}

export class Guerrier extends Characters {
    constructor(nom, pv, ad, ragePoints) {
        super(nom, pv, ad);
        this.ragePoints = ragePoints;
    }
    Offensive () {
        this.ad *= 1.4;
        this.pv *= 0.75;
    }
    Defensive () {
        this.ad *= 0.5;
        this.pv *= 2.5;
    }
    AttaqueBoss (boss) {
        if (this.pv > 0) {
            if (this.ragePoints < 4) {
                boss.pv -=this.ad;
                console.log(this.nom + " attaque " + boss.nom + " et il subit " + this.ad);
                this.ragePoints += 1;
                console.log(this.nom + " augmente sa rage et atteint " + this.ragePoints);
            } else {
                this.ad *= 1.25;
                console.log("La rage de " + this.nom + " et augmente son attaque qui passe à " + this.ad);
                boss.pv-=this.ad;
                console.log(this.nom + " attaque " + boss.nom + " et il subit " + this.ad);
                this.ragePoints = 0;
                this.ad /= 1.25;
                console.log(this.nom + " voit son attaque revenir à la normale ainsi que sa rage qui est de " + this.ragePoints);
            }
        }
    }
}

export class Mage extends Characters {
    constructor(nom, pv, ad, manaPoints) {
        super(nom, pv, ad);
        this.manaPoints = manaPoints;
    }
    Offensive () {
        this.ad *= 1.4;
        this.pv *= 0.75;
    }
    Defensive () {
        this.ad *= 0.5;
        this.pv *= 2.5;
    }
    AttaqueBoss (boss) {
        if (this.pv > 0) {
            if (this.manaPoints > 0) {
                boss.pv -= this.ad;
                console.log(this.nom + " attaque " + boss.nom + " et il subit " + this.ad + " point de dégats ");
                this.manaPoints -= 2;
                console.log(this.nom + " perd 2 de mana et atteint " + this.manaPoints + " point de mana");
            }
            else {
                this.manaPoints += 7;
                console.log(this.nom + " n'a plus de mana ce qui l'empeche d'attaquer.");
                console.log(this.nom + " recharge sa mana " + this.manaPoints);
            }
        }
    }
}

export class Archer extends Characters {
    constructor(nom, pv, ad, Nmbr_Flèches) {
        super(nom, pv, ad);
        this.Nmbr_Flèches = Nmbr_Flèches;
    }
    Offensive () {
        this.ad *= 1.4;
        this.pv *= 0.75;
    }
    Defensive () {
        this.ad *= 0.5;
        this.pv *= 2.5;
    }
    AttaqueBoss (boss) {
        if (this.pv > 0) {
            if (this.Nmbr_Flèches > 0) {
                boss.pv -= this.ad;
                console.log(this.nom + " attaque " + boss.nom + " et il subit " + this.ad + " points de dégats");
                this.Nmbr_Flèches -= 1;
                console.log(this.nom + " perd 1 fleches");
            } else {
                this.Nmbr_Flèches += 6;
                console.log(this.nom + " n'a plus de fleches ce qui l'empeche d'attaquer");
                console.log(this.nom + " reprend des fleches");
            }
        }
    }
}

