async function monedas() {
    try {
        const url = "https://mindicador.cl/api";
        const response = await fetch(url);
        const data = await response.json();

        const dolarelement = document.getElementById("dolarbox");
        const ufelement = document.getElementById("ufbox");
        const bitcoinelement = document.getElementById("bitcoinbox");
        const euroelement = document.getElementById("eurobox");
        const utmelement = document.getElementById("utmbox");

        dolarelement.innerHTML = `
          <div class="logo">
            <img src="./assets/images/dls.png" alt"divisa">
          </div>
          <div class="titulo">
            <p>${data.dolar.nombre}</p>
          </div>
          <div class="valor">
            <p>${data.dolar.valor}</p>
          </div>`;

        ufelement.innerHTML = `
          <div class="logo">
              <img src="./assets/images/dls.png" alt"divisa">
          </div>
          <div class="titulo">
            <p>${data.uf.nombre}</p>
          </div>
          <div class="valor">
            <p>${data.uf.valor}</p>
          </div>`;

        bitcoinelement.innerHTML = `
          <div class="logo">
            <img src="./assets/images/dls.png" alt"divisa">
          </div>
          <div class="titulo">
            <p>${data.bitcoin.nombre}</p>
          </div>
          <div class="valor">
            <p>${data.bitcoin.valor}</p>
          </div>`;

        euroelement.innerHTML = `
          <div class="logo">
            <img src="./assets/images/dls.png" alt"divisa">
          </div>
          <div class="titulo">
            <p>${data.euro.nombre}</p>
          </div>
          <div class="valor">
            <p>${data.euro.valor}</p>
          </div>`;


        utmelement.innerHTML = `
          <div class="logo">
            <img src="./assets/images/dls.png" alt"divisa">
          </div>
          <div class="titulo">
            <p>${data.utm.nombre}</p>
          </div>
          <div class="valor">
            <p>${data.utm.valor}</p>
          </div>`;

        List1.appendchild(dolarelement);
        List1.appendchild(ufelement);
        List1.appendchild(bitcoinelement);
        List1.appendchild(euroelement);
        List1.appendchild(utmelement);


    } catch {
        console.log("Error");
    }
}

export default monedas;