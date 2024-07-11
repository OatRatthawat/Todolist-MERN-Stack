import "./Home.css";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <div className="headstyle">
        <h1>
          A simple to do list{" "}
          <span className="underline-magical">But I have nothing to do</span>
        </h1>
      </div>
      <div className="btn-home">
          <Button
            component={RouterLink}
            to="/signup"
            variant="contained"
            color="error"
          >
            start for free
          </Button>
        </div>
    </div>
  );
}
