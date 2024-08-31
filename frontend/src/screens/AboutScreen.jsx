/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useParams, Link } from "react-router-dom";
import TheParty from "./about_us/TheParty";
// import CommitteeList from "../assets/committee";

const AboutScreen = () => {
  const { page } = useParams();

  const renderContent = () => {
    switch (page) {
      case "the_party":
        return <TheParty />;
      case "our_party_ideology":
        return <div>Our Party Ideology Content</div>;
      case "national_chairman":
        return <div>National Chairman Content</div>;
      case "national_working_committee":
        return <div>National Working Committee Content</div>;
      // Add more cases as needed for other links
      default:
        return <div>Welcome to the About Us section</div>;
    }
  };

  return (
    <>
      <div>{renderContent()}</div>
    </>
  );
};

export default AboutScreen;
