
let t1=[1,2,3];
let t2=[4,5,6];

let t3=[...t1,...t2]; // [1,2,3,4,5,6]
t3=t1.concat(t2);

// destructuration
let [d,e]=[1,2]; // <=>  let d=1; let e=2;
[d,e]=[e,d]; // échange des valeurs de d et e
