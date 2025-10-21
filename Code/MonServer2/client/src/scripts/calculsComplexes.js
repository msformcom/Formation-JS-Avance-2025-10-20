export function calculsCompexesAsync(a, b, callbackProgress) {
    // Utilisation de Web Worker pour exécuter des calculs complexes en arrière-plan
    let worker = new Worker("/scripts/calcul-complexe.worker.js");
    // envoi des données au worker
    worker.postMessage({ a: a, b: b });
    //creation d'une promesse pour gérer la réponse asynchrone
    return new Promise(function (resolve, reject) {
        // attente des messages du worker
        worker.addEventListener("message", function (e) {
            // si progression
            if (e.data.progress) {
                //  (document.querySelector("#result")! as HTMLDivElement).innerText=(`Progression : ${e.data.progress}%`);
                // Le callback de progression sera fourni par le code appelant (facultatif)
                // s'il est founi, on l'appelle avec la valeur de progression
                if (callbackProgress) {
                    callbackProgress(e.data.progress);
                }
            }
            // si résultat
            if (e.data.result) {
                resolve(e.data.result);
            }
        });
    });
}
;
