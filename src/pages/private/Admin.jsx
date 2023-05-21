import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID" },
  {
    field: "title",
    headerName: "Title",
    editable: true,
    width: 200,
  },
  {
    field: "category",
    headerName: "Category",
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    sortable: false,
    width: 500,
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    width: 200,
    renderCell: (params) => {
      const handleDelete = async () => {
        try {
          await axios.delete(`https://fakestoreapi.com/products/${params.id}`);
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      };

      const handleEdit = async () => {
        console.log("Edit product:", params.id);
      };

      return (
        <>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      );
    },
  },
];

export default function Admin() {
  const { products } = useContext(Context);

  return (
    <Box sx={{ width: "100%" }}>
      {products && products?.data?.length > 0 && (
        <DataGrid
          rows={products.data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      )}
    </Box>
  );
}
