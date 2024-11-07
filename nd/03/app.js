console.log('Darkness3')

// Masyvas su skaičiais.

// 1.Surasti didžiausią skaičių;
// 2.Surasti mažiausią skaičių;
// 3.Surasti didžiausią neigiamą skaičių;
// 4.Surasti didžiausią skaičių, kuris yra mažesnis už 50;
// 5.Suskaičiuoti teigiamų skaičių sumą;
// 6.Suskaičiuoti neigiamų skaičių kvadratų (skaičių pakeltų kvadratu) sumą;
// 7.Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 25-75
// 8.Suskaičiuoti kiek skaičių yra 0-iai;
// 9.Suskaičiuoti kiek skaičių be liekanos dalinasi iš 3;
// 10.Suskaičiuoti neigiamų skaičių vidurkį;

const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];


function largest(arr) { 
    

    let max = arr[0]; 

 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    } 
    
    return max; 
} 

let arr = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];
console.log("Didziausias skaicius yra " + largest(arr));
console.log('====================================')


//2

const arr1 = [10, 324, 45, 90, 9808];
console.log('Maziausias skaicius yra',Math.min(...arr1));