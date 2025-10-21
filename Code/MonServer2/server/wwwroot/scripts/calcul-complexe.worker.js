// Code de worker => thread secondaire
// pas d'accès au DOM
// pas d'accès aux variables globales de la page principale
// communication par messages (postMessage / onmessage)
self.addEventListener("message", function (e) {
    // e est sérialisable => pas de fonctions ou d'objets complexes
    let a = e.data.a;
    let b = e.data.b;
    let r = 0;
    for (let i = 0; i < a; i++) {
        if (i % 10000000 == 0) {
            this.postMessage({ progress: (i / a * 50).toFixed(2) });
        }
        r++;
    }
    for (let i = 0; i < b; i++) {
        if (i % 10000000 == 0) {
            this.postMessage({ progress: (i / a * 50).toFixed(2) });
        }
        r++;
    }
    this.postMessage({ result: r });
});

