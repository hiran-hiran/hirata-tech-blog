import React from "react";
// import TextField from "@material-ui/core/TextField";

const InputForm = (props) => {
  return (
    // <TextField
    // 	fullWidth={true}
    // 	label={props.label}
    // 	margin={"dense"}
    // 	multiline={props.multiline}
    // 	rows={props.rows}
    // 	value={props.value}
    // 	type={props.type}
    // 	onChange={props.onChange}
    // 	required
    // />
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        // rows={props.rows}
        value={props.value}
        onChange={props.onChange}
        // requiredname=""
        id={props.label}
      />
    </div>
  );
};

export default InputForm;
