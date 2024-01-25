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

function imprimirProducte(element) {

    var divContenidor = document.getElementsByClassName("w3-container")[1];

    // Creem el div i li afegim la classe:
    var primerDiv = document.createElement("div");
    primerDiv.setAttribute("class", "w3-card-4 w3-margin-bottom w3-hover-teal");

    // Inserim el div com a fill de divContenidor
    divContenidor.appendChild(primerDiv);

    // I ho repetim amb els demés elements que formen un producte
    var segonDiv = document.createElement("div");
    segonDiv.setAttribute("class", "w3-padding w3-xlarge");

    var primerSpan = document.createElement("span");
    primerSpan.setAttribute("data-quantitat", element.quantitat);
    primerSpan.setAttribute("data-marca", element.marca);
    primerSpan.textContent = element.producte;
    segonDiv.appendChild(primerSpan);

    var segonSpan = document.createElement("span");
    segonSpan.setAttribute("class", "w3-right");
    primerSpan.appendChild(segonSpan);

    var primerI = document.createElement("i");
    primerI.setAttribute("class", "material-icons w3-hover-text-amber");
    primerI.setAttribute("style", "cursor: pointer;");
    primerI.setAttribute("onclick", "infoProduct(this)");
    primerI.textContent = "info_outline";
    segonSpan.appendChild(primerI);

    var segonI = document.createElement("i");
    segonI.setAttribute("class", "material-icons w3-hover-text-amber");
    segonI.setAttribute("style", "cursor: pointer;");
    segonI.setAttribute("onclick", "infoProduct(this)");
    segonI.textContent = "info_outline";
    segonSpan.appendChild(segonI);

    var tercerI = document.createElement("i");
    tercerI.setAttribute("class", "material-icons w3-hover-text-amber");
    tercerI.setAttribute("style", "cursor: pointer;");
    tercerI.setAttribute("onclick", "infoProduct(this)");
    tercerI.textContent = "info_outline";
    segonSpan.appendChild(tercerI);



}

function representarArrayProductes() {

    // Recuperem arrayProductes de LocalStorage
    arrayProductes2 = JSON.parse(localStorage.getItem("arrayProductes"));

    for (let index = (arrayProductes2.length - 1); index >= 0; index--) {
        imprimirProducte(arrayProductes2[index]);
    }

}

window.addEventListener("load", init, false); 