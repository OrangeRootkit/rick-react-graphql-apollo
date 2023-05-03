import { Route, Router, Routes } from "react-router";
import "./App.css";
import CharactersList from "./Pages/CharactersList";
import Character from "./Pages/Character";

function App() {
  return (
    <>
      <main className="App">
        <h1 className="title">rickandmortyapi.com/graphql - Apollo</h1>
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/:id" element={<Character />} /> 
        </Routes>
      </main>
    </>
  );
}

export default App;
