import ProductItem from "./ProductItem";
import { IProduct } from "../interfaces/Product.interface";
import { Grid } from "@mui/material";

interface SelectedProduct {
  product: IProduct;
  quantity: number;
}

interface ProductListProps {
  products: IProduct[];
  selectedProducts: SelectedProduct[];
  onSelect: (product: IProduct, quantity: number) => void;
}

const ProductList = ({
  products,
  selectedProducts,
  onSelect,
}: ProductListProps) => (
  <Grid container spacing={2}>
    {products.map((product) => {
      const selectedProduct = selectedProducts.find(sel => sel.product.id === product.id);

      return (
        <ProductItem
          product={product}
          key={product.id}
          onSelect={onSelect}
          isSelected={!!selectedProduct}
          selectedQuantity={selectedProduct?.quantity || 0}
        />
      );
    })}
  </Grid>
);

export default ProductList;
