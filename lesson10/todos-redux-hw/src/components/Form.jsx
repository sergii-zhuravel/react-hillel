import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const initialValues = {
  title: "",
  isDone: false,
};

export default function TodoForm() {
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();

  function onFormSubmit(e) {
    e.preventDefault();
    dispatch(addTodo());

    resetForm();
  }

  function resetForm() {
    setValues(initialValues);
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <form autoComplete="off" onSubmit={onFormSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={10}>
          <TextField
            placeholder="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
