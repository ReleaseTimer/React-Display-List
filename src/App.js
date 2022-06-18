import React from "react";
import Data from "./Data";
import List from "./components/List";
export default function App() {
  const nameData = Data.map((x) => <List key={x} item={x} />);
  return <div>{nameData}</div>;
}
