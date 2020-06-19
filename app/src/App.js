import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage((state) => !state);
  };

  return (
    <div>
      <Button onClick={toggleMessage}>Click Me!</Button>
      {showMessage && <p>This is a hidden message</p>}
    </div>
  );
}

export default App;
