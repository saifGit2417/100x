import ToDoList, { SnackbarInterface } from "./Components/ToDoList";
import { useEffect, useState } from "react";
import { Box, Button, TextField, Paper, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import {
  boxStyle,
  buttonStyle,
  infoCardContainerStyle,
  infoCardStyle,
  logOutBtnStyles,
  modalContentStyle,
  modalStyle,
} from "./CardBtnStyles";

function App() {
  const [snackBar, setSnackBar] = useState<SnackbarInterface>({
    open: false,
    message: "",
    severity: "",
  });
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [signUp, setSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [authToken, setAuthToken] = useState<any>();

  const isAuthTokenFilled = localStorage.getItem("auth_token");

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/authenticate/signUp", formData)
      .then((res: any) => {
        if (res.status == 200 || res.status === 201) {
          setSnackBar({
            open: true,
            message: res.data.message,
            severity: res.data.severity,
          });
          setFormData({
            username: "",
            email: "",
            password: "",
          });
          closeModal();
        }
      })
      .catch((error) =>
        setSnackBar({
          open: true,
          message: error.response.data.message,
          severity: error.response.data.severity,
        })
      );
  };

  const handleSignIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const loginCredentials = {
      email: formData.email,
      password: formData.password,
    };
    axios
      .post("http://localhost:8000/authenticate/login", loginCredentials)
      .then((res: any) => {
        if (res.status == 200 || res.status === 201) {
          setSnackBar({
            open: true,
            message: res.data.message,
            severity: res.data.severity,
          });
          setFormData({
            username: "",
            email: "",
            password: "",
          });
          setAuthToken(res.data.auth_token);
          localStorage.setItem("auth_token", res.data.auth_token);
          closeModal();
        }
      })
      .catch((error) =>
        setSnackBar({
          open: true,
          message: error.response.data.message,
          severity: error.response.data.severity,
        })
      );
  };

  const openModal = (type: "signUp" | "login") => {
    if (type === "signUp") {
      setSignUp(true);
    } else if (type === "login") {
      setLogin(true);
    }
    document.getElementById("modal")!.style.display = "block";
  };

  const closeModal = () => {
    setSignUp(false);
    setLogin(false);
    document.getElementById("modal")!.style.display = "none";
  };

  const handleLogout = () => {
    setAuthToken("");
    localStorage.removeItem("auth_token");
    closeModal();
  };

  const handleCloseSnackBar = () => {
    setSnackBar({ open: false, message: "", severity: "" });
  };
  useEffect(() => {
    document.getElementById("modal")!.style.display = "none";
  }, [authToken]);

  return (
    <div>
      <div>
        {isAuthTokenFilled != undefined && isAuthTokenFilled && (
          <Box sx={logOutBtnStyles.container}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleLogout}
              sx={logOutBtnStyles.logoutButton}
            >
              Logout
            </Button>
          </Box>
        )}

        {!isAuthTokenFilled && (
          <Box style={boxStyle}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={buttonStyle}
              onClick={() => openModal("signUp")}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={buttonStyle}
              onClick={() => openModal("login")}
            >
              Log In
            </Button>
          </Box>
        )}
      </div>

      <div id="modal" style={modalStyle}>
        <div style={modalContentStyle}>
          {signUp && (
            <div>
              <Box
                mt={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
                // height="100vh"
              >
                <Paper elevation={3}>
                  <form onSubmit={handleSignUp} style={{ padding: "50px" }}>
                    <TextField
                      label="Username"
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                    />
                    <TextField
                      label="Email"
                      variant="outlined"
                      margin="normal"
                      type="email"
                      required
                      fullWidth
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      margin="normal"
                      type="password"
                      required
                      fullWidth
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      style={{ marginTop: "10px" }}
                    >
                      Sign Up
                    </Button>
                  </form>
                </Paper>
              </Box>
            </div>
          )}

          {login && (
            <div>
              <Box mt={2}>
                <Paper elevation={3}>
                  <form onSubmit={handleSignIn} style={{ padding: "50px" }}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      margin="normal"
                      type="email"
                      required
                      fullWidth
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <TextField
                      label="Password"
                      variant="outlined"
                      margin="normal"
                      type="password"
                      required
                      fullWidth
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      style={{ marginTop: "10px" }}
                    >
                      Login
                    </Button>
                  </form>
                </Paper>
              </Box>
            </div>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "10px" }}
            onClick={closeModal}
          >
            Cancel from here
          </Button>
        </div>
      </div>

      {isAuthTokenFilled ? (
        <ToDoList />
      ) : (
        <div style={infoCardContainerStyle}>
          <div style={infoCardStyle}>
            Please Login to create your list of todos
          </div>
        </div>
      )}

      <Snackbar
        open={snackBar.open}
        autoHideDuration={2000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity={snackBar?.severity}
          className="snackBar"
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
