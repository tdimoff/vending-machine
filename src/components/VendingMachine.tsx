import { useEffect, useState } from "react";
import VendingControls from "./VendingControls";
import ProductList from "./ProductList";
import { IProduct, ISelectedProduct } from "../interfaces/Product.interface";
import { Grid, Paper, Typography, Box } from "@mui/material";
import { PRODUCT_API_URL } from "../config";

const VendingMachine = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [insertedMoney, setInsertedMoney] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState<ISelectedProduct[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await fetch(PRODUCT_API_URL).then((response) =>
          response.json()
        );

        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductSelect = (product: IProduct, quantity: number) => {
    setSelectedProducts((prev) => {
      const existingProductIndex = prev.findIndex((p) => p.product.id === product.id);

      if (existingProductIndex !== -1) {
        if (quantity === 0) {
          return prev.filter((p) => p.product.id !== product.id);
        } else {
          const updatedProducts = [...prev];

          updatedProducts[existingProductIndex] = { product, quantity };

          return updatedProducts;
        }
      } else {
        return quantity > 0 ? [...prev, { product, quantity }] : prev;
      }
    });
  };

  const handleInsertMoney = (amount: number) => {
    setInsertedMoney((prev) => prev + amount);
  };

  const formatPurchaseString = ({ product, quantity }: ISelectedProduct) => {
    return quantity > 1 ? `${product.name} (${quantity}x)` : product.name;
  };

  const handlePurchase = () => {
    const totalPrice = selectedProducts.reduce(
      (sum, { product, quantity }) => sum + product.price * quantity, 0);

    if (selectedProducts.length > 0 && insertedMoney >= totalPrice) {
      setProducts((prevProducts) =>
        prevProducts.map((p) => {
          const selectedProduct = selectedProducts.find(
            (sp) => sp.product.id === p.id
          );

          return selectedProduct
            ? {...p, stockQuantity: p.stockQuantity - selectedProduct.quantity }
            : p;
        })
      );
      const change = insertedMoney - totalPrice;

      setInsertedMoney(0);

      if (change > 0) {
        setMessage(
          `Thank you for purchasing ${selectedProducts
            .map(formatPurchaseString)
            .join(", ")}!
          Returning: $${change.toFixed(2)}`
        );
      } else {
        setMessage(
          `You've purchased ${selectedProducts
            .map(formatPurchaseString)
            .join(", ")}!`
        );
      }
      setSelectedProducts([]);
    } else {
      setMessage("Insufficient funds or no products selected.");
    }
  };

  const handleReturnChange = () => {
    if (insertedMoney > 0) {
      setMessage(`Returning $${insertedMoney.toFixed(2)}`);
      setInsertedMoney(0);
    }

    setSelectedProducts([]);
  };

  return (
    <Grid container spacing={2} mt={6}>
      <Grid item xs={12} md={8}>
        <ProductList
          products={products}
          onSelect={handleProductSelect}
          selectedProducts={selectedProducts}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={3}>
          <VendingControls
            insertedMoney={insertedMoney}
            onInsertMoney={handleInsertMoney}
            onPurchase={handlePurchase}
            onReturnChange={handleReturnChange}
            selectedProducts={selectedProducts}
          />
          <Box mt={2} p={2}>
            <Typography variant="body1" color="text.secondary">
              {message}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VendingMachine;
