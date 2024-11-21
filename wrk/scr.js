function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}


const totalCircles = 444;


let circles = "";


for (let i = 0; i < totalCircles; i++) {
    const diameter = rand(44,144);
    const color = randomColor();
    const top = rand(0,window.innerHeight - diameter);
    const left = rand(0,window.innerWidth - diameter);

circles += `<div style="

position:absolute;
opacity:50%;
border-radius:50%;
width:${diameter}px;
height:${diameter}px;
background-color:${color};
top: ${top}px;
left: ${left}px;

"></div>`


}

document.body.innerHTML = circles;