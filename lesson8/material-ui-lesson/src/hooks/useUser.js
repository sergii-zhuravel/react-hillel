import { useEffect, useState } from "react";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../services/usersService";
import { useBooleanFlag } from "./common";

const EMPTY_USER = {
  name: "",
  phone: "",
  email: "",
  website: "",
};

export default function useUser(id) {
  const [user, setUser] = useState(EMPTY_USER);
  const [error, setError] = useState(null);
  const [isLoading, toggleIsLoading] = useBooleanFlag(false);

  useEffect(() => {
    if (id) {
      toggleIsLoading(true);
      setError(null);
      getUser(id)
        .then((data) => setUser(data))
        .catch((err) => setError(err))
        .finally(() => toggleIsLoading(false));
    } else {
      setUser(EMPTY_USER);
    }
  }, [id]);

  function saveUser(user) {
    if (user.id) {
      return updateUser(user);
    } else {
      return createUser(user);
    }
  }

  function removeUser(id) {
    return deleteUser(id);
  }

  return {
    user,
    saveUser,
    removeUser,
    isLoading,
    error,
  };
}
