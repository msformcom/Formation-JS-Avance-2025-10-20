// Génrator
function* GetEntiersPositifs() {
    let i=0;
    while(true){
        yield i;
        i++;
    }
}


let tab = GetEntiersPositifs();
for(let e of tab){
    if(e>1000){
        break
    }
    console.log(e);
}
