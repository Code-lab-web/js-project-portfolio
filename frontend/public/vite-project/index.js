import React from "react";
import ReactDOM from "react-dom";

import "./style.accessibility.css";

const App = () => {
    const [name, setName] = React.useState('');
    return (
        <form onSubmit={(event) => event.preventDefault()}>
            <h1>The state is: {name}</h1>
            <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
            />
        </form>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);