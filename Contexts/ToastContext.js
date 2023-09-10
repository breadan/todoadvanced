import { createContext, useState, useContext } from "react";
import { ToDo } from "../Components/ToDo/ToDo";
import SnackBar from "../Components/SnackBar/SnackBar";

// Convert Context To Provider

//Toast Context (1)
 const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  // Started To Create Toast Context
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });
  //To Edit Message (3)
  const [message, setMessage] = useState();

  const { open } = state;

  //To Edit Message (1)
  const handleClose = (message) => {
    setState({ ...state, open: true });
    //To Edit Message (5)
    setMessage(message);
    setTimeout(() => {
      setState({ ...state, open: false });
    }, 2000);
  };
  return (
    <ToastContext.Provider value={{ handleClose }}>
      {/*  //To Edit Message (2)*/}
      <SnackBar open={open} handleClose={handleClose} message={message} />{" "}
      {children}
      {/* <ToDo/> */}
    </ToastContext.Provider>
  );
};

// it is custom hook
export const useToast = () => {
  return useContext(ToastContext);
};
