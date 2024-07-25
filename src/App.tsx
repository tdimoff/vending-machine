import { Container } from "@mui/material";
import "./App.css";
import VendingMachine from "./components/VendingMachine";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{mb: 6}}>
        <VendingMachine />
      </Container>
    </div>
  );
}

export default App;
