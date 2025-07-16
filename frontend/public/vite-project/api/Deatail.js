import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
export const Detail = (props) => {
const [details, setDetails] = useState();
useEffect(() => {
    fetch(props.url)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        setDetails(json);
    });
});
return (
    <div>
        <h1>{props.name}</h1>
        {details && (
            <pre>{JSON.stringify(details, null, 2)}</pre>
        )}
       {details && <img src={details.sprites.front_default} alt="johanskarpsvärd" />}
    </div>
);
}

