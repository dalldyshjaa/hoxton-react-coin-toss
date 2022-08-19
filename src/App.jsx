import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Game } from "./game";
import { Score } from "./Score";
import { Display } from "./Display";

function App() {
  const [tail, setTail] = useState(0);
  const [head, setHead] = useState(0);
  const [current, setCurrent] = useState();

  return (
    <div className="container">
      <Display current={current} />
      <Game
        setHead={setHead}
        setTail={setTail}
        tail={tail}
        head={head}
        setCurrent={setCurrent}
      />
      <Score tail={tail} head={head} />
    </div>
  );
}

export default App;
