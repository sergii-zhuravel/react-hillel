import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../services/usersService";
import {
  createUserThunk,
  deleteUserThunk,
  setUsers,
  toogleIsLoading,
  updateUserThunk,
} from "../store/slices/users";

const DEFAULT_USER = {
  name: "",
  surname: "",
  phone: "",
};

export default function useUsers() {
  const isLoading = useSelector((state) => state.users.isLoading);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toogleIsLoading(true));
    getUsersList()
      .then((data) => dispatch(setUsers(data)))
      .finally(() => dispatch(toogleIsLoading(false)));
  }, [dispatch]);

  function saveUser(user) {
    if (user.id) {
      return dispatch(updateUserThunk(user));
    } else {
      return dispatch(createUserThunk(user));
    }
  }

  function removeUser(id) {
    return dispatch(deleteUserThunk(id));
  }

  function getUser(id) {
    let user;
    if (id) {
      user = users.find((user) => user.id === id);
    }
    return user || DEFAULT_USER;
  }

  return {
    users,
    isLoading,
    getUser,
    saveUser,
    removeUser,
  };
}
