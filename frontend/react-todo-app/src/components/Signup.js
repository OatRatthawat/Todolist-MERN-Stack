import "./Signup.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
export default function Signup(){
    return(
        <div className="signup-card">
            <p className="signup-header">Sign up</p>
            <form>
                <div className="signup-form">
                    <TextField label="Email" variant="filled" type="email" />
                    <TextField label="Username" variant="filled" type="text" />
                    <TextField label="Password" variant="filled" type="password" />
                    <Button type="submit" 
                            variant="contained"
                            color="primary">
                    Sign Up
                    </Button>
                </div>
            </form>
        </div>
    )
}