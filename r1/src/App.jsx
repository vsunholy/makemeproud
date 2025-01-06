import './App.css';
import Auto from './components/Auto';
import RandomColor from './components/RandomColor';
import Volvo from './components/Volvo';
// import Parkas from './components/Parkas';
// import Namas from './components/Namas';
import rand from './Functions/rand';
import randomColor from './Functions/randomColor';

import kazka from './Functions/demoEx';

import C, {A,B} from './Functions/demoEx';

import * as demo from './Functions/demoEx';

function App() {



    return (
        <div className="App">
            <header className="App-header">

                {kazka()} {A()} {B()} {C()}
                {demo.A()} {demo.B()} {demo.default()}


                {/* <Namas numeris='1' spalva='red' kiekis ='5' rand={rand} />
                <Namas numeris='2' spalva='green' kiekis = '8' rand={rand} />
                <Namas numeris='3' spalva='blue' kiekis = '1' rand={rand} /> */}

                {/* <Parkas koks={rand(1, 4)} /> */}

                <Auto text={<RandomColor ct="bla" />} >
                    <h1>Opel</h1>
                </Auto>
                <Auto text={<RandomColor ct="ku ku" />}>
                    <h3>BMW</h3>
                </Auto>
                <Auto text={<RandomColor />}><Volvo /></Auto>

                <h2 style={
                    {
                        position: 'relative',
                        top: rand(-200, 200) + 'px',
                        color: randomColor(),
                        letterSpacing: rand(10, 30) + 'px',
                    }
                }>REACT</h2>


            </header>
        </div>
    );
}

export default App;
