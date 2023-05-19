import { useContext } from "react";
import { Context } from "../context/Context";

function Basket() {
  const { basket, setBasket } = useContext(Context);
  const check = (id) => {
    setBasket([...basket.filter((q) => q.id !== id)]);
  };
  const total = basket.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      {basket?.map(({ id, title, description, price, image }) => (
        <>
          <Card
            sx={{ maxWidth: 345, minHeight: 250, padding: "5%" }}
            style={{ border: checkBasket ? "2px solid red" : "" }}
          >
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
                onClick={() => addToBasket(id, title, description, price)}
              >
                {checkBasket ? "Remove from Basket" : "Add to Basket"}
              </Button>
            </CardContent>
          </Card>
          <h1 key={title}>{title}</h1>
          <p>{description}</p>
          <h2>{price}$</h2>
          <button onClick={() => check(id)}>remove from basket</button>
        </>
      ))}
      {total > 0 ? <h2>{total}$</h2> : <h1>Basket Is Empty</h1>}
    </div>
  );
}

export default Basket;
