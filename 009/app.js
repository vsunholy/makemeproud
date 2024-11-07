console.log('Veikia')



//1 . Sukurti funkcija, kuri priima 2 kintamosius ir grazina didesni.


const fun1 = (a, b) => {
    const rez = (a > b) ? a : b; // ternaty operator
    return rez;
}



const fun1If = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}

console.log(fun1(22, 18));
console.log(fun1If(22, 18));



// 2.




const a = 'labaslabasssa';
const b = 'vakarasqwdqwdaaa';



const fun2 = (a, b) => {
    if (a.length < b.length) {
        return a;
    }
    return b;
}

console.log(fun2(a, b));



//3

const fun3 = (a, b) => {
    if (a > b) {
        return 1;
    } if (b > a) {
        return -1;
    } else {
        return 0;
    }
}
console.log(fun3(65, 42));



function funSum1(a, b) {
    return a + b;
}

const funSum2 = function (a, b) {
    return a + b;
}

const funSum3 = (a, b) => {
    return a + b;
}

const funSum4 = (a, b) => a + b;


console.log(funSum4(2, 3));




function funBig1(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

const funBig2 = function (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}

const funBig3 = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}

const funBig4 = (a, b) => a > b ? a : b;





//
function funStrLen1(a) {
    return a.length;
}

const funStrLen2 = function (a) {
    return a.length;
}

const funStrLen3 = (a) => {
    return a.length;
}

const funStrLen4 = a => a.length;

//

function FunReturnLabas1() {
    return 'labas';
}

const FunReturnLabas2 = function () {
    return 'labas';
}

const FunReturnLabas3 = () => {
    return 'labas';
}

const FunReturnLabas4 = () => 'labas';

console.log(FunReturnLabas4())

//

const fun3sum1 = (a, b, c = 10) => {
    return a + b + c;
}
console.log(fun3sum1(1, 2))
console.log(fun3sum1(1, 2, 3))

//

const funSumMany1 = (a, b, ...rest) => {
    console.log(rest);
    let sumAll = 0;
    for (let i = 0; i < rest.length; i++) {
        sumAll += rest[i];
    }
    return a + b + sumAll;
}


console.log(funSumMany1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


//
const animals = ['cat', 'dog', 'elephant', 'lion', 'tiger'];

const animals2 = [...animals];

const animals3 = animals;

animals[0] = 'bear';

console.log( animals2, animals3);