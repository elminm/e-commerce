import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import { loginValidationSchema } from "./loginValidatonSchema";
import Copyright from "./Copyrigth";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
const defaultTheme = createTheme();

export default function LoginPage() {
  const { registeredUsers, setUser, user } = useContext(Context);
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      const isRegistered = registeredUsers?.find(
        (q) => q.email == values.email && q.password == values.password
      );
      if (isRegistered) {
        setUser([isRegistered]);
        navigate("/admin");
      } else {
        alert("you must register first");
      }
    },
  });

  return (
    <>
      {user.length > 0 ? (
        <Navigate to="/admin" />
      ) : (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {user.length > 0 ? "Sign Out" : "Sign in"}
              </Typography>
              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Button fullWidth variant="contained" onClick={register}>
                  Register
                </Button>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
