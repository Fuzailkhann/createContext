import counterContext from "./context/valueContext";
import { useContext } from "react";
import GrandChild from "./grandChild";
export default function Child() {
  const value = useContext(counterContext);
  return (
    <>
      i am a child {value}
      <div>
        <GrandChild />
      </div>
    </>
  );
}
