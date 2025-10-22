var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Voiture_data;
export class Voiture extends EventTarget {
    /**
     * Construit une voiture à partir des données nécessaire
     * @param {string | number} couleurOrPrix   La couleur ou le prix
     * @param {number | undefined} prix number Le prix
     */
    constructor(couleurOrPrix, prix) {
        super();
        // Initialisation par valeur par défaut
        // Attention : Champs => toute valeur du type correcte est accepté
        this.annee = new Date().getFullYear();
        // private est uniquement respecté par TypeScript
        // private data=1;
        // la donnée est accessible en JS via voiture.data
        _Voiture_data.set(this, 1);
        if (typeof couleurOrPrix === "string") {
            this.couleur = couleurOrPrix;
            if (prix) {
                this.prix = prix;
            }
        }
        else if (typeof couleurOrPrix === "number") {
            this.prix = couleurOrPrix;
        }
        else {
            throw new Error("Paramètre de type incorect : string ou number attendu");
        }
        ;
        __classPrivateFieldSet(this, _Voiture_data, 2, "f");
    }
    f() {
        __classPrivateFieldSet(this, _Voiture_data, 2, "f");
    }
    augmenterPrix(percent, absolute) {
        let augmentation = this.prix * percent / 100;
        augmentation = augmentation > absolute ? augmentation : absolute;
        this.prix += augmentation;
    }
    // let a=v.prix => get()
    get prix() {
        return this._prix;
    }
    // v.prix=10 => set(10)
    set prix(v) {
        if (v < 0) {
            throw new Error("Le prix ne peut être négatif");
        }
        if (this._prix != v) {
            this.dispatchEvent(new Event("prixchange"));
            this._prix = v;
        }
    }
}
_Voiture_data = new WeakMap();
let v = new Voiture("rouge", 1000);
v = new Voiture("rouge"); // prix => 1000
v = new Voiture(1000); // couleur ="vert"
//v=new Voiture()
//# sourceMappingURL=voiture.js.map