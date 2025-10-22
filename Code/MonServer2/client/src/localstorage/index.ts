import type { PersonneDTO } from "../dto/personne.js";
import { Personne } from "../poco/personne.js";


// obtenir la personne à partir du server à l'adresse /data
document.addEventListener("DOMContentLoaded",async()=>{
    let requete=await fetch("/data");
    let personneDTO : PersonneDTO=await requete.json();
    let personne=new Personne(personneDTO.nom,new Date(personneDTO.dateNaissance));
    (document.querySelector("#div_personne")! as HTMLDivElement).innerText=`nom : ${personne.nom} date naissance : ${ personne.dateNaissance}`;

    localStorage.setItem("user", JSON.stringify(personne));
    let userDTO: PersonneDTO=JSON.parse(localStorage.getItem("user")!);
    let userPoco=new Personne(userDTO.nom,new Date(userDTO.dateNaissance));




});