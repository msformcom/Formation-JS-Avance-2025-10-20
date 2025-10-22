export declare class Voiture extends EventTarget {
    #private;
    constructor(couleur: string);
    constructor(prix: number);
    constructor(couleur: string, prix: number);
    f(): void;
    couleur: string;
    augmenterPrix(percent: number, absolute: number): void;
    annee: number;
    model: string;
    marque: string | undefined;
    private _prix;
    get prix(): number;
    set prix(v: number);
}
