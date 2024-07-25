import { Container } from "@mui/material";
import styles from "./App.module.scss";
import VendingMachine from "./components/VendingMachine";

function App() {
  return (
    <div className={styles.app}>
      <Container maxWidth="lg" className={styles.container}>
        <VendingMachine />
      </Container>
    </div>
  );
}

export default App;