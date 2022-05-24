import React from "react";
import Button from "@mui/material/Button";

export default function FilterButton({
  currentFilter,
  filterName,
  children,
  changeFilter,
}) {
  return (
    <Button
      onClick={() => changeFilter(filterName)}
      variant={currentFilter === filterName ? "contained" : null}
    >
      {children}
    </Button>
  );
}
