// /* eslint-disable react/no-unescaped-entities */
// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import TheParty from "./about_us/TheParty";
// // import CommitteeList from "../assets/committee";
// import Ideology from "./about_us/Ideology";
// import NationalChairman from "./about_us/NationalChairman";
// import NationalCommittee from "./about_us/NationalCommittee";
// import StateChairman from "./about_us/StateChairman";
// import SdpAmbassador from "./about_us/SdpAmbassador";
// import SdpChampions from "./about_us/SdpChampions";
// import StatePartyStructure from "./about_us/StatePartyStructure";
// import SdpMission from "./about_us/SdpMission";
// import AgainstHunger from "./about_us/AgainstHunger";

// const AboutScreen = () => {
//   const { page } = useParams();

//   const renderContent = () => {
//     switch (page) {
//       case "the_party":
//         return <TheParty />;
//       case "our_party_ideology":
//         return <Ideology />;
//       case "national_chairman":
//         return <NationalChairman />;
//       case "national_working_committee":
//         return <NationalCommittee />;
//       case "state_chairman":
//         return <StateChairman />;
//       case "sdp_ambassadors":
//         return <SdpAmbassador />;
//       case "sdp_champions":
//         return <SdpChampions />;
//       case "state_party_structure":
//         return <StatePartyStructure />;
//       case "sdp_mission":
//         return <SdpMission />;
//       case "our_mission_against_hunger":
//         return <AgainstHunger />;
//       // Add more cases as needed for other links
//       default:
//         return <div>Welcome to the About Us section</div>;
//     }
//   };

//   return (
//     <>
//       <div>{renderContent()}</div>
//     </>
//   );
// };

// export default AboutScreen;
