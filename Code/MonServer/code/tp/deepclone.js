// Clone d'objets

let o=[1,2,"a",true,{a:1,b:2, c:[1,2,3]}, new Date(1968,8,11)];


// o.deepClone => prototype de Object
// o est Array => [e1.deepClone(),e2.deepClone(),...] => map

// o est object => {k1:e1.deepClone(),k2:e2.deepClone(),...} for in

function deepClone(v){

    console.log(v);
    if(v ===null) return null;
    if(v==undefined) return undefined;
    if(typeof v ==="number" || typeof v == "string" || typeof v == "boolean") return v;
    if(typeof v ==="number") return v;
    if(v instanceof Array){
        return v.map(e=> deepClone(v))
    }
    if(v instanceof Date) return new Date(v);
    if(v instanceof Object){
        let r={};
        for(let name in v){
            let valeur=v[name];
            r[name]=deepClone(valeur);
        }
        return r;
    }
}

Object.prototype.deepClone=function(){
    return deepClone(this);
    };



let o2=o.deepClone(); // [1,2,"a",true,{a:1,b:2, c:[1,2,3]}]
console.log(JSON.stringify(o));
console.log(JSON.stringify(o2))
if(JSON.stringify(o)===JSON.stringify(o2)){
    console.log("clone ok");
}   