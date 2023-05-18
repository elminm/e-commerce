import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export default function Header() {
  const { basket } = useContext(Context);
  const navigate = useNavigate();
  return (
    <Box style={{ marginBottom: 20, position: "sticky", top: 0 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            E-Commerce
          </Typography>
          <Button
            variant="h6"
            component="div"
            onClick={() => navigate("/products")}
          >
            Products
          </Button>
          <Button
            color="inherit"
            variant="h6"
            component="div"
            style={{ border: basket?.length > 0 ? "1px solid red" : "" }}
            onClick={() => navigate("/basket")}
          >
            Basket
            <Badge badgeContent={basket.length} color="primary">
              <AddShoppingCartIcon color="action" />
            </Badge>
          </Button>

          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
