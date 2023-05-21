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
  const { basket, user, setUser } = useContext(Context);
  const navigate = useNavigate();
  const isLoggedIn = () => {
    if (user.length > 0) {
      setUser([]);
    }
    navigate("/login");
  };
  return (
    <Box style={{ marginBottom: 20, position: "sticky", top: 0, zIndex: 2 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {user.length > 0 ? (
              <span
                style={{
                  color: user.length > 0 ? "023d4cc9" : "",
                  fontWeight: "bold",
                  display: "inline-block",
                  fontSize: "23px",
                }}
              >{`Welcome ${user[0].email} ; )`}</span>
            ) : (
              "E - Commerce"
            )}
          </Typography>
          {user.length > 0 && (
            <Button
              variant="h6"
              component="div"
              onClick={() => navigate("/admin")}
            >
              Admin
            </Button>
          )}
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
              <AddShoppingCartIcon color="white" sx={{ ml: "9px" }} />
            </Badge>
          </Button>
          <Button
            color={user.length > 0 ? "warning" : "inherit"}
            onClick={isLoggedIn}
          >
            {user.length > 0 ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
