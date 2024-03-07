window.onload = function () {
    var producte = document.getElementsByClassName("w3-input w3-border")[0];
    var quantitat = document.getElementsByClassName("w3-input w3-border")[1];
    var marca = document.getElementsByClassName("w3-input w3-border")[2];
    var botoAfegir;
    var arrayProductes = [];
    var arrayProductes2 = [];

    botoAfegir = document.getElementsByClassName("w3-input w3-button w3-border w3-teal")[0];

    // Creem el listener per recollirDades i l'assignem al botó
    botoAfegir.addEventListener("click", recollirDades, false);

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

        // Netejar els inputs, quantitat.value = 1, tal i com ho hem trobat
        producte.value = "";
        quantitat.value = 1;
        marca.value = "";

        representarArrayProductes(arrayProductes2);
    }

    function netejarLlista() {
        var divContenidor = document.getElementsByClassName("w3-container")[1];
        divContenidor.innerHTML = "";
    }

    function imprimirProducte(arrayProducte) {
        var divContenidor = document.getElementsByClassName("w3-container")[1];

        // Creamos el HTML con InnerHTML
        var productHtml =
            `<div class="w3-card-4 w3-margin-bottom w3-hover-teal">
                <div class="w3-padding w3-xlarge">
                    <span data-quantitat="${arrayProducte[1]}" data-marca="${arrayProducte[2]}">${arrayProducte[0]}
                        <i class="material-icons w3-hover-text-amber" style="cursor: pointer;" onclick="infoProduct(this)">info_outline</i>
                        <i class="material-icons w3-hover-text-amber" style="cursor: hand;" onclick="upProduct(this)">keyboard_arrow_up</i>
                        <i class="material-icons w3-hover-text-amber" style="cursor: hand;" onclick="downProduct(this)">keyboard_arrow_down</i>
                        <i class="material-icons w3-hover-text-red" style="cursor: hand;" onclick="deleteProduct(this)">delete_outline</i>
                    </span>
                </div>
            </div>`;

        divContenidor.innerHTML += productHtml;
    }

    function mostrarAlert(nom, quantitat, marca) {
        alert("Producte: " + nom + "\nQuantitat: " + quantitat + "\n Marca: " + marca);
    }

    function infoProduct(event) {

    }

    function infoProduct(event) {
    }

    function upProduct(event) {
    }

    function representarArrayProductes(arrayProductes2) {
        netejarLlista();

        for (var i = (arrayProductes2.length - 1); i >= 0; i--) {
            imprimirProducte(arrayProductes2[i]);
        }
    }

};