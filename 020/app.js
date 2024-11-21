
const obj = {
    name: 'Mario',
    age: 32,
    job: 'plumber'
}


//Koda raso Aivaras

class PlayCharacter {

    constructor(name, age, job, lives) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.speed = 10;
        this.strength = this.age * 2;
        if (lives !== undefined) {
            this.lives = lives;
        }
    }
}


// Koda raso Gintare

const obj1 = new PlayCharacter('Mario', 32, 'plumber');
const obj2 = new PlayCharacter('Luigi', 30, 'plumber', 10)

console.log(obj1, obj2);






//---new TV


// Aivaro second

class TV {
    #channel = 1; //privati savybe,hidden
    constructor(price, owner) {
        this.brand = 'Samsung';
        this.model = 'UE55NU7172UXXH';
        this.year = 2018;
        this.price = price;
        this.owner = owner;
        this.turnOn = false;
    }
    ijungti() {
        this.turnOn = true;
        console.log(this.owner + ' Turning on the TV and watching channel ' + this.#channel)
    }
    isjungti() {
        this.turnOn = false;
        console.log(this.owner + ' turning off the TV');
    }
    // setteris
    perjungtiKanala(channel) {
        if (!this.turnOn) {
            return;
        }
        if (channel < 1 || channel > 100) {
            console.log(('Invalid Channel'));
            return;
        }
        this.#channel = channel;
        console.log(this.owner + ' changing the channel to ' + this.#channel);
    }
    // getteris
    ziuretiInformacija() {
        return this.#channel;
    }
}


// Ginta 2

const tv1 = new TV(230, 'Petras');
const tv2 = new TV(987, 'Jonas');

console.log(tv1, tv2);

tv2.ijungti();
tv2.perjungtiKanala(10);

let info = tv2.ziuretiInformacija();

info++;
tv2.perjungtiKanala(info);

tv2.isjungti();
tv2.ijungti();



class Kibiras1 {
    // Konstruktorius su savybe akmenuKiekis, kuri inicijuojama kaip 0
    constructor() {
      this.akmenuKiekis = 0;
    }
  
    // Metodas, kuris prideda 1 akmenį į kibirą
    prideti1Akmeni() {
      this.akmenuKiekis += 1;
    }
  
    // Metodas, kuris prideda nurodytą kiekį akmenų į kibirą
    pridetiDaugAkmenu(kiekis) {
      this.akmenuKiekis += kiekis;
    }
  
    // Metodas, kuris išveda akmenų kiekį į konsolę
    kiekPririnktaAkmenu() {
      console.log(`Kibire yra ${this.akmenuKiekis} akmenų.`);
    }
  }
  
  // Sukuriame Kibiras1 objektą
  let manoKibiras = new Kibiras1();
  
  // Demonstracija: pridedame akmenis ir išvedame rezultatus
  manoKibiras.prideti1Akmeni(); // Pridedame 1 akmenį
  manoKibiras.pridetiDaugAkmenu(10); // Pridedame 5 akmenis
  manoKibiras.kiekPririnktaAkmenu(); // Išvedame akmenų kiekį
  

  class Pinigine {
    // Konstruktorius, inicijuojantis savybes popieriniaiPinigai ir metaliniaiPinigai
    constructor() {
      this.popieriniaiPinigai = 0;
      this.metaliniaiPinigai = 0;
    }
  
    // Metodas ideti(kiekis), kuris prideda pinigus į piniginę
    ideti(kiekis) {
      if (kiekis <= 2) {
        // Jei pinigai yra mažesni arba lygūs 2, pridedame prie metaliniaiPinigai
        this.metaliniaiPinigai += kiekis;
      } else {
        // Priešingu atveju, pridedame prie popieriniaiPinigai
        this.popieriniaiPinigai += kiekis;
      }
    }
  
    // Metodas, kuris suskaičiuoja ir išveda į konsolę pinigų sumą
    skaiciuoti() {
      const viso = this.popieriniaiPinigai + this.metaliniaiPinigai;
      console.log(`Popieriniai pinigai: ${this.popieriniaiPinigai}`);
      console.log(`Metalinių pinigų suma: ${this.metaliniaiPinigai}`);
      console.log(`Viso pinigų: ${viso}`);
    }
  }
  
  // Sukuriame Pinigine objektą
  let manoPinigine = new Pinigine();
  
  // Demonstracija: pridedame pinigus į piniginę
  manoPinigine.ideti(1);   // Pridedame 1 monetą
  manoPinigine.ideti(5);   // Pridedame 5 kupiūras
  manoPinigine.ideti(2);   // Pridedame 2 monetas
  manoPinigine.ideti(10);  // Pridedame 10 kupiūrų
  
  // Išvedame pinigų sumą
  manoPinigine.skaiciuoti();
