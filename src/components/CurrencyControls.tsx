import { Grid, Button } from "@mui/material";

interface CurrencyControlsProps {
  onInsertMoney: (amount: number) => void;
}

const CurrencyControls = ({ onInsertMoney }: CurrencyControlsProps) => {
  const denominations = [
    { value: 0.05, label: "$0.05" },
    { value: 0.1, label: "$0.10" },
    { value: 0.25, label: "$0.25" },
    { value: 1, label: "$1" },
    { value: 5, label: "$5" },
    { value: 10, label: "$10" },
  ];

  return (
    <Grid container spacing={1} sx={{ mt: 2 }}>
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
  );
};

export default CurrencyControls;
