import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./Content.css";
import ContentItem from "./ContentItem";
function Content() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => axios("https://fakestoreapi.com/products"),
  });

  return (
    <div>
      {data && data.data.map((item) => <ContentItem key={item.id} {...item} />)}
    </div>
  );
}

export default Content;
