import logo from "./logo.svg";
import "./App.css";
import CharactersList from "./Pages/CharactersList";


function App() {


  return (
    <>
      <main className="App">
        <h1 className="title">rickandmortyapi.com/graphql - Apollo</h1>
        <CharactersList />
      </main>
    </>
  );
}

export default App;
