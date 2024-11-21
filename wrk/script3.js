const uzduotis1 = document.querySelector(".uzduotis1")
const uzduotis2 = document.querySelector(".uzduotis2")
const uzduotis3 = document.querySelector(".uzduotis3")
const uzduotis4 = document.querySelector(".uzduotis4")
const uzduotis5 = document.querySelector(".uzduotis5")
const uzduotis6 = document.querySelector(".uzduotis6")
const uzduotis7 = document.querySelector(".uzduotis7")
const uzduotis8 = document.querySelector(".uzduotis8")
const uzduotis9 = document.querySelector(".uzduotis9")
const uzduotis10 = document.querySelector(".uzduotis10")





function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}
//1
let h1 = '';
let h4 = '';

for (let i = 0; i < 14; i++) {
    h1 += `<h1>4</h1>`
    h4 += `<h4>1</h4>`
}

uzduotis1.innerHTML = h1 + h4;

uzduotis1.style.display = "flex"

//2




let number = '';

for (let i = 0; i < 44; i++) {
    const randNumber = rand(14, 44);
    if (randNumber % 4 === 0) {
        number += `<span style="color:red;margin-left:10px;">${parseInt(randNumber)}</span>`
    } else {
        number += `<span style="color:blue;margin-left:10px;">${parseInt(randNumber)}</span>`

    }
}

uzduotis2.innerHTML = number;



//3 //Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.


let apskritimai = '';

for (let i = 0; i < 14; i++) {
    apskritimai += ``

}


let star = '';

for (let i = 1; i <= 444; i++) {
    star += "<span>*</span>"

    if (i % 44 === 0) {
        star += '<br>'

    }
}


uzduotis6.innerHTML = star;




let size = 500;

let kvadratas = '';

for (let i = 0; i < 14; i++) {
    kvadratas += `<div style="
    width:${size}px;
    height:${size}px;
    position: absolute;
    background-color: ${randomColor()};
    top: ${(500 - size) / 2}px;
    left:${(500 - size) / 2}px;
    "></div>`
    size -= 30;
}

uzduotis7.style.position = "relative"

uzduotis7.innerHTML = kvadratas;


let kvadratasIsZenklu = ""
 
 
for (let i = 0; i < 41; i++) {
  let row = `<div style="display:grid; grid-template-columns: repeat(41, 1.3rem);">`
 
for (let j = 0; j < 41; j++) {
  row += `<span style= "color: green;">&#9632;</span>`
 
}
row+= `</div>`
kvadratasIsZenklu+= row
}
 
 
uzduotis8.style.position = "relative"
uzduotis8.style.marginTop = "500px" 
uzduotis8.innerHTML =  kvadratasIsZenklu



let kvadratasSuIstrizaine = "";


let sizes = 41;

for (let i = 0; i < sizes; i++) {
    let row = `<div style="display:flex">`
    for (let j = 0; j < sizes; j++) {
       let color = '';
        if(i === j || sizes-1 - i===j){
            color = "yellow";
        }
        else {
            color = "green";
        }
        
        row += `<span style= "color:${color}">&#9632;</span>`
        
    }
    row += `</div>`
    kvadratasSuIstrizaine += row;
}
uzduotis9.style.marginTop = "500px" 
uzduotis9.innerHTML = kvadratasSuIstrizaine;