import './App.css';
import './button.scss';
import './components/044/Mygtukai';
import Text from './components/044/Text';
import Mygtukai from './components/044/Mygtukai';
import Select from './components/044/Select';
import Checkbox from './components/044/Checkbox';


function App() {

   

    return (
        <div className="App">
            <header className="App-header">
               

               <Mygtukai />
                <Text />
                <Select />
                <Checkbox />



            </header>
        </div>
    );
}

export default App;
// Įdėti į App.jsx Naudojant useState, padaryti kad veiktų mygtukai.
