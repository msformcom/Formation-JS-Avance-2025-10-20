import { bufferCount, filter, fromEvent, interval, map, reduce, scan, throttleTime } from "rxjs";
import { MonGenerator } from "../js/generator.js";
describe("rxjs test", () => {
    beforeAll(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000;
    })
    it("tp rxjs", () => {
        let nbValues=50;
        // sur une page web 
        // fromEvent(document.getElementById("div"),"mousemove")
        fromEvent(new MonGenerator(100),"newvalue")
            //.pipe(throttleTime(500))
            .pipe(map(e => e.value)) // extractiond e la valeur dans l'objet event
            .pipe(bufferCount(nbValues, 1)) // buffer des 3 derniers valeurs
            .pipe(map(tab=>tab.reduce((acc,e)=>acc+e,0)))
            .pipe(map(s=>s/nbValues))
            .pipe(scan((acc,e)=>({m:e,nb:acc.nb+1}),{m:0,nb:0}))
            .subscribe(s=>console.log(s))

        // prendre des valeurs du générator
        // console.log
        // avec un objet qui contient :
        // {nombreDeSorties, moyenneGlissanteDes3dernieresorties} => Max 500ms

        return new Promise(resolve =>
            setTimeout(() => resolve(), 100000)
        );
    })
    // it("manipulation flux", ()=>{
    //     let g=new MonGenerator(30);
    //     fromEvent(g,"newvalue")  // Observable lié aux events newvalue de g

    //     .pipe(map(e=>e.value)) // Observable lié au premier mais qui sort la value de l'event
    //     // interval(20) // 0 1 2 3 
    //     //.pipe(filter(x=>x%2==0)) // 0   2   4   6
    //     // .pipe(map(x=>x*3))
    //     //.pipe(throttleTime(500))
    //     .pipe(scan((acc,x)=>acc+x,0))
    //     //.pipe(bufferCount(3,3))
    //     .subscribe(s=>{
    //         console.log(s);
    //     });

    //     // pourquoi ?
    //     // la fonction va "tourner" jusqu'à la fin de la promesse retournée
    //     return new Promise(resolve => 
    //              setTimeout(() => resolve(), 100000)
    //              );
    // });
});