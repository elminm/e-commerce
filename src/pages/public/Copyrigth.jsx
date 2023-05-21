import { Link, Typography } from "@mui/material";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#" sx={{ mr: "8px" }}>
        E-commerce
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
