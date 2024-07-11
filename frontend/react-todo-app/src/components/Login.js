import "./Login.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
export default function Login(){
    return(
        <div className="login-card">
            <p className="login-header">Login</p>
            <form>
                <div className="login-form">
                    <TextField label="Email" variant="filled" type="text" />
                    <TextField label="Password" variant="filled" type="text" />
                    <Button type="submit" 
                            variant="contained"
                            color="primary">
                    Login
                    </Button>
                </div>
            </form>
        </div>
    )
}