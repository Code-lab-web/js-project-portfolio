import Card from "./components/card"

import "./App.css"
import card from " ./data/card/json";
console.log(card)

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
      {card.card.map((card) => {
        return (
          <Card
            key={card.name}
            title={card.name}
            text={card.tags.join(", ")}
          />
        )
      })}
    </>
  )
}

export default App