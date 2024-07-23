import { Typography } from "@mui/material";
import "./App.css";
import VendingMachine from "./components/VendingMachine";

function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h1">
        Please select an item:
      </Typography>
      <VendingMachine />
    </div>
  );
}

export default App;
