const count = document.querySelector('.count');
const subtract = document.querySelector(".subtract");
const reset = document.querySelector('.reset');
const add = document.querySelector('.add');




add.addEventListener('click', _ => {
    count.textContent++;
})
subtract.addEventListener('click', _ => {
    count.textContent--;
})

reset.addEventListener('click', _ => {
    count.textContent = 0;


})


function setColor() {
    if (count < 0) {
        count.style.color = 'blue';
    } else if (count > 0) {
        count.style.color = 'red';
    } else (count === 0)
    count.style.color = 'black';
}

setColor();