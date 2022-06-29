import { useState } from "react";
import EmptySlot from "./EmptySlot";
import Mole from "./Mole";
import "./App.css";

export default function MoleContainer(props) {
  // track whether or not mole is being displayed
  const [displayMole, setDisplayMole] = useState(false);

  // set score to + 1 and set displayMole to false
  function handleChange(e) {
    props.setScore((prevState) => prevState + 1);
    setDisplayMole(false);
  }

  return (
    <div className="moleContainer">
      {/* render component based on condition */}
      {displayMole ? (
        <Mole handleClick={handleChange} toggle={setDisplayMole} />
      ) : (
        <EmptySlot handleClick={handleChange} toggle={setDisplayMole} />
      )}
    </div>
  );
}
