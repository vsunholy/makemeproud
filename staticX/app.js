class Troleibusas {
    static visiKeleiviai = 0; // Statinė savybė bendram keleivių skaičiui

    constructor() {
        this.keleiviuSkaicius = 0; // Kiekvieno troleibuso keleivių skaičius
    }

    // Statinis metodas pridėti arba atimti keleivius
    static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
        this.visiKeleiviai += keleiviuSkaicius;
    }

    // Metodas, kai keleivis įlipa
    ilipa(keleiviuSkaicius) {
        this.keleiviuSkaicius += keleiviuSkaicius;
        Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius); // Pridėti keleivius prie bendro skaičiaus
    }

    // Metodas, kai keleivis išlipa
    islipa(keleiviuSkaicius) {
        this.keleiviuSkaicius -= keleiviuSkaicius;
        Troleibusas.bendrasKeleiviuSkaicius(-keleiviuSkaicius); // Atimti keleivius iš bendro skaičiaus
    }

    // Statinis metodas gauti bendrą keleivių skaičių
    static keleiviuViso() {
        return this.visiKeleiviai;
    }
}

// Pavyzdžio naudojimas
const troleibusas1 = new Troleibusas();
const troleibusas2 = new Troleibusas();

troleibusas1.ilipa(5);  // 5 keleiviai įlipo į pirmą troleibusą
troleibusas2.ilipa(3);  // 3 keleiviai įlipo į antrą troleibusą

console.log(Troleibusas.keleiviuViso()); // Išves: 8

troleibusas1.islipa(2); // 2 keleiviai išlipo iš pirmo troleibuso

console.log(Troleibusas.keleiviuViso()); // Išves: 6


class PirkiniuKrepselis {
    constructor() {
        this.turinys = new Map(); // Krepšelio turinys, naudojant Map
    }

    // Metodas pridėti sūrį
    idetiSureli(kiekis) {
        this.pridetiProdukta('Sūris', kiekis);
    }

    // Metodas pridėti pieną
    idetiPieno(kiekis) {
        this.pridetiProdukta('Pienas', kiekis);
    }

    // Metodas pridėti duoną
    idetiDuonos(kiekis) {
        this.pridetiProdukta('Duona', kiekis);
    }

    // Pagalbinis metodas pridėti produktą į krepšelį
    pridetiProdukta(produktas, kiekis) {
        if (this.turinys.has(produktas)) {
            this.turinys.set(produktas, this.turinys.get(produktas) + kiekis);
        } else {
            this.turinys.set(produktas, kiekis);
        }
    }

    // Metodas išvesti krepšelio turinį į konsolę
    krepselioTurinys() {
        console.log("Krepšelio turinys:");
        this.turinys.forEach((kiekis, produktas) => {
            console.log(`${produktas}: ${kiekis}`);
        });
    }
}

// Pavyzdžio naudojimas
const manoKrepselis = new PirkiniuKrepselis();

manoKrepselis.idetiSureli(2);  // Pridedame 2 sūrius
manoKrepselis.idetiPieno(1);   // Pridedame 1 pieną
manoKrepselis.idetiDuonos(3);   // Pridedame 3 duonas
manoKrepselis.idetiSureli(1);   // Pridedame dar 1 sūrį

manoKrepselis.krepselioTurinys(); // Išves: Sūris: 3, Pienas: 1, Duona: 3