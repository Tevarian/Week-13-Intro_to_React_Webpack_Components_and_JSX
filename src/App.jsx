import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Logos from "./Logos";
import Login from "./Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Logos />
      <Login />
    </>
  );
}

export default App;
