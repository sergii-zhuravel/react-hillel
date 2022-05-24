import { createSlice } from "@reduxjs/toolkit";
import { FILTER_ALL } from "../../constants/filters";
import { FILTER_CHANGE_FILTER } from "./actions";

const initialState = FILTER_ALL;

// export default function (state = INITIAL_STATE, { type, payload }) {
//   switch (type) {
//     case FILTER_CHANGE_FILTER:
//       return payload;
//   }

//   return state;
// }

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, { type, payload }) => {
      return payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
