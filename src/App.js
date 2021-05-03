import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

const all_pokemon = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <Title title="Shot Industries" />

          {all_pokemon.map((pokemon, index) => (
            <Pokemon
              key={index}
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          ))}
        </main>

        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://relaxed-darwin-3a8386.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Making Humans Great Again
        </a>
      </header>
    </div>
  );
}

export default App;
