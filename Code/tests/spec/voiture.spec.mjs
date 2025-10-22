// jusqu'à recemment on devait utiliser require pour importer des modules dans les tests
// cont Voiture=require("../js/voiture.js").Voiture;

import { Voiture } from "../js/voiture.js";
describe("test voiture", () => {
    let voiture;
    beforeEach(() => {
        voiture = new Voiture("rouge", 20000000);

    });
    it("Année est initialisée par défaut", () => {

        expect(voiture.annee).toBe(new Date().getFullYear());

    });

    it("Data est réélement privé", () => {

        expect(voiture["#data"]).toBeUndefined();

    })
    it("Augmentation correcte",()=>{

        let checks=new Map();
        checks.set(500,600);
        checks.set(1200,1320);
        checks.set(3000,3300);

        for(let e of checks){
            voiture.prix=e[0];
            voiture.augmenterPrix(10,100);
            expect(voiture.prix).withContext(`Le prix initial de ${e[0]} => ${voiture.prix} au lieu de ${e[1]}`).toBe(e[1]);
        }


    });

    it("Le prix ne peut être négatif", () => {

        let error=null;
        try{
            // doit faire une erreur
            voiture.prix=-1000;
        }
        catch(ex){
            error=ex;
        }
        // truthy
        let a;
        if(a){
            // a est truthy (not falsy
            // falsy : 0,"",false,undefined,null, NaN
            // Math.sqrt(-2) => NaN
        }
        expect(error).toBeTruthy();
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe("Le prix ne peut être négatif");

    })

    it("prichanged marche",()=>{
        let prixChange=false;
        voiture.addEventListener("prixchange",()=>{
            prixChange=true;
        })

        voiture.prix++;

        expect(prixChange).toBeTrue();
    })
});