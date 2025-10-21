document.addEventListener("DOMContentLoaded", function () {


    // Génrator
    function* GetEntiersPositifs(n) {
        let i=0;
        while(i<34){
            yield i;
            i++;
        }
    }


    let tab = GetEntiersPositifs();

    // Ajouter 10 éléments à la liste
    document.querySelector("#btn_suite").addEventListener("click", function(e){
        // Lecture des 10 éléments de l'itérator
        for(let i=0;i<10;i++){
            // lecture
            let next=tab.next();
            if(!next.done){
                // si élément lu 
                let div=document.createElement("div");
                div.innerText=next.value;
                document.querySelector("#elements").appendChild(div);
            }
            else{
                e.target.disabled=true;
                break;
            }

        }
    }
);
});
