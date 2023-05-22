import { Box, Button, Modal, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

function ModalDelete({ open, handleClose, products, productId }) {
  const handleDelete = () => {
    axios
      .delete(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        handleClose();
      });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          textAlign: "center",
          borderRadius: 4,
        }}
      >
        <Typography variant="h6" id="modal-title" gutterBottom>
          Do you want to delete it
        </Typography>
        <Button
          sx={{ marginRight: 3 }}
          variant="contained"
          onClick={() => handleDelete()}
        >
          Yes
        </Button>
        <Button variant="outlined" color="error" onClick={handleClose}>
          No
        </Button>
      </Box>
    </Modal>
  );
}

export default ModalDelete;
