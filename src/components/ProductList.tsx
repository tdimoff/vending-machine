import ProductItem from "./ProductItem";
import { IProduct } from "../interfaces/Product.type";
import { Grid } from "@mui/material";

interface ProductListProps {
  products: IProduct[];
  selectedProducts: IProduct[];
  onSelect: (product: IProduct) => void;
}

const ProductList = ({ products, selectedProducts, onSelect }: ProductListProps) => {
    console.log(products)
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <ProductItem
          product={product} 
          key={product.id} 
          onSelect={onSelect}
          isSelected={selectedProducts.some(p => p.id === product.id)}
        />
      ))}
    </Grid>
  );
};

export default ProductList;