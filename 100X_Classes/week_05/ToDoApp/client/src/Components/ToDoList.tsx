import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { ToDoStyle } from "./ToDolistStyle";
import { getLocalStorageValue } from "../constant";

export interface ToDoData {
  _id: string;
  todo: string;
  completed: boolean;
}

export interface SnackbarInterface {
  open: boolean;
  message: string;
  severity: string | any;
}
const ToDoList = () => {
  const [inputChange, setInputChange] = useState("");
  const [taskList, setTaskList] = useState<ToDoData[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const [snackBar, setSnackBar] = useState<SnackbarInterface>({
    open: false,
    message: "",
    severity: "",
  });
  const [edit, setEdit] = useState<boolean>(false);
  const [taskId, setTaskId] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldValue = e.target.value;
    setInputChange(fieldValue);
  };

  const jwtToken = getLocalStorageValue("auth_token");
  console.log("jwtToken from to do component: ", jwtToken);

  const getAllTasks = () => {
    axios
      .get("http://localhost:8000/todo/getAll", {
        headers: {
          authorization: `bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        setTaskList(res.data.tasks);
      })
      .catch((error) => console.log(error));
  };

  const handlePostTask = () => {
    axios
      .post(
        "http://localhost:8000/todo/add",
        { todo: inputChange },
        {
          headers: {
            authorization: `bearer ${jwtToken}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setSnackBar({
            open: true,
            message: res?.data?.message,
            severity: res?.data?.severity,
          });
          setInputChange("");
          setReload(!reload);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handlePostEditTask = () => {
    axios
      .put(
        `http://localhost:8000/todo/edit/${taskId}`,
        { todo: inputChange },
        {
          headers: {
            authorization:`bearer ${jwtToken}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setSnackBar({
            open: true,
            message: res?.data?.message,
            severity: res?.data?.severity,
          });
          setInputChange("");
          setReload(!reload);
          setEdit(!edit);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleTaskDelete = (id: string) => {
    axios
      .delete(`http://localhost:8000/todo/delete/${id}`, {
        headers: {
          authorization: `bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setReload(!reload);
          setSnackBar({
            open: true,
            message: res?.data?.message,
            severity: res?.data?.severity,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMarkComplete = (id: string) => {
    axios
      .put(
        `http://localhost:8000/todo//update/${id}`,
        {
          completed: true,
        },
        {
          headers: {
            authorization: `bearer ${jwtToken}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setReload(!reload);
          setSnackBar({
            open: true,
            message: res?.data?.message,
            severity: res?.data?.severity,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditTask = (data: ToDoData) => {
    setEdit(true);
    setInputChange(data.todo);
    setTaskId(data._id);
  };

  const handleEditCancel = () => {
    setEdit(false);
    setInputChange("");
  };

  const handleClose = () => {
    setSnackBar({
      open: false,
      message: "",
      severity: "",
    });
  };
  useEffect(() => {
    getAllTasks();
  }, [reload, edit]);
  return (
    <ToDoStyle>
      <div className="mainContainer">
        <h1>To Do App</h1>
        <div style={{}} className="inputContainer">
          <TextField
            id="outlined-basic"
            label={edit ? "edit  task" : "add task"}
            variant="outlined"
            value={inputChange}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />
          <Button
            variant="contained"
            onClick={edit ? handlePostEditTask : handlePostTask}
            color="success"
            size="small"
          >
            {edit ? "Edit Task" : "Add Task"}
          </Button>
          {edit && (
            <Button
              variant="contained"
              onClick={handleEditCancel}
              color="error"
              size="small"
            >
              cancel
            </Button>
          )}
        </div>
        {taskList && taskList.length > 0 ? (
          <div>
            <h1>list of all tasks from here</h1>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Tasks</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {taskList &&
                    taskList.length > 0 &&
                    taskList.map((data: ToDoData, index: number) => {
                      return (
                        <TableRow
                          key={data._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            className={
                              data.completed ? "completedToDo" : "remainingToDo"
                            }
                          >
                            {index + 1} - {data.todo}
                          </TableCell>

                          <TableCell>
                            <Box className="actionContainer">
                              <Tooltip
                                title="Delete Task"
                                onClick={() => handleTaskDelete(data._id)}
                                className="normalActionItem"
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </Tooltip>
                              <Tooltip
                                title="Mark Complete"
                                onClick={() => handleMarkComplete(data._id)}
                                className={
                                  data.completed
                                    ? "completedToDo"
                                    : "remainingToDo"
                                }
                              >
                                <FontAwesomeIcon icon={faCheck} />
                              </Tooltip>
                              <Tooltip
                                title="Edit Task"
                                onClick={() => handleEditTask(data)}
                                className={
                                  data.completed
                                    ? "completedToDo"
                                    : "remainingToDo"
                                }
                              >
                                <FontAwesomeIcon icon={faPenToSquare} />
                              </Tooltip>
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <div>
            <h1>No Task are there </h1>{" "}
          </div>
        )}

        <Snackbar
          open={snackBar.open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={snackBar?.severity}
            className="snackBar"
          >
            {snackBar.message}
          </Alert>
        </Snackbar>
      </div>
    </ToDoStyle>
  );
};

export default ToDoList;
