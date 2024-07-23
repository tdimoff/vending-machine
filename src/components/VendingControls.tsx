import { Box, Typography, Button, Grid } from "@mui/material";
import { IProduct } from "../interfaces/Product.type";
import CurrencyControls from "./CurrencyControls";

interface VendingControlProps {
  insertedMoney: number;
  selectedProducts: IProduct[];
  onInsertMoney: (amount: number) => void;
  onPurchase: () => void;
  onReturnChange: () => void;
}

const VendingControls = ({
  insertedMoney,
  selectedProducts,
  onInsertMoney,
  onPurchase,
  onReturnChange,
}: VendingControlProps) => {
  const totalPrice = selectedProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Balance: ${insertedMoney.toFixed(2)}
      </Typography>
      {selectedProducts.length > 0 && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Selected Items:
          </Typography>
          {selectedProducts.map((product) => (
            <Typography key={product.id} variant="body2">
              {product.name} - ${product.price.toFixed(2)}
            </Typography>
          ))}
          <Typography variant="subtitle1" gutterBottom>
            Total Price: ${totalPrice.toFixed(2)}
          </Typography>
        </Box>
      )}
      {insertedMoney === 0.00 && (
        <Typography variant="h4">Please insert coins/bills:</Typography>
      )}
      <CurrencyControls onInsertMoney={onInsertMoney} />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={onPurchase}
            disabled={
              selectedProducts.length === 0 || insertedMoney < totalPrice
            }
          >
            Buy
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={onReturnChange}
            disabled={insertedMoney === 0}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VendingControls;
