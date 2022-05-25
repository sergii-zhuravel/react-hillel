import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE } from "../constants/filters";
import FilterButton from "./FilterButton";
import { changeFilter } from "../store/filter/reducer";

const PaperContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Filters() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function handleChangeFilter(filter) {
    dispatch(changeFilter(filter));
  }
  return (
    <PaperContainer>
      <FilterButton
        changeFilter={handleChangeFilter}
        currentFilter={filter}
        filterName={FILTER_ALL}
      >
        All
      </FilterButton>
      <FilterButton
        changeFilter={handleChangeFilter}
        currentFilter={filter}
        filterName={FILTER_DONE}
      >
        DONE
      </FilterButton>
      <FilterButton
        changeFilter={handleChangeFilter}
        currentFilter={filter}
        filterName={FILTER_NOT_DONE}
      >
        TODO
      </FilterButton>
    </PaperContainer>
  );
}

export default React.memo(Filters);
