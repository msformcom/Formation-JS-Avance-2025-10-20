// npm init
// npm install express
// Chargement du module express
// Require est le module loader de Node.js
// ne marche pas dans un navigateur
const express = require('express');

// Créer un serveur web
const monserveur=express();

// Affecte une fonction au traitement de la requete
// Get /data
monserveur.get("/data",(req,res)=>{
    // Aller chercher dans une BDD et ramener l'objet personne
    let personne={
        nom:"Toto",
        dateNaissance:new Date()
    }
    // Envoi de la personne en json
    res.send(personne);
})

// J'utilise un middleware dont le role est de servir des fichiers statiques
// dans le répertoire wwwroot
monserveur.use(express.static('wwwroot'));



// Lancement du serveur => opération asynchrone
// le démarrage du serveur 
monserveur.listen(8080, function(){
    // fonction callback 
    console.log("Serveur démarré sur le port 8080");
});