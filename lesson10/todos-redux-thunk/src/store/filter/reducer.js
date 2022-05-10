import { FILTER_ALL } from "../../constants/filters";
import { FILTER_CHANGE_FILTER } from "./actions";

const INITIAL_STATE = FILTER_ALL;

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FILTER_CHANGE_FILTER:
      return payload;
  }

  return state;
}
