console.log('veikia')



const machines = [
    'Traktorius',
    'Kombainas',
    'Volavimo mašina',
    'Buldozeris',
    'Krautuvas',
    'Keltuvas',
    'Kranas',
    'Kompresorius',
];


// 1. // 1. Padaryti HTML, sąrašą <ul>, su class="machines-list". Naudoti forEach. createElement ir appendChild.


const ul = document.querySelector('.machines-list');


machines.forEach(machine => {
    const li = document.createElement('li');
    const text = document.createTextNode(machine);
    li.appendChild(text);
    ul.appendChild(li);

});

// 2. Padaryti HTML, sąrašą <ul>, su class="machines-list-1", kuriame nebūtų "Krano" (nufiltruoti filter metodu). Naudoti forEach. createElement ir appendChild.


const ul1 = document.querySelector('.machines-list-1');

machines.filter(machine => machine !== 'Kranas').forEach(machine =>{
    const li = document.createElement('li');
    const text = document.createTextNode(machine);
    li.appendChild(text);
    ul1.appendChild(li);
})

//3. Padaryti HTML, sąrašą <ul>, su class="machines-list-2", kuriame nebūtų "Volo" ir "Keltuvo" (nufiltruoti filter metodu).
// Prie kiekvieno aparato gale pridėti " - mašina". Naudoti map metodą.
// Naudoti forEach. createElement ir appendChild.


const ul2 = document.querySelector('.machines-list-2');

machines.filter(machine => machine !== 'Volavimo mašina' && machine !== 'Keltuvas').map(machines => machines + ' - masina').forEach(machine =>{
    const li = document.createElement('li');
    const text = document.createTextNode(machine);
    li.appendChild(text);
    ul2.appendChild(li);
});

// sortas

const digits = [44, 87, 43, 0, 87, 58, 95, 21];


digits.sort((a,b) => a - b); // b - a sort i kita pusia
console.log(digits)

machines.sort((a,b)=> a.length - b.length) // b.length - a.length atvirksciai
console.log(machines)


machines.sort((a, b) => {       // rusiavimas pagal 2 raide
    if (a[1] < b[1]) {
        return -1;
    }
    if (a[1] > b[1]) {           
        return 1;
    }
    return 0;
});

machines.sort((a, b) => a[1].localeCompare(b[1], 'lt'));

console.log(machines)
 