
// import { getPositionAsync as getPositionAsync } from "../scripts/geolocation.js";
// import { calculsCompexesAsync } from "../scripts/calculsComplexes.js";

import * as services from "../scripts/services.js";


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btn_get_result")!.addEventListener("click",
        async function () {
            let divResult = document.querySelector("#result")! as HTMLDivElement;
            try {
                let pos = await services.getPositionAsync();
                let r=await services.calculsCompexesAsync(2000000000, 2000000000,(p)=>{
                    // callback appelé dans la fonction calculsCompexesAsync
                    // pour me permettre de mettre à jour l'affichage de la progression
                    divResult.innerText = `Progression : ${p}%`;
                });
                divResult.innerText = `Latitude : ${pos.lat} - Longitude : ${pos.long} - Resultat calcul : ${r}`;
            }
            catch (err :any ) {

                divResult.innerText = `Erreur : ${err.message}`;
            }
        }
    );
});
// utiliser cette fonction dans le click du bouton pour afficher la lattitude et la longitude dans la page