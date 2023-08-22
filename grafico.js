async function grafico(indicador) {
    try {

        const url = `https://mindicador.cl/api/${indicador}`;
        const response = await fetch(url);
        const index = await response.json();
        const fechas = await index.serie.map(x => new Date(x.fecha).toLocaleDateString())
        const valores = await index.serie.map(x => x.valor)
        const valoresinv = await valores.reverse();
        const fechasinv = await fechas.reverse();


        const canvas = await document.getElementById('mychart')
        const grafico1 = await new Chart(canvas, {
            type: 'line',
            data: {
                labels: fechasinv,
                datasets: [
                    {
                        label: `${indicador}`,
                        data: valoresinv,
                        backgroundColor: [
                            '#32D4AE',
                            '#01384C'
                        ],
                        borderColor: 'rgba(0,0,0,1)',
                        borderWidth: 3
                    }

                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        })


    } catch {
        console.log("Error");
    }
}


export default grafico;