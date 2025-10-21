document.addEventListener("DOMContentLoaded", function () {
    window.a=1;
    // count est une variable dont le scope est limité à la closure
    // pas vsible depuis l'extérieur
    var count = 0;
    function incrementValue() {
        count++;
        // DOM => Api qui me permet de manipuler les éléments de la page
        document.getElementById("counter").innerText = count;
    }
    var button = document.querySelector("#btn_plus");
    // Click du button => appel de la fonction incrementValue
    button.addEventListener("click", incrementValue);
    //var lienspdf=document.querySelectorAll("a[href$='.pdf']");

});



// Closure => Fonction sans nom qui s'auto-invoque
(function () {
    console.log("Je suis une closure");
})();