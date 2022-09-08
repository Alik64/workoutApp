import s from "./Profile.module.css";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log("currentUser : ", currentUser);
  return (
    <div>
      <figure>{currentUser?.name?.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{currentUser?.name}!</strong>
      </span>
    </div>
  );
};

export default Profile;
