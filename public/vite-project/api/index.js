import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

    const App = () => {
        const [johanSkarpsvard, setJohanSkarpsvard] = useState([]);
        const [selectedJohanSkarpsvard, setSelectedJohanSkarpsvard] = useState([]);
        useEffect(() => {
            fetch("https://johanSkarpsvard.api")
            .then(res => res.json())
            .then(json => setJohanSkarpsvard(json.results));
        }, []);

        return (
            <div>
                <ul>
                    {johanSkarpsvard.map((johanskarpsvärd) => (
                        <li key={johanskarpsvärd.name}>
                            {johanskarpsvärd.name}
                            <button onClick={() => setSelectedJohanSkarpsvard(johanskarpsvärd)}>
                                {johanskarpsvärd.name}
                            </button>
                        </li>
                    ))}
                </ul>
                {selectedJohanSkarpsvard && <Detail name={selectedJohanSkarpsvard.name} url={selectedJohanSkarpsvard.url} />}
            </div>
        );
    };
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
