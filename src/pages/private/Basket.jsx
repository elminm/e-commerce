import { useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Context } from "../../context/Context";

function Basket() {
  const { basket, setBasket } = useContext(Context);
  const total = basket.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {basket?.map(({ id, title, description, price, image }) => (
          <>
            <Card sx={{ padding: "1% 2%", width: "200px" }}>
              <CardMedia
                component="img"
                height="140"
                image={image}
                title={title}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="h6" component="p" noWrap>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {description}
                </Typography>
                <Typography variant="h5" color="text.primary" noWrap>
                  {price}$
                </Typography>
                <Button
                  variant="contained"
                  onClick={() =>
                    setBasket([...basket.filter((q) => q.id != id)])
                  }
                >
                  Remove from Basket
                </Button>
              </CardContent>
            </Card>
          </>
        ))}
      </div>
      <h1>
        Total:{" "}
        {total > 0 ? <h2>{total.toFixed(2)}$</h2> : <h1>Basket Is Empty</h1>}
      </h1>
    </>
  );
}

export default Basket;
