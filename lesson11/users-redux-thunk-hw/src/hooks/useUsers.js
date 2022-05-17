import { useEffect, useState } from "react";
import { getUsersList } from "../services/usersService";
import { useBooleanFlag } from "./common";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, toggleIsLoading] = useBooleanFlag(false);

  useEffect(() => {
    toggleIsLoading(true);
    setError(null);
    getUsersList()
      .then((data) => setUsers(data))
      .catch((err) => setError(err))
      .finally(() => toggleIsLoading(false));
  }, []);

  return {
    users,
    isLoading,
    error,
  };
}
