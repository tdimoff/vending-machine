import { Grid, Button, Box } from "@mui/material";
import { denominations } from "../config";

interface CurrencyControlsProps {
  onInsertMoney: (amount: number) => void;
}

const CurrencyControls = ({ onInsertMoney }: CurrencyControlsProps) => (
  <Box mt={2}>
    <Grid container spacing={1}>
      {denominations.map((denom) => (
        <Grid item xs={4} key={denom.value}>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => onInsertMoney(denom.value)}
          >
            {denom.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default CurrencyControls;
