<GlobalStyle />
import React from "react"
import Card from "./components/card"
import { createGlobalStyle } from "styled-components";
import "./App.css"
import card from " ./data/card/json";
import styled from 'styled-components';
import styled, { css } from 'styled-components'

const CardWrapper = styled.article``;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: '#BF4F74';
  margin: 0 1em;
  padding: 0.25em 1em;


  ${props =>
    props.$primary &&
    css`
      background: '#BF4F74';
      color: white;
    `};
`
// Here we're saying that when the $primary property is set we want to add some more css to our component, in this case change the background and
console.log(card)

// Removed duplicate Button declaration

const App = () => {
  return (
    <>
      <h1>Vite project</h1>
      <Card
        title="My profile card"
        text="My first text"
      />
      <Card
        title="My second card"
        text="My second text"
      />
<Card
  key={card.name}
  title={card.name}
/>
    </>
  )
}

export default App