

console.log(this);

let f1=function(){
    // This dépend de la façon dont la fonction est appelée
    console.log(this);
};

let f2=()=>{
    // This est syntaxique => il est égal au this au moment de la définition de la focntion
    console.log(this)
};


// Appel de f1 et f2 dans le contexte global
f1();
f2();   
// Appel de f1 et f2 dans le contexte d'un objet
let obj={
    nom:"Mon Objet",
    methode1:f1,
    methode2:f2
};

obj.methode1();
obj.methode2(); 


f1.call({a:1});
f2.call({a:1}); 

// Iteration dans un tableau
// forEach => fonction du tableau

let t=["e","y"];
t.forEach((e,i)=>{

});

for(let i=0;i<t.length;i++){
    let e=t[i];
}
// Itération à travers les éléments
for(let e of t){
    console.log(e);
}
// Itération à travers les indices
for(let i in t){
    console.log(i);
    let e=t[i];
}
// of et in sont disponibles pour les chaînes de caractères
// car elles sont itérables (Iterable)
for(let e of "Bonjour"){
    console.log(e); //  b o n j o u r
}
for(let i of "Bonjour"){
    console.log(i); //
}

let o={a:1,b:2};
for(let k in o){
    console.log(k); // a b
}
// for(let k of o){
//     console.log(k); // erreur o n'est pas itérable
// }


// arguments
let addition=function(){
    console.log(arguments);
    // let somme=0;
    // for(let i=0;i<arguments.length;i++){
    //    let e=arguments[i]
    //     somme=somme+e;
    // } 
    // J'utilise la fonction reduce de Array
    // mais en prenant comme this le pseudo tableau arguments
    let resultat=Array.prototype.reduce.call(arguments,(acc,e)=>acc+e,0);
    return resultat;  
}

// Pseudo tableau arguments
// pseudo array : document.querySelectorAll("div") {0:div,1:div,length:2}

console.log(addition(1,2));

console.log(addition(1,2,3,4));

let nums=[1,2,3,4,5];   
// Fonction reduce
let somme=nums.reduce((acc,e)=>acc+e,0);  

let o1={a:10,b:20};
let o2={c:30,d:40};

// fusion de o1 et o2 dans o3 (syntaxe classique)
Object.assign(o1,o2); // c et d sont ajoutés à o1
var o3=Object.assign({},o1,o2); // o3 contient a,b,c,d

o3={o1,o2};// {o1:refo1,o2:ref o2}
o3={...o1,...o2};// {a:10,b:20,c:30,d:40}

let t1=[1,2,3];
let t2=[4,5,6];

let t3=[...t1,...t2]; // [1,2,3,4,5,6]
t3=t1.concat(t2);

// destructuration
let [d,e]=[1,2]; // <=>  let d=1; let e=2;
[d,e]=[e,d]; // échange des valeurs de d et e





// même chose avec la syntaxe spread

let multiplication=(...args)=>{
    return args.reduce((acc,e)=>acc*e,1);
}

let m=multiplication(4,5,6);