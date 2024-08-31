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

import ProductPage from "./screens/ProductPage.jsx";

// Import scripts that are available as npm packages
import $ from "jquery";
import UserPage from "./screens/UserPage.jsx";
import AboutScreen from "./screens/AboutScreen.jsx";
import ContactScreen from "./screens/ContactScreen.jsx";

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
      <Route path="/about" element={<AboutScreen />} />

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
