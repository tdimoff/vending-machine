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
  Box,
} from "@mui/material";
import QuantityControl from "./QuantityControl";
import styles from "../styles/ProductItem.module.scss";

interface ProductItemProps {
  product: IProduct;
  onSelect: (product: IProduct, quantity: number) => void;
  isSelected: boolean;
  selectedQuantity: number;
}

const ProductItem = ({
  product,
  onSelect,
  isSelected,
  selectedQuantity,
}: ProductItemProps) => {
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
      <Paper elevation={3} className={styles.productItem}>
        <Card
          className={`${styles.productItem__card} ${
            isSelected ? styles['productItem__card--selected'] : ""
          }`}
        >
          <Box className={styles.productItem__mediaContainer}>
            <CardMedia
              component="img"
              className={styles.productItem__media}
              image={product.url}
              alt={product.name}
            />
          </Box>
          <CardContent className={styles.productItem__content}>
            <Typography gutterBottom variant="h5" component="div" className={styles.productItem__name}>
              {product.name}
            </Typography>
            <Typography variant="h6" color="text.primary" className={styles.productItem__price}>
              ${product.price.toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary" className={styles.productItem__stock}>
              In stock: {product.stockQuantity}
            </Typography>
          </CardContent>
          <CardActions className={styles.productItem__actions}>
            <Box className={`${styles.productItem__quantityControl} ${isSelected ? styles['productItem__quantityControl--visible'] : ""}`}>
              {isSelected && (
                <QuantityControl
                  selectedQuantity={selectedQuantity}
                  onQuantityChange={handleQuantityChange}
                  stockQuantity={product.stockQuantity}
                />
              )}
            </Box>
            <Box>
              <Button
                size="small"
                onClick={handleSelect}
                variant={isSelected ? "contained" : "outlined"}
                className={styles.productItem__selectButton}
                disabled={product.stockQuantity === 0}
              >
                {isSelected ? "Deselect" : "Select"}
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
};

export default ProductItem;
