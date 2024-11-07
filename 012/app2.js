console.log('1243')


document.querySelector("#btn1").addEventListener('click', e => {
    console.log('Button 1 clicked', e.target)
});
document.querySelector("#btn1").addEventListener('dblclick', e => {
    console.log('Button 1 dbclicked')
});


document.querySelector('#btn2').addEventListener('click', e => {
    console.log('Button 2 clicked');
});

window.addEventListener('scroll', e => {
    console.log('Scrolling');
});


document.querySelector('#btn2').addEventListener('scroll', e => {
    console.log('Scrolling button 2');
});


document.querySelector("#btn3").addEventListener('click', e => {
    e.preventDefault();
    console.log('Link clicked');
});

document.querySelector('.tevas').addEventListener('click', e =>{
    document.querySelector('.tevas').style.backgroundColor = 'darkred';
    
})
document.querySelector('.vaikas').addEventListener('click', e => { //bubble stabdom vaike e.stopPropagation()
    e.stopPropagation();
    document.querySelector('.vaikas').style.backgroundColor = 'darkblue';
});