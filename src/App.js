import { Fragment } from "react";
import { useSelector } from "react-redux";
// import { Route } from "react-router-dom";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />

      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      {/* <Route path="/login">{!isAuthenticated && <Auth />}</Route> */}
      {/* <Route path="/myprofile"><UserProfile /></Route> */}
      <Counter />
    </Fragment>
  );
}

export default App;
