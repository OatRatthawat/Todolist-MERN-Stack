import { createContext, useReducer, useContext, useEffect } from "react";
import todoReducer from "../reducer/todoReducer";

const todoContext = createContext();
const initialState = {
    
}

export const todoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    function addTask(title){
        dispatch({type: "ADD_TASK", payload: title});
    }
    
    function deleteTask(_id){
        dispatch({type: "DELETE_TASK", payload: _id});
    }

    function editTask(_id){
        dispatch({type: "EDIT_TASK", payload: _id});
    }

    useEffect(() => {
        dispatch({type: "GET_TASK"});
    }, )

    return(
        <todoContext.Provider value={{...state, addTask, deleteTask, editTask}}>
            {children}
        </todoContext.Provider>
    )
}

export const useTodo = () => {
    return useContext(todoContext);
}