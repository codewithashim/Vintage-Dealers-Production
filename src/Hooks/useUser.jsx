import { useContext, useEffect, useState } from "react";
import { DataContextApi } from "../Context/DataContext";
import { AuthContext } from "../Context/UserContext";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const [isUser, setIsUser] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const { baseUrl } = useContext(DataContextApi);
  useEffect(() => {
    if (user?.email) {
      fetch(`${baseUrl}/api/user/user/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsUser(data?.isUser);
          setIsUserLoading(false);
        });
    }
  }, [user?.email, setIsUser, baseUrl]);
  return [isUser, isUserLoading];
};

export default useUser;
