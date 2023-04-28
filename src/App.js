import { useState } from "react";
import "./styles.css";

export default function App() {
  console.log("App");
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return <div className="App">input</div>;
}
