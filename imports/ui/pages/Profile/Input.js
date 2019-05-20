import React from "react";
import { Field } from "react-final-form";
import FormControl from "@material-ui/core/FormControl";
import InputField from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const Input = ({ name, type = "text", classes, children }) => (
  <Field name={name} type={type} required>
    {({ input }) => (
      <FormControl fullWidth className={classes.formControl}>
        <InputLabel htmlFor={name}>{children}</InputLabel>
        <InputField
          inputProps={{ ...input }}
          type={type}
          value={input.value}
          id={name}
        />
      </FormControl>
    )}
  </Field>
);

export default Input;
