/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
// import asyncHandler from "express-async-handler";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ProfileDetail from "./screens/ProfileDetail.jsx";

import UpdateUser from "./screens/UpdateUser.jsx";
import DeleteUser from "./screens/DeleteUser";
import PrivateRoute from "./components/PrivateRoute.jsx";

import store from "./store";
import { Provider } from "react-redux";

// import ProductPage from "./screens/ProductPage.jsx";

// Import scripts that are available as npm packages
import $ from "jquery";
import UserPage from "./screens/UserPage.jsx";
// import AboutScreen from "./screens/AboutScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";

// About Us
import TheParty from "./screens/about_us/TheParty.jsx";
import Ideology from "./screens/about_us/Ideology.jsx";
import NationalChairman from "./screens/about_us/NationalChairman.jsx";
import ChairmanProfile from "./screens/about_us/ChairmanProfile.jsx";
import NationalCommittee from "./screens/about_us/NationalCommittee.jsx";
import StateChairman from "./screens/about_us/StateChairman.jsx";
import SdpAmbassador from "./screens/about_us/SdpAmbassador.jsx";
import SdpChampions from "./screens/about_us/SdpChampions.jsx";
import StatePartyStructure from "./screens/about_us/StatePartyStructure.jsx";
import SdpMission from "./screens/about_us/SdpMission.jsx";
import AgainstHunger from "./screens/about_us/AgainstHunger.jsx";
import Error404 from "./screens/about_us/Error404.jsx";

// Policies
import SocialSecurity from "./screens/policies/SocialSecurity.jsx";
import Education from "./screens/policies/Education.jsx";
import HealthForAll from "./screens/policies/HealthForAll.jsx";
import AgricultureDevelopment from "./screens/policies/AgricultureDevelopment.jsx";
import InfrastructuralDevelopment from "./screens/policies/InfrastructuralDevelopment.jsx";
import IndustrialGrowth from "./screens/policies/IndustrialGrowth.jsx";
import SolidMineral from "./screens/policies/SolidMineral.jsx";
import ForeignPolicy from "./screens/policies/ForeignPolicy";
import Economy from "./screens/policies/Economy.jsx";
import YouthDevelopment from "./screens/policies/YouthDevelopment.jsx";

import CampaignSchedules from "./screens/resources/CampaignSchedules.jsx";
import PartyManifesto from "./screens/resources/PartyManifesto.jsx";
import PartyConstitution from "./screens/resources/PartyConstitution.jsx";

import PhotoGallery from "./screens/sdp_studio/PhotoGallery.jsx";
import PressRelease from "./screens/sdp_studio/PressRelease.jsx";
import BlogDetails from "./screens/sdp_studio/BlogDetails.jsx";
import SdpOnSocial from "./screens/sdp_studio/SdpOnSocial.jsx";
import VideoGallery from "./screens/sdp_studio/VideoGallery.jsx";
import Webinars from "./screens/sdp_studio/Webinars.jsx";
import ForeignMember from "./screens/sdp_diaspora/ForeignMember.jsx";
import ForeignChapter from "./screens/sdp_diaspora/ForeignChapter.jsx";
import ForeignOffices from "./screens/sdp_diaspora/ForeignOffices.jsx";
import ChapterAmb from "./screens/sdp_diaspora/ChapterAmb.jsx";
import InecResults from "./screens/resources/InecResults.jsx";
import Souvenirs from "./screens/resources/Souvenirs.jsx";
import InternalElection from "./screens/resources/InternalElection.jsx";
import SocialStudio from "./screens/sdp_studio/SocialStudio.jsx";

// Load other scripts dynamically if not available as npm packages
const loadScript = (src, type = "text/javascript") => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = type;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.body.appendChild(script);
  });
};

const loadExternalScripts = async () => {
  try {
    await loadScript("https://js.paystack.co/v1/inline.js");
    await loadScript("src/assets/vendors/jquery/jquery-3.7.0.min.js");
    await loadScript(
      "src/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js",
    );
    await loadScript("src/assets/vendors/jquery-appear/jquery.appear.min.js");
    await loadScript(
      "src/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js",
    );
    await loadScript(
      "src/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js",
    );
    await loadScript(
      "src/assets/vendors/jquery-validate/jquery.validate.min.js",
    );
    await loadScript("src/assets/vendors/nouislider/nouislider.min.js");
    await loadScript("src/assets/vendors/nouislider/nouislider.min.js");
    await loadScript("src/assets/vendors/odometer/odometer.min.js");
    await loadScript("src/assets/vendors/swiper/swiper.min.js");
    await loadScript("src/assets/vendors/tiny-slider/tiny-slider.min.js");
    await loadScript("src/assets/vendors/wnumb/wNumb.min.js");
    await loadScript("src/assets/vendors/wow/wow.js");
    await loadScript("src/assets/vendors/isotope/isotope.js");
    await loadScript("src/assets/vendors/countdown/countdown.min.js");
    await loadScript("src/assets/vendors/owl-carousel/owl.carousel.min.js");
    await loadScript("src/assets/vendors/bxslider/jquery.bxslider.min.js");
    await loadScript(
      "src/assets/vendors/bootstrap-select/bootstrap-select.min.js",
    );
    await loadScript("src/assets/vendors/vegas/vegas.min.js");
    await loadScript("src/assets/vendors/jquery-ui/jquery-ui.js");
    await loadScript("src/assets/vendors/timepicker/timePicker.js");
    await loadScript("src/assets/vendors/circleType/jquery.circleType.js");
    await loadScript("src/assets/vendors/circleType/jquery.lettering.min.js");
    await loadScript("src/assets/js/cleenhearts.js");
  } catch (error) {
    console.error("Error loading external scripts:", error);
  }
};

// Calling the function to load external scripts
loadExternalScripts();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/contact" element={<ContactScreen />} />

      <Route path="/the_party" element={<TheParty />} />
      <Route path="/our_party_ideology" element={<Ideology />} />
      <Route path="/national_chairman" element={<NationalChairman />} />
      <Route
        path="/national_working_committee"
        element={<NationalCommittee />}
      />
      <Route path="/state_chairman" element={<StateChairman />} />
      <Route path="/chairman_profile" element={<ChairmanProfile />} />
      <Route path="/sdp_ambassadors" element={<SdpAmbassador />} />
      <Route path="/sdp_champions" element={<SdpChampions />} />
      <Route path="/state_party_structure" element={<StatePartyStructure />} />
      <Route path="/sdp_mission" element={<SdpMission />} />
      <Route path="/our_mission_against_hunger" element={<AgainstHunger />} />

      {/* Resources */}
      <Route
        path="/download_sdp_party_manifesto"
        element={<PartyManifesto />}
      />

      <Route
        path="/download_sdp_party_constitution"
        element={<PartyConstitution />}
      />

      <Route
        path="/election_&_campaign_schedules"
        element={<CampaignSchedules />}
      />
      <Route
        path="/internal_electiion_&_polling_result"
        element={<InternalElection />}
      />
      <Route path="/election_results_inec" element={<InecResults />} />
      <Route path="/sdp_party_souvenirs" element={<Souvenirs />} />

      {/* Sdp Studio */}
      <Route path="/photo_gallery" element={<PhotoGallery />} />
      <Route path="/video_gallery" element={<VideoGallery />} />
      <Route path="/press_release" element={<PressRelease />} />
      <Route path="/social_studio" element={<SocialStudio />} />
      <Route path="/sdp_news_&_update" element={<PressRelease />} />
      <Route path="/sdp_&_me" element={<PressRelease />} />
      <Route path="/blog_details/:id" element={<BlogDetails />} />
      <Route path="/sdp_on_social_media" element={<SdpOnSocial />} />
      <Route path="/upcoming_webinars" element={<Webinars />} />

      {/* <Route path="/about/:page" element={<AboutScreen />} /> */}

      {/* Policies */}
      <Route path="/social_security" element={<SocialSecurity />} />
      <Route
        path="/education_&_human_capital_development"
        element={<Education />}
      />
      <Route path="/youth_development" element={<YouthDevelopment />} />
      <Route path="/economy" element={<Economy />} />
      <Route path="/foreign_policy" element={<ForeignPolicy />} />
      <Route path="/health_for_all" element={<HealthForAll />} />
      <Route
        path="/agriculture_development"
        element={<AgricultureDevelopment />}
      />
      <Route
        path="/infrastructural_development"
        element={<InfrastructuralDevelopment />}
      />
      <Route path="/industrial_growth" element={<IndustrialGrowth />} />
      <Route
        path="/solid_mineral-&-natural-resources"
        element={<SolidMineral />}
      />

      {/* Sdp in diaspora */}
      <Route path="/foreign_member_application" element={<ForeignMember />} />
      <Route
        path="/foreign_chapter_coordinators"
        element={<ForeignChapter />}
      />
      <Route path="/foreign_chapter_offices" element={<ForeignOffices />} />
      <Route path="/chapter_ambassadors" element={<ChapterAmb />} />

      <Route path="*" element={<Error404 />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile/:id" element={<ProfileDetail />} />
        <Route path="/members" element={<UserPage />} />
        {/* <Route path="/user" element={<UserPage />} /> */}
        <Route path="/profile/:id/edit" element={<UpdateUser />} />
        <Route path="/profile/:id/delete" element={<DeleteUser />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);
