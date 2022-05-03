import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserForm({ user, saveUser, deleteUser }) {
  const [formState, setFormState] = useState({ ...user });
  const navigate = useNavigate();

  useEffect(() => {
    setFormState(user);
  }, [user]);

  function onInputChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveUser(formState).then(navigate("/users"));
  }

  function handleCancel() {
    navigate("/users");
  }
  function handleDelete() {
    deleteUser().then(() => {
      navigate("/users");
    });
  }

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          name="name"
          value={formState.name}
          onChange={onInputChange}
        />
        <TextField
          label="Phone"
          name="phone"
          value={formState.phone}
          onChange={onInputChange}
        />
        <TextField
          label="Email"
          name="email"
          value={formState.email}
          onChange={onInputChange}
        />
        <TextField
          label="Website"
          name="website"
          value={formState.website}
          onChange={onInputChange}
        />
        <Box my={2}>
          <ButtonGroup variant="contained">
            <Button color={"primary"} type="submit">
              Save
            </Button>
            <Button color={"primary"} onClick={handleCancel}>
              Cancel
            </Button>
            <Button color={"error"} onClick={handleDelete}>
              Delete
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Container>
  );
}

export default UserForm;
