var producte;
var quantitat;
var marca;
var botoAfegir;
var arrayProductes = [];
var arrayProductes2 = [];

function recollirDades() {
    // En aquest array guardarem les 3 dades de cada producte
    var arrayProducte = [];

    // Afegim les dades del producte a l'array de producte
    arrayProducte.push(producte.value, quantitat.value, marca.value);

    // Afegim aquest arrayProducte a l'array de Productes
    arrayProductes.push(arrayProducte);

    // Reescribim literalment el arrayProductes de LocalStorage cada cop
    localStorage.setItem('arrayProductes', JSON.stringify(arrayProductes));
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

function imprimirProductes() {

    // Recuperem arrayProductes de LocalStorage
    arrayProductes2 = JSON.parse(localStorage.getItem("arrayProductes"));

    for (let index = 0; index < arrayProductes2.length; index++) {

        

    }

}

window.addEventListener("load", init, false); 