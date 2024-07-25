import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface QuantityControlProps {
  selectedQuantity: number;
  onQuantityChange: (delta: number) => void;
  stockQuantity: number;
}

const QuantityControl = ({
  selectedQuantity,
  onQuantityChange,
  stockQuantity,
}: QuantityControlProps) => {
  return (
    <Box display="flex" alignItems="center" mt={1}>
      <IconButton onClick={() => onQuantityChange(-1)} disabled={selectedQuantity <= 1}>
        <RemoveIcon />
      </IconButton>
      <Typography variant="body1" mx={2}>
        {selectedQuantity}
      </Typography>
      <IconButton
        onClick={() => onQuantityChange(1)}
        disabled={selectedQuantity >= stockQuantity}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityControl;