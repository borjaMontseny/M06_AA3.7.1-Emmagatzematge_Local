var producte;
var quantitat;
var marca;
var botoAfegir;
var arrayProductes = [];
var arrayProductes2 = [];

function recollirDades() {
    // En aquest array guardarem les 3 dades de cada producte
    var arrayProducte = [];

    var producteValue = producte.value;
    var quantitatValue = quantitat.value;
    var marcaValue = marca.value;

    // Afegim les dades del producte a l'array de producte
    arrayProducte.push(producteValue, quantitatValue, marcaValue);

    // Afegim aquest arrayProducte a l'array de Productes
    arrayProductes.push(arrayProducte);

    // Reescribim literalment el arrayProductes de LocalStorage cada cop
    localStorage.setItem('arrayProductes', JSON.stringify(arrayProductes));

    arrayProductes2 = JSON.parse(localStorage.getItem("arrayProductes"));

    console.log(arrayProductes2[0]);
    imprimirProducte(arrayProductes2[0]);

    // netejar els inputs, quantitat.value = 1, tal i com ho hem trobat
    producte.value = "";
    quantitat.value = 1;
    marca.value = "";
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

function imprimirProducte(arrayProducte) {
    var divContenidor = document.getElementsByClassName("w3-container")[1];

    // Creamos el HTML con InnerHTML
    var productHtml =
        `<div class="w3-card-4 w3-margin-bottom w3-hover-teal">
            <div class="w3-padding w3-xlarge">
                <span data-quantitat="${arrayProducte[0]}" data-marca="${arrayProducte[1]}">${arrayProducte[2]}
                    <span class="w3-right">
                        <i class="material-icons w3-hover-text-amber" style="cursor: pointer;" onclick="infoProduct(this)">info_outline</i>
                        <i class="material-icons w3-hover-text-amber" style="cursor: hand;" onclick="upProduct(this)">keyboard_arrow_up</i>
                        <i class="material-icons w3-hover-text-amber" style="cursor: hand;" onclick="downProduct(this)">keyboard_arrow_down</i>
                        <i class="material-icons w3-hover-text-red" style="cursor: hand;" onclick="deleteProduct(this)">delete_outline</i>
                    </span>
                </span>
            </div>
        </div>`;

    divContenidor.innerHTML += productHtml;
}

function representarArrayProductes() { // en pruebas, no usar

    // Recuperem arrayProductes de LocalStorage
    // arrayProductes2 = JSON.parse(localStorage.getItem("arrayProductes"));

    console.log(arrayProductes2);
    for (let index = (arrayProductes2.length - 1); index >= 0; index--) {
        imprimirProducte(arrayProductes2[index]);
    }

}

window.addEventListener("load", init, false); 