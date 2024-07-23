import { useEffect, useState } from "react";
import VendingControls from "./VendingControls";
import ProductList from "./ProductList";
import { IProduct } from "../interfaces/Product.type";
import { Grid, Paper, Typography, Box } from "@mui/material";

const VendingMachine = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [insertedMoney, setInsertedMoney] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState<IProduct[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/tdimoff/6e94de57dce160cb9c86abc294f466f8/raw/products.json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setMessage("Error fetching products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  const handleProductSelect = (product: IProduct) => {
    setSelectedProducts((prev) => {
      const existingProduct = prev.find((p) => p.id === product.id);

      return existingProduct
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product];
    });
  };

  const handleInsertMoney = (amount: number) => {
    setInsertedMoney((prev) => prev + amount);
  };

  const handlePurchase = () => {
    const totalPrice = selectedProducts.reduce(
      (sum, product) => sum + product.price,
      0
    );
    if (selectedProducts.length > 0 && insertedMoney >= totalPrice) {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          selectedProducts.some((sp) => sp.id === p.id)
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
      );
      const change = insertedMoney - totalPrice;

      setInsertedMoney(0);
      if (change > 0) {
        setMessage(
          `Thank you for buying ${selectedProducts
            .map((p) => p.name)
            .join(", ")}! Returning $${change.toFixed(2)}`
        );
      } else {
        setMessage(
          `You bought ${selectedProducts.map((p) => p.name).join(", ")}!`
        );
      }
      setSelectedProducts([]);
    } else {
      setMessage("Not enough money or no products selected!");
    }
  };

  const handleReturnChange = () => {
    if (insertedMoney > 0) {
      setMessage(`Returning $${insertedMoney.toFixed(2)}`);
      setInsertedMoney(0);
    } else {
      setMessage("No money to return.");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Paper elevation={3}>
          <ProductList
            products={products}
            onSelect={handleProductSelect}
            selectedProducts={selectedProducts}
          />
        </Paper>
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
          <Box sx={{ mt: 2, p: 2 }}>
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
