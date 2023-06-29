import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/UserContext";
import useAdmin from "../../Hooks/useAdmin";

const AdminAccessRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const router = useRouter();

  useEffect(() => {
    if (!user?.email && !isAdmin && !isAdminLoading) {
      router.push("/auth/login");
    }
  }, [router, isAdmin, isAdminLoading, user]);

  if (isAdminLoading) {
    return (
      <div className="w-full my-60 flex items-center text-white justify-center">
        Loading...
      </div>
    );
  }

  return <>{user?.email && isAdmin ? children : null}</>;
};

export default AdminAccessRoute;
