import { useState } from 'react';

export default function Mygtukai() {
    const [color, setColor] = useState('blue');
    const [counter, setCounter] = useState(5);

    const upNumber = () => {
        setCounter(ct => ct + 1);
    };

    const greenbutton = () => {
        setColor('green');
        setCounter(5)
    };
    const redbutton = () => {
        setColor('red');
    };

    return (
        <>
            <div className="mygtukai">
                <button className="red" onClick={redbutton}>
                    RED
                </button>
                <button className="green" onClick={greenbutton}>
                    GREEN
                </button>
            </div>

            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: color,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center' // Use the state variable here
                }}
            ><button className='yellow' onClick={upNumber}>{counter}</button></div>
        </>
    );
}
