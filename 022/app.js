class Troleibusas {
    static visiKeleiviai = 0;
    static troleibusai = [];

    static keleiviuSkaiciusVisuoseTroleibusuose() {
        console.log('Viso yra: ' + this.visiKeleiviai);
        this.troleibusai.forEach(troleibusas => troleibusas.vaziuoja());
    }

    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;
    }

    constructor() {
        this.keleiviuSkaicius = 0;
        this.constructor.troleibusai.push(this);
    }

    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        this.constructor.bendrasKeleiviuSkaicius(keleiviuSkaicius);
    }

    islipa(keleiviuSkaicius) {
        const liko = Math.max(this.keleiviuSkaicius - keleiviuSkaicius, 0);
        // Correct the logic to subtract the correct number of passengers
        const pasitraukia = this.keleiviuSkaicius - liko;
        this.constructor.bendrasKeleiviuSkaicius(-pasitraukia); // Decrease the total count
        this.keleiviuSkaicius = liko;
    }

    vaziuoja() {
        console.log('Troleibusu keleiviu skaicius: ' + this.keleiviuSkaicius);
    }
}

// Example usage
const troleibusas1 = new Troleibusas();
troleibusas1.ilipa(5);
troleibusas1.islipa(2);

const troleibusas2 = new Troleibusas();
troleibusas2.ilipa(10);
troleibusas2.islipa(30);

Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose();



console.clear();
class Elektra {
    constructor() {
        this.elektra = '220v'
    }
}

class TV extends Elektra {

    constructor(savininkas) {
        super();
        this.savininkas = savininkas;
        this.istrizaine = 55;

    }

    rodytiPrograma() {
        console.log('Tevo kazkoks grybas');

    }
}

class TVSamsung extends TV {
    constructor(savininkas) {
        super(savininkas);
        this.modelis = 'Samsung'
        this.istrizaine = 65
        this.elektra = 'AC240v'

    }
}

class TVSony extends TV {
    constructor(savininkas) {
        super(savininkas);
        this.modelis = 'Sony'
    }
    rodytiPrograma() {
        console.log('kazkoks grybas sony');

    }
}

const tv1 = new TVSamsung('Jonas');
const tv2 = new TVSony('Bebras');



tv1.rodytiPrograma();
tv2.rodytiPrograma();


console.log(tv1);
console.log(tv2);



console.clear()


class Cart {
    static instance;
    static createCart() {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
    constructor() {
        this.items = [];
    }
    add(product) {
        this.items.push(product)
    }
    #doSomething() {
        console.log('Do something');

    }
}


const cart = Cart.createCart();
const cart2 = Cart.createCart();

cart.add('Duona');
cart.add('Bebras');
cart2.add('Sviestas');
cart2.add('Kefyras');

console.log(cart, cart2);




















