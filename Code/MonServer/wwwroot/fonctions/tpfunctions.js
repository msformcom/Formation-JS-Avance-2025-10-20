// Clone d'objets

let o=[1,2,"a",true,{a:1,b:2, c:[1,2,3]}, new Date(1968,9,11)];

// o.deepClone => prototype de Object
// o est Array => [e1.deepClone(),e2.deepClone(),...] => map
// o est number => o
// o est string => o
// o est boolean => o
// o est null => null
// o est undefined => undefined
// o est object => {k1:e1.deepClone(),k2:e2.deepClone(),...} for in





let o2=o.deepClone(); // [1,2,"a",true,{a:1,b:2, c:[1,2,3]}]
if(JSON.stringify(o)===JSON.stringify(o2)){
    console.log("clone ok");
}   
