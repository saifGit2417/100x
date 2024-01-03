import { styled } from "@mui/material";

export const ToDoStyle = styled("div")({
  "*": {
    textTransform: "Capitalize",
  },
  ".mainContainer": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
  },
  ".inputContainer": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    height: "150px",
  },
  ".completedToDo": {
    textDecoration: "line-through",
    opacity: "0.2",
    PointerEvent: "none",
    cursor: "default",
  },
  ".remainingToDo": {
    textDecoration: "none",
    opacity: "1",
    PointerEvent: "all",
    cursor: "pointer",
  },
  ".actionContainer": {
    display: "flex",
    gap: "30px",
  },
  ".normalActionItem": {
    cursor: "pointer",
  },
  ".snackBar": {
    width: "100%",
    textTransform: "capitalize",
  },
});
