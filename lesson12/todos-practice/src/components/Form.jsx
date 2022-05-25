import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

export default function TodoForm({ initialValues, onCancel, onSumbit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  function onFormSubmit(data) {
    onSumbit(data);
    onCancel();
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ margin: 1 }}>
          <TextField
            label="Title"
            {...register("title", { required: "The field is required!!" })}
            error={errors.name && errors.name.message !== ""}
            helperText={errors.name?.message}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", gap: 1 }}>
          <Button type="submit" variant="contained" size="medium">
            Add
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

TodoForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
