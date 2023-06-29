import { AuthContext } from "@/src/Context/UserContext";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { FaPowerOff } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const ProfileDD = () => {
  const {  logOut } = useContext(AuthContext);
  const router = useRouter();
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          timerProgressBar: true,
          title: "Successfully Logout Done !",
          iconColor: "#ED1C24",
          toast: true,
          icon: "success",
          showClass: {
            popup: "animate__animated animate__fadeInRight",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutRight",
          },
          customClass: {
            confirmButton: "blue",
          },
          showConfirmButton: false,
          timer: 3500,
        });
        localStorage.removeItem("user-uid");
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something warn!",
          confirmButtonColor: "#0077b6",
        });
      });
  };

  return (
    <div>
      <Box p={2}>
        <Button
          fullWidth
          className="commonBtn flex justify-center items-center gap-4"
          onClick={handleLogout}
        >
          <FaPowerOff />
          Logout
        </Button>
      </Box>
    </div>
  );
};

export default ProfileDD;
