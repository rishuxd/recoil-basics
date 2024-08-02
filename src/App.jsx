import "./App.css";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/selector/even";
import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <p> My name is Rishi. </p>
      <Age />
      <Buttons />
      <ToRender />
    </RecoilRoot>
  );
}

function Age() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <p> My age is {count}.</p>
    </div>
  );
}

function Buttons() {
  console.log("buttons-rendered");
  const setCount = useSetRecoilState(countAtom); // Only renders once
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
}

function ToRender() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "Even" : "Odd"}</div>;
}

export default App;
