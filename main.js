import monedas from './app.js'
import grafico from './grafico.js'
grafico('dolar');
monedas();

let elemento = document.getElementById("combobox");
let valorElemento = elemento.options[elemento.selectedIndex].value;
let textoElemento = elemento.options[elemento.selectedIndex].text;

function seleccionaIndicador() {
    elemento = document.getElementById("combobox");
    valorElemento = elemento.options[elemento.selectedIndex].value;
    textoElemento = elemento.options[elemento.selectedIndex].text;

    const nuevograph = document.getElementById("graphbox");
    nuevograph.setAttribute("id", "graphbox")
    nuevograph.innerHTML = ``
    nuevograph.innerHTML = `
    <div class="chart-container">
        <canvas id="mychart" ></canvas>
    </div>`
    const titulo = document.getElementById("graphtitle")
    titulo.innerHTML = `
    <h2>${textoElemento}</h2>
    `

    grafico(valorElemento);
}

document
    .getElementById("combobox")
    .addEventListener("change", seleccionaIndicador);