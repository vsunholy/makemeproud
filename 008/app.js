console.log('function')





function suma(a, b){
    console.log('suma:',a + b);
 const c = a + b;
 return c;
}


const skirtumas = function (a ,b){
    console.log('skirtumas:', a - b);
}

const sandauga = (a, b) => {
    console.log('sandauga:', a * b);
}

sandauga(10, 5);






console.log('function2');
 skirtumas(10, 5);

suma(2,3);
suma(99,34);
suma(0.3, 65);

const manoSuma = suma;
manoSuma(10, 20);
console.log('manoSuma:', manoSuma)







