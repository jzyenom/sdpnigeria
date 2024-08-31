import Hero from "../components/Hero";
import UsersList from "./UsersList";
import { useGetUsersQuery } from "../slices/usersApiSlice";
import { useSelector } from "react-redux";
import About from "../components/About";
import HelpDonate from "../components/HelpDonate";
UserPage;
import Donate from "../components/Donate";
import UserPage from "./UserPage";
import Home from "../screens/Home";
// import AboutScreen from "./AboutScreen";
import Tabs from "./../components/tabs/Tabs";
import NationalChairman from "./about_us/NationalChairman";

const HomeScreen = () => {
  // eslint-disable-next-line no-unused-vars
  const { data: users, isError, isLoading, error } = useGetUsersQuery() || {};

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {userInfo ? (
        <>
          <Hero />
          <Home />
          {/* <Tabs /> */}
          {/* <AboutScreen /> */}
          {/* <NationalChairman /> */}
          <About />
        </>
      ) : (
        <>
          <Hero />
          {/* <About /> */}
          {/* <HelpDonate />
          <Donate /> */}
        </>
      )}
    </>
  );
};
export default HomeScreen;
