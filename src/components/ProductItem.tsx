import { IProduct } from "../interfaces/Product.interface";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Button,
  CardActions,
  CardMedia,
  Paper,
} from "@mui/material";
import QuantityControl from "./QuantityControl";

interface ProductItemProps {
  product: IProduct;
  onSelect: (product: IProduct, quantity: number) => void;
  isSelected: boolean;
  selectedQuantity: number;
}

const ProductItem = ({ product, onSelect, isSelected, selectedQuantity }: ProductItemProps) => {
  const handleSelect = () => {
    onSelect(product, isSelected ? 0 : 1);
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(
      0,
      Math.min(selectedQuantity + delta, product.stockQuantity)
    );
    onSelect(product, newQuantity);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3}>
        <Card
          sx={{
            border: "0.125rem solid",
            borderColor: isSelected ? "primary.main" : "transparent",
            padding: 3,
            height: "26.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            image={product.url}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="h6" color="text.primary" mt={2}>
              ${product.price.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In stock: {product.stockQuantity}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", flexDirection: "column", marginTop: "auto" }}>
            <Button
              size="small"
              onClick={handleSelect}
              variant={isSelected ? "contained" : "outlined"}
            >
              {isSelected ? "Deselect" : "Select"}
            </Button>
            {isSelected && (
              <QuantityControl
                selectedQuantity={selectedQuantity}
                onQuantityChange={handleQuantityChange}
                stockQuantity={product.stockQuantity}
              />
            )}
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
};

export default ProductItem;
