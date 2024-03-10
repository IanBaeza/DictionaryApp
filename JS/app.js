
// API de palabras en ingles
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const resultado = document.getElementById("resultado-box");
const sonido = document.getElementById("sonido");
const btnBuscar = document.getElementById("buscar-btn");

btnBuscar.addEventListener("click", () => {
    let inputPalabra = document.getElementById("palabra-input").value;
    // console.log(inputPalabra);

    fetch(`${url}${inputPalabra}`)
        .then((Response) => Response.json())
        .then((data) => console.log(data));

});