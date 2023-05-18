import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./Content.css";
import Grid from "@mui/material/Grid";
import ContentItem from "./ContentItem";

function Content() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => axios("https://fakestoreapi.com/products"),
  });

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {data && (
        <div className="content">
          <Grid container spacing={2}>
            {data.data.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <ContentItem data={data.data} {...item} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
}

export default Content;
