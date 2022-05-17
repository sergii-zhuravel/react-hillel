import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../services/usersService";
import { setUsers, toogleIsLoading } from "../store/slices/users";

export default function useUsers() {
  const isLoading = useSelector((state) => state.users.isLoading);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toogleIsLoading(true));
    getUsersList()
      .then((data) => dispatch(setUsers(data)))
      .finally(() => dispatch(toogleIsLoading(false)));
  }, []);

  return {
    users,
    isLoading,
  };
}
