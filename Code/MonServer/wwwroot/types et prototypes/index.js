// Types js
// String
// Number
// Boolean
// Array
// Object

let s="Bonjour";  //new String("Bonjour");
s.substring(0,3); // "Bon"

// type déclaré de s : pas de type
s=1;
s=true;

s.substring(0,3); // erreur au runtime

// Prototypes
s=new String("Bonjour");
console.log(s.constructor); // String
