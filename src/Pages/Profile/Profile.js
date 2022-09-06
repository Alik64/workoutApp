import s from "./Profile.module.css";

import { useSelector } from "react-redux";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div>
      <figure>{userInfo?.name?.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{userInfo?.name}!</strong> You can view this page
        because you're logged in
      </span>
    </div>
  );
};

export default Profile;
