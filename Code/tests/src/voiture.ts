export class Voiture extends EventTarget{
    // EventTarget est la classe de base des objets qui possèdent des évènemnt

    constructor(couleur:string);
    constructor(prix:number);
    constructor(couleur:string,prix:number);
    /**
     * Construit une voiture à partir des données nécessaire
     * @param {string | number} couleurOrPrix   La couleur ou le prix
     * @param {number | undefined} prix number Le prix
     */
    constructor(couleurOrPrix:string | number,prix?: number) {
        super();
        if(typeof couleurOrPrix==="string"){
            this.couleur=couleurOrPrix;
            if(prix){
                this.prix=prix;
            }
        }else if(typeof couleurOrPrix ==="number"){
            this.prix=couleurOrPrix;
        }
        else{
            throw new Error("Paramètre de type incorect : string ou number attendu");
        }
;
      this.#data=2;
    }

    f(){
        this.#data=2;
    }

    couleur!:string;
    
    augmenterPrix(percent:number,absolute:number){
        let augmentation=this.prix*percent/100;
        augmentation=augmentation> absolute? augmentation:absolute;
        this.prix+=augmentation;
    }



    // Initialisation par valeur par défaut
    // Attention : Champs => toute valeur du type correcte est accepté
    annee=new Date().getFullYear();

    // Je sais que le model sera initialisé plus tard
    model!: string;

    // La marque peut être absente  => marque?:string
    marque: string | undefined;

    // Initialisé dans le constructeur
    // par l'intermédiaire de la propriété
    private _prix!: number;

    // let a=v.prix => get()
    get prix(){
        return this._prix;
    }

    // v.prix=10 => set(10)
    set prix(v:number){
        if(v<0){
            throw new Error("Le prix ne peut être négatif");
        }
        if(this._prix!=v){
            this.dispatchEvent(new Event("prixchange"))
            this._prix=v;
        }
 
    }
    // private est uniquement respecté par TypeScript
    // private data=1;

    // la donnée est accessible en JS via voiture.data
     #data=1;
}


let v=new Voiture("rouge",1000)
v=new Voiture("rouge"); // prix => 1000
v=new Voiture(1000); // couleur ="vert"
 //v=new Voiture()





