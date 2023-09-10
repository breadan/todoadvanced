import "./App.css";
import { ToDo } from "./Components/ToDo/ToDo";
import { ToDoMain } from "./Components/ToDoMain/ToDoMain";
import Grid from "@mui/material/Grid";
import { toDoContext } from "./Contexts/ToDoContext";
import { v4 as uuidv4 } from "uuid"; //uniq id
import { useState } from "react";
import SnackBar from "./Components/SnackBar/SnackBar";
//Toast Context (2)
import { ToastProvider } from "./Contexts/ToastContext";

const initialToDos = [
  {
    id: uuidv4(),
    title: "Read A Book",
    description: "Value",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "write A Book",
    description: "Value2",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "A7a A Book",
    description: "Value3",
    isCompleted: false,
  },
];

function App() {
  const [lisdToDo, setLisdToDo] = useState(initialToDos);
  

  // const showHideToast = () => {        //Another way to show & hide alert
  //   state.open(true)
  //   setTimeout(() => {
  //     state.open(false)
  //   }, 2000)
  // }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      {/* //Toast Context (3) */}

      <ToastProvider>
       
        <Grid item xs={8}>
          <toDoContext.Provider
            value={{ lisdToDo: lisdToDo, setLisdToDo: setLisdToDo }}
          >
            <ToDoMain />
          </toDoContext.Provider>
        </Grid>
      </ToastProvider>
    </Grid>
  );
}

export default App;
