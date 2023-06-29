import { useContext, useEffect, useState } from "react";
import { DataContextApi } from "../Context/DataContext";
import { AuthContext } from "../Context/UserContext";

const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { baseUrl } = useContext(DataContextApi);
  useEffect(() => {
    if (user?.email) {
      fetch(`${baseUrl}/api/user/admin/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data?.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [user?.email, setIsAdmin]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
