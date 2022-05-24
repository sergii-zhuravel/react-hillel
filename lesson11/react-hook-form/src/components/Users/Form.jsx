import CancelIcon from "@mui/icons-material/CancelOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/SaveOutlined";
import { Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function UsersForm({ user, saveUser, deleteUser }) {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
  } = useForm({ defaultValues: user });

  const navigate = useNavigate();

  async function onFormSubmit(data) {
    const { id } = await saveUser(data);
    navigate("/users/" + id);
  }

  async function onDelete() {
    await deleteUser(user.id);
    navigate("/users/create");
  }

  function onCancel() {
    navigate("/users");
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography component="h1" variant="h4" align="center">
          User Form
        </Typography>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                fullWidth
                {...register("name", { required: "The field is required!!" })}
                error={errors.name && errors.name.message !== ""}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Surname"
                fullWidth
                {...register("surname", {
                  minLength: {
                    value: 3,
                    message: "Should be at least 10 chars long",
                  },
                })}
                error={errors.surname && errors.surname.message !== ""}
                helperText={errors.surname && errors.surname.message}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Phone"
                fullWidth
                {...register("phone")}
                error={errors.phone && errors.phone.message !== ""}
                helperText={errors.phone && errors.phone.message}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} justify="flex-end">
            <Grid item xs={12} md={6} align="right">
              <Stack spacing={2} direction="row" justifyContent="right">
                <Button
                  type="button"
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={onDelete}
                  disabled={!user.id}
                >
                  Delete
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                  disabled={!isDirty}
                >
                  Save
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  startIcon={<CancelIcon />}
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
