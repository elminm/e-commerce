/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function ContentItem({
  id,
  image,
  title,
  category,
  description,
  price,
}) {
  const { basket, setBasket } = useContext(Context);
  const addToBasket = (id, title, description, price, image) => {
    const checkBasket = basket?.find((q) => q.id === id);
    if (!checkBasket) {
      setBasket((prev) => [...prev, { id, title, description, price, image }]);
    } else {
      setBasket([...basket.filter((q) => q.id !== id)]);
    }
  };
  const checkBasket = basket.find((q) => q.id === id);
  return (
    <Card sx={{ maxWidth: 345, minHeight: 250, padding: "5%" }}>
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
        <Typography variant="h6" color="text.secondary" noWrap>
          {category.toUpperCase()}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {description}
        </Typography>
        <Typography variant="h5" color="text.primary" noWrap>
          {price}$
        </Typography>
        <Button
          onClick={() => addToBasket(id, title, description, price, image)}
          variant={checkBasket ? "contained" : "outlined"}
        >
          {checkBasket ? "Remove from Basket" : "Add to Basket"}
        </Button>
      </CardContent>
    </Card>
  );
}
