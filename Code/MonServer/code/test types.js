class Toto{

}

class Toto2 extends Toto{

}

let t=new Toto();
let t2=new Toto2();
console.log(typeof "");
console.log(typeof 5);
console.log(typeof true);
console.log(typeof t);
console.log(typeof [1,2]);

console.log([1,2] instanceof Array)
console.log(t instanceof Toto)
console.log(t2 instanceof Toto)

console.log(t2.constructor.name);

let t2bis=new t2.constructor();
console.log(t2bis.constructor.name);