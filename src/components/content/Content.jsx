import "./Content.css";
import Grid from "@mui/material/Grid";
import ContentItem from "./ContentItem";
import { useContext } from "react";
import { Context } from "../../context/Context";

function Content() {
  const { products } = useContext(Context);

  return (
    <>
      {products && (
        <div className="content">
          <Grid container spacing={3}>
            {products.data.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <ContentItem data={products.data} {...item} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </>
  );
}

export default Content;
