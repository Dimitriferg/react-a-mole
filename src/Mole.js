import { useEffect } from "react";
import moleImg from "./mole.png";

export default function Mole(props) {
  useEffect(() => {
    let randSeconds = Math.ceil(Math.random() * 10000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return <img src={moleImg} onClick={props.handleClick} />;
}
