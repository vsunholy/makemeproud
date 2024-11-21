//Cyberelis

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }
    //* Setter 1
    prideti1Akmeni() {
        this.akmenuKiekis += 1;
    }
    //* Setter 2
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }
    //*Getter
    kiekPririnktaAkmenu() {
        console.log(`Pririnkta akmenų: ${this.akmenuKiekis}`);
    }
}


const kibiras = new Kibiras1();

// Pridedame akmenis
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu(6);


kibiras.kiekPririnktaAkmenu();


//Pinigine

class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }
    //*Setter
    ideti(kiekis) {
        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        } else {
            this.popieriniaiPinigai += kiekis;
        }
    }
    //*Getter
    skaiciuoti() {
        const suma = this.popieriniaiPinigai + this.metaliniaiPinigai;
        console.log(`Popieriniai pinigai: ${this.popieriniaiPinigai}`);
        console.log(`Metaliniai pinigai: ${this.metaliniaiPinigai}`);
        console.log(`Pinigu suma: ${suma}`);


    }
}


const pinigine = new Pinigine();

// Pridedame pinigus
pinigine.ideti(1);
pinigine.ideti(5);
pinigine.ideti(2);


pinigine.skaiciuoti();

//3
class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }

    // Metodas keleiviams įlipti
    ilipa(keleiviuSkaicius) {
        if (keleiviuSkaicius > 0) {
            this.keleiviuSkaicius += keleiviuSkaicius;
        } else {
            console.log("Keleivių skaičius negali būti neigiamas.");
        }
    }

    // Metodas keleiviams išlipti
    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius > 0 && this.keleiviuSkaicius >= keleiviuSkaicius) {
            this.keleiviuSkaicius -= keleiviuSkaicius;
        } else {
            console.log("Keleivių skaičius negali būti neigiamas arba didesnis nei esamas keleivių skaičius.");
        }
    }

    // Metodas, kuris išveda keleivių skaičių
    vaziuoja() {
        console.log(`Troleibusu važiuoja ${this.keleiviuSkaicius} keleivių.`);
    }
}

// Pavyzdys kaip naudoti klasę
let troleibusas = new Troleibusas();
troleibusas.ilipa(5);
troleibusas.vaziuoja(); // Troleibusu važiuoja 5 keleivių.
troleibusas.islipa(2);
troleibusas.vaziuoja(); // Troleibusu važiuoja 3 keleivių.

//4
