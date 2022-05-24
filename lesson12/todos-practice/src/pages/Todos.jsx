import Container from "@mui/material/Container";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "../components/common/AppHeader";
import Filters from "../components/Filters";
import List from "../components/ListContainer";
import NewTodoDialog from "../components/NewTodoDialog";

export default function TodosPage() {
  return (
    <Container maxWidth="md">
      <AppHeader />
      <Filters />
      <List />
      <Routes>
        <Route path="/create" element={<NewTodoDialog />} />
      </Routes>
    </Container>
  );
}
