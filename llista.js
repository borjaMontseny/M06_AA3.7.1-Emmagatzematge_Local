var producte;
var quantitat;
var marca;
var botoAfegir;
var arrayProductes = [];

function recollirDades() {
    // En aquest array guardarem les 3 dades de cada producte
    var arrayProducto = [];
    // Afegim les dades del producte al array de producte
    arrayProducto.push(producte.value, quantitat.value, marca.value);
    // Afegim aquest arrayProducte al array de Productes
    arrayProductes.push(arrayProducto);
}

// assignem les variables als elements HTML
function init() {
    producte = document.getElementsByClassName("w3-input w3-border")[0];
    quantitat = document.getElementsByClassName("w3-input w3-border")[1];
    marca = document.getElementsByClassName("w3-input w3-border")[2];
    botoAfegir = document.getElementsByClassName("w3-input w3-button w3-border w3-teal")[0];
    // Creem el listener per recollirDades i l'assignem al botó
    botoAfegir.addEventListener("click", recollirDades, false);
}

window.addEventListener("load", init, false); 