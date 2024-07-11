import "./Navbar.css";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav>
            <RouterLink to="/" className="logo" component={RouterLink}>
                <h3>To-Do List</h3>
            </RouterLink>
            <div className="btn-nav">
            <Button
                component={RouterLink}
                to="/home"
                color="primary"
            >
                Home
            </Button>
            <Button
                component={RouterLink}
                to="/todolist"
                color="primary"
            >
                Todolist
            </Button>
            <Button
                component={RouterLink}
                to="/signup"
                variant="contained"
                color="error"
            >
                Signup
            </Button>
            <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                color="primary"
            >
                Login
            </Button>
            </div>
        </nav>
    )
}