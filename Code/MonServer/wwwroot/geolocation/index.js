
// import { getPositionAsync as getPositionAsync } from "../scripts/geolocation.js";
// import { calculsCompexesAsync } from "../scripts/calculsComplexes.js";

import * as services from "../scripts/services.js";



document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btn_get_result").addEventListener("click",
        async function () {
            try {
                let pos = await services.getPositionAsync();
                let r=await services.calculsCompexesAsync(2000000000, 2000000000);
                document.querySelector("#result").innerText = `Latitude : ${pos.lat} - Longitude : ${pos.long} - Resultat calcul : ${r}`;
            }
            catch (err) {
                document.querySelector("#result").innerText = `Erreur : ${err.message}`;
            }
        }
    );
});
// utiliser cette fonction dans le click du bouton pour afficher la lattitude et la longitude dans la page