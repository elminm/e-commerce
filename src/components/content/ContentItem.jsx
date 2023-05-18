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
}) {
  const { basket, setBasket } = useContext(Context);
  const addToBasket = (id, title, description) => {
    const checkBasket = basket?.find((q) => q.id === id);
    if (!checkBasket) {
      setBasket((prev) => [...prev, { id, title, description }]);
    } else {
      setBasket([...basket.filter((q) => q.id !== id)]);
    }
  };
  const checkBasket = basket.find((q) => q.id === id);
  return (
    <Card
      sx={{ maxWidth: 345, minHeight: 250 }}
      style={{ border: checkBasket ? "2px solid red" : "" }}
    >
      <CardMedia
        sx={{ width: "100%", minHeight: 200, objectFit: "cover" }}
        image={image}
        title={title}
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
        <Button onClick={() => addToBasket(id, title, description)}>
          {checkBasket ? "Remove from Basket" : "Add to Basket"}
        </Button>
      </CardContent>
    </Card>
  );
}
