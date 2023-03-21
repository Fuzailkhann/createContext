import { useContext } from "react";
import counterContext from "./context/valueContext";
import carrContext from "./context/carContext";

export default function GrandChild() {
  const value = useContext(counterContext);
  const car = useContext(carrContext);
  return (
    <div>
      i am grandchild and i use {value}
      <div> i am grand child i have {car.name}</div>
    </div>
  );
}
