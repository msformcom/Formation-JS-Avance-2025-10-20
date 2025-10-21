// Promise => représente une opération asynchronee qui va se terminer dans le futur
let request=fetch("http://www.google.fr");

request.then((r)=>{
    r.json().then((data)=>{
        console.log(data);
    }).catch((err)=>{
            console.error(err.message);
    });
})
.catch((err)=>{
    console.error(err.message);
});

console.log("après fetch");