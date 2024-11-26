fetch('https://in3.dev/inv/')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        //Pirkėjo ir pardavėjo duomenys  
        const saskaitosNumeris = document.querySelector('#saskaitosNumeris');
        const pardavejoVardas = document.querySelector('#pardavejoVardas');
        const pardavejoAdresas = document.querySelector('#pardavejoAdresas');
        const pardavejoKodas = document.querySelector('#pardavejoKodas');
        const pardavejoVat = document.querySelector('#pardavejoVat');
        const pardavejoTelNumeris = document.querySelector('#pardavejoTelNumeris');
        const pardavejoElPastas = document.querySelector('#pardavejoElPastas');
        pardavejoVardas.innerHTML = `
    ${data.company.seller.name}`
        pardavejoAdresas.innerHTML = `
    ${data.company.seller.address}`
        pardavejoKodas.innerHTML = `
    ${data.company.seller.code}`
        pardavejoVat.innerHTML = `
    ${data.company.seller.vat}`
        pardavejoTelNumeris.innerHTML = `
    ${data.company.seller.phone}`
        pardavejoElPastas.innerHTML = `
    ${data.company.seller.email}`
        saskaitosNumeris.innerHTML = `
    Sąskaitos numeris: ${data.number}`
        const pirkejoVardas = document.querySelector('#pirkejoVardas');
        const pirkejoAdresas = document.querySelector('#pirkejoAdresas');
        const pirkejoKodas = document.querySelector('#pirkejoKodas');
        const pirkejoVat = document.querySelector('#pirkejoVat');
        const pirkejoTelNumeris = document.querySelector('#pirkejoTelNumeris');
        const pirkejoElPastas = document.querySelector('#pirkejoElPastas');
        pirkejoVardas.innerHTML = `
    ${data.company.buyer.name}`
        pirkejoAdresas.innerHTML = `
    ${data.company.buyer.address}`
        pirkejoKodas.innerHTML = `
    ${data.company.buyer.code}`
        pirkejoVat.innerHTML = `
    ${data.company.buyer.vat}`
        pirkejoTelNumeris.innerHTML = `
    ${data.company.buyer.phone}`
        pirkejoElPastas.innerHTML = `
    ${data.company.buyer.email}`

        //Dabartinė ir apmokėjimo data
        const dabartineData = document.querySelector('#dabartineData');
        const apmokejimoData = document.querySelector('#apmokejimoData');
        dabartineData.innerHTML = `
    ${data.date}`
        apmokejimoData.innerHTML = `
    ${data.due_date}`

        // Perkamų prekių pridėjimas

        const prekiuContainer = document.getElementById('visosPrekesContainer');
        const visuPrekiuKainaDiv = document.getElementById('visuPrekiuKaina');
        const bendrasPVM = document.getElementById('bendrasPVM');
        const PVM = 0.21;

        const visosPrekes = (prekes) => {
            let visuPrekiuKaina = 0;
            prekes.forEach((preke, prekesSkaicius) => {
                const tr = document.createElement('tr');
                const prekesPavadinimas = preke.description;
                let nuolaida;
                if (preke.discount.type === 'percentage') {
                    nuolaida = preke.discount.value + '%';
                } else if (preke.discount.type === 'fixed') {
                    nuolaida = preke.discount.value + '€';
                }
                else {
                    nuolaida = '';
                }
                const kaina = preke.price;
                const kiekis = preke.quantity;

                const prekesKainaBeNuolaidos = kaina * kiekis;
                let prekesKainaSuNuolaida;


                if (nuolaida.includes('%')) {
                    prekesKainaSuNuolaida = prekesKainaBeNuolaidos - (kaina * kiekis * (parseFloat(nuolaida.replace('%', '')) / 100));
                } else if (nuolaida.includes('€')) {
                    prekesKainaSuNuolaida = prekesKainaBeNuolaidos - (parseFloat(nuolaida.replace('€', '')));
                } else {
                    prekesKainaSuNuolaida = prekesKainaBeNuolaidos;
                }
                const prekesKainaSuPVM = (prekesKainaSuNuolaida + (prekesKainaSuNuolaida * PVM)).toFixed(2);
                tr.innerHTML = `
            <td class="border-b py-3 pl-3">${prekesSkaicius + 1}.</td>
                  <td class="border-b py-3 pl-2">${prekesPavadinimas}</td>
                  <td class="border-b py-3 pl-2 text-center">${kaina}€</td>
                  <td class="border-b py-3 pl-2 text-center">${kiekis}</td>
                  <td class="border-b py-3 pl-2 text-center">${nuolaida}</td>
                                    <td class="border-b py-3 pl-2 text-center">21%</td>
                  <td class="border-b py-3 pl-2 text-center">${prekesKainaSuNuolaida.toFixed(2)}€</td>
                  <td class="border-b py-3 pl-2 pr-3 text-right">${prekesKainaSuPVM}€</td>
  
                            `
                prekiuContainer.appendChild(tr);


                visuPrekiuKaina += prekesKainaSuNuolaida;

            })
            visuPrekiuKainaDiv.innerText = visuPrekiuKaina.toFixed(2) + '€';

            const siuntimoMokestis = document.querySelector('#siuntimoMokestis');
            siuntimoMokestis.innerText = data.shippingPrice + '€';

            const galutineKaina = document.querySelector('#galutineKaina');
            galutineKaina.innerText = (visuPrekiuKaina + (visuPrekiuKaina * PVM) + data.shippingPrice).toFixed(2) + '€';

            bendrasPVM.innerText = (visuPrekiuKaina * PVM).toFixed(2) + '€';
        }

        visosPrekes(data.items);


    })

