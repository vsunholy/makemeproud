function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}


const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

for (let i = 0; i < 444; i++) {

    const skritulys = document.createElement('div');
    skritulys.className = 'circle';

    skritulys.style.backgroundColor = randomColor();
    const dydis = rand(44, 144);
    skritulys.style.width = `${dydis}px`;
    skritulys.style.height = `${dydis}px`;

    const positionX = rand(0, screenWidth - dydis);
    const positionY = rand(0, screenHeight - dydis);
    skritulys.style.left = `${positionX}px`;
    skritulys.style.top = `${positionY}px`;

    document.body.appendChild(skritulys);
}