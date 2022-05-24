import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewTodo } from "../store/todos/actions";
import Form from "./Form";

const initialValues = {
  title: "",
  completed: false,
};

export default function NewTodoDialog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function closeForm() {
    navigate("/");
  }

  function onSumbit(todo) {
    dispatch(createNewTodo(todo));
  }
  return (
    <Dialog open onClose={closeForm} maxWidth="sx">
      <DialogTitle>Create Todo</DialogTitle>
      <DialogContent>
        <Form
          initialValues={initialValues}
          onCancel={closeForm}
          onSumbit={onSumbit}
        />
      </DialogContent>
    </Dialog>
  );
}
