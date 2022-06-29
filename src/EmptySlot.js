import { useEffect } from "react";
import molehill from "./molehill.png";

export default function EmptySlot(props) {
  useEffect(() => {
    // generate random number, toggle true to display for for random number generated,
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <img
        src={molehill}
        // on click run handle change
        onClick={props.handleClick}
      />
    </div>
  );
}
