import { IProduct } from "../interfaces/Product.type";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";

interface ProductItemProps {
  product: IProduct;
  onSelect: (product: IProduct) => void;
  isSelected: boolean;
}

const ProductItem = ({ product, onSelect, isSelected }: ProductItemProps) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ border: isSelected ? "2px solid blue" : "none" }}>
        <CardMedia
          component="img"
          width="100%"
          height="100%"
          image={product.url}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body2">${product.price.toFixed(2)}</Typography>
          <Typography variant="body2">{`Quantity: ${product.quantity}`}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            size="small"
            onClick={() => onSelect(product)}
            variant={isSelected ? "contained" : "outlined"}
          >
            {isSelected ? "Deselect" : "Select"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
