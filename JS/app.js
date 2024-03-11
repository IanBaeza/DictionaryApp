
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
        .then((data) => {
            // console.log(data)
            resultado.innerHTML = `
                <div class="palabra-box">
                    <h3>${inputPalabra}</h3>
                        <button onclick="reproducirSonido()">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                </div>

                <div class="detalle-palabra-p">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>${data[0].phonetic}</p>
                </div>

                <p class="significado-p">
                    ${data[0].meanings[0].definitions[0].definition}
                </p>

                <p class="significado-ejemplo-p">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>
            `;
        sonido.setAttribute("src", `${data[0].phonetics[0].audio}`);
        // console.log(sonido);
        })
        .catch(() => {
            resultado.innerHTML = `
                <div class="palabra-box">
                    <h3>La palabra ${inputPalabra} no se ha encontrado.</h3>
                </div>
            `
        });
});

function reproducirSonido(){
    sonido.play();
}