import React, { useEffect, useState } from "react";
import ChildBox from "./ChildBox";

function App() {
  const [message, setMessage] = useState("apple");

  useEffect(() => {
    console.log("App loaded for the first time");
  }, []);

  useEffect(() => {
    console.log("Message changed to:", message);
  }, [message]);

  return (
    <div style={{ border: "3px solid red", padding: "20px" }}>
      <h2>Parent Div</h2>

      <ChildBox title="Child 1" message={message}>
        <h2>This is child prop</h2>

      </ChildBox>

      <ChildBox title="Child 2" message={message}>
        <button>Click Me</button>
      </ChildBox>

      <ChildBox title="Child 3" message={message}>
        <strong>Important note inside Child 3</strong>
      </ChildBox>

      <button onClick={() => setMessage("banana")}>
        Change Message
      </button>
    </div>
  );
}

export default App;
