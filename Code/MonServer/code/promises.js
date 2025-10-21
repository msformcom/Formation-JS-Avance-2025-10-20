// Promise => représente une opération asynchronee qui va se terminer dans le futur
// Constructeur de promesse
let request=new Promise((resolve,reject)=>{
     console.log("insertion de batch immediate");
    setTimeout(()=>{
        console.log("batch suivant");
    },1)
    // code à exécuter
    for(let i =0;i<10000000000;i++){
        let a=i;
    }
    console.log("fin de boucle");
    resolve('{"data":4}');
})

request.then((r)=>{
    console.log(JSON.parse(r).data);
})
.catch((err)=>{
    console.error(err.message);
});

console.log("Fin de batch");

// batch => code js exécuté par l'interpréteur suite à évènement déclenché par le systeme


function additionAsync(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{ 
            resolve(a+b)
        },1000);
    });
}


// utilisation sans async/await
(function(){
    // Ajouter 1 et 2
    // Ajouter 5 et 6
    // Ajouter les deux résultats
    additionAsync(1,2).then((r1)=>{
        additionAsync(5,6).then(r2=>{
            additionAsync(r1,r2).then(r3=>{
                console.log("Sans all",r3);
            });
        });
    });

    Promise.all([additionAsync(1,2),additionAsync(5,6)]).then(r=>{
        additionAsync(r[0],r[1]).then(r=>{
            console.log("Avec all", r);
        })
    });
})();

// Utilisation async/await
(async function(){
    // Ajouter 1 et 2
    // Ajouter 5 et 6
    // Ajouter les deux résultats
    let r1et2=await Promise.all([additionAsync(1,2),additionAsync(5,6)]);
    let r3=await additionAsync(...r1et2);
    console.log(r3);



})();

(function(){

    additionAsync(1,2).then(r1=>{
        // on a attendu r1
        console.log(r1);
    })
})();



