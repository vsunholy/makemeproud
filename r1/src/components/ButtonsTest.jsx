
import { useState } from 'react';
import NiceSq from './NiceSq';
export default function ButtonsTest() {

    const [counter, setCounter] = useState(0);
    const [size, setSize] = useState(100);

    const grbutton = () => {
        console.log('GREEN Button clicked');
    }

    const blbutton = a => {
        console.log('BLUE Button clicked', a);
    }
    const redbutton = () => {
        console.log('RED Button clicked');
        setCounter(ct => ct + 1); // geriau naudoti taip
        setCounter(ct => ct + 1); // geriau naudoti taip
        setCounter(ct => ct + 1); // geriau naudoti taip
    }

    const changeSize = diff => {
        setSize(sz => sz + diff);
    }
    const resetSize = () => {
        setSize(100);
    }


    return (
        <div>
            <button className="green" onClick={grbutton}>Button</button>

            <button className="blue" onClick={_ => blbutton('informacija A')}>Button</button>

            <button className="red" onClick={redbutton}>+1</button>
            <button className="yellow" onClick={_=>changeSize(10)}>+10</button>
            <button className="yellow" onClick={_=>changeSize(-12)}>-12</button>
            <button className="red" onClick={_=>resetSize()}>Reset</button>
            <h1>{counter}</h1>
            <NiceSq size={size} />
        </div>
    );
}
