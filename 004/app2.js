console.log('app.js')

const s1 = document.querySelector('#s1');

const html1 = `    
<h2 style="color: skyblue;">
 HTML1
</h2>
`;

s1.innerHTML = html1;
// cicle start
const s2 = document.querySelector('#s2');


let bulve = ''; //buvo const html2

const morka ='<div>morka</div>';
//cicle start
for (let i = 1; i <= 10; i++) {
 console.log(i);

//  bulve = bulve + '<div>' + i + '</div>';
if (i == 5 || i == 7) {
    bulve = bulve + `<div style="background-color:green";>${i}</div>`;
} else {
    bulve = bulve + `<div>${i}</div>`;
}
}
bulve = bulve + morka;
s2.innerHTML = bulve;
// cicle end
