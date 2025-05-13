import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App(){
    const [count, setCount] = useState(0);
    const [decrement, setDecrement] = useState(100);
useEffect(() => {
    console.log('mount');
});
return (
    <div className="App">
        <button onClick={() => setCount(c =>c + 1)}>{count}</button>
        <button onClick={() => setDecrement(d => d - 1)}>{decrement}</button>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            
            </a>
        </header>
    </div>
    );
}

export default App;
