import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const myprofile = (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      {/* <NavLink to="/login">Logout</NavLink> */}
    </main>
  );
  return <div>{isAuthenticated && myprofile}</div>;
};

export default UserProfile;
