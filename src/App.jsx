import React, { useEffect, useState } from "react";
import ChildBox from "./ChildBox";

function App() {
  
  const [message, setMessage] = useState("Hello Child");

 
  useEffect(() => {
    console.log("App loaded for the first time");
  }, []);

  
  useEffect(() => {
    console.log("Message changed to:", message);
  }, [message]);

  return (
    <div style={{ border: "3px solid red", padding: "20px" }}>
      <h2>Parent Div</h2>

      <ChildBox title="Child 1" message={message} />
      <ChildBox title="Child 2" message={message} />
      <ChildBox title="Child 3" message={message} />

      <button onClick={() => setMessage("Message Changed!")}>
        Change Message
      </button>
    </div>
  );
}

export default App;
