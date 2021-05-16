import React from "react";
import "./Style.component.css";
import TextField from "@material-ui/core/TextField";
import Button from "./Button.component";

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.loadweather} className="" autoComplete="off">
        <div>{props.error ? error() : ""}</div>
        <TextField
          id="standard-basic"
          label="city"
          type="text"
          autoComplete="off"
          placeholder="City"
          name="city"
        />
        <TextField
          id="standard-basic"
          label="country"
          placeholder="Country"
          name="country"
          autoComplete="off"
        />
        <Button>click here</Button>
      </form>
    </div>
  );
};

const error = (props) => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;
