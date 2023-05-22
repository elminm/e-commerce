import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import ModalDelete from "../../components/ModalDelete";

function ProductTable() {
  const { products } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState(null);
  const nav = useNavigate();

  const handleOpen = (id) => {
    setOpen(true);
    setProductId(id);
  };

  const handleClose = () => {
    setOpen(false);
    setProductId(null);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
          marginTop: "1rem",
          marginRight: 10,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // Handle new product addition
            console.log("Add New Product clicked");
          }}
        >
          Add New Product
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="Product Table">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Title</strong>
              </TableCell>
              <TableCell>
                <strong>Description</strong>
              </TableCell>
              <TableCell>
                <strong>Price</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell sx={{ display: "flex" }}>
                  <IconButton onClick={() => handleOpen(item.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      nav(`/edit/${item.id}`);
                      console.log("Edit clicked for product ID:", item.id);
                    }}
                    color="primary"
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <ModalDelete
              open={open}
              productId={productId}
              products={products?.data}
              handleClose={handleClose}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ProductTable;
