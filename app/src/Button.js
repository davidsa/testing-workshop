import React from "react";

export default function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
