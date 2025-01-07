import './App.css';
import { useState } from 'react';
import './button.scss';
import B043 from './components/B043';
import ButtonsTest from './components/ButtonsTest';
import C043 from './components/C043';
function App() {

    const [size, setSize] = useState(100);

    return (
        <div className="App">
            <header className="App-header">
                {/* <ButtonsTest /> */}

                <B043 setSize={setSize} />
                <C043 size={size} />





            </header>
        </div>
    );
}

export default App;