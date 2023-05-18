import { useContext } from "react";
import { Context } from "../context/Context";

function Basket() {
  const { basket, setBasket } = useContext(Context);
  const check = (id) => {
    setBasket([...basket.filter((q) => q.id !== id)]);
  };
  return (
    <div>
      {basket?.map(({ id, title, description }) => (
        <>
          <h1 key={title}>{title}</h1>
          <p>{description}</p>
          <button onClick={() => check(id)}>remove from basket</button>
        </>
      ))}
    </div>
  );
}

export default Basket;
