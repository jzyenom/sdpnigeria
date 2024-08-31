import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header.jsx";
// import "tailwindcss";
// import "./index.css";

// src/main.jsx or src/App.jsx

import "../src/assets/vendors/bootstrap/css/bootstrap.min.css";
import "../src/assets/vendors/animate/animate.min.css";
import "../src/assets/vendors/jquery-ui/jquery-ui.css";
import "../src/assets/vendors/jarallax/jarallax.css";
import "../src/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css";
import "../src/assets/vendors/nouislider/nouislider.min.css";
import "../src/assets/vendors/nouislider/nouislider.pips.css";
import "../src/assets/vendors/tiny-slider/tiny-slider.min.css";
import "../src/assets/vendors/cleenhearts-icons/style.css";

import "../src/assets/vendors/fontawesome/css/all.min.css";
import "../src/assets/vendors/odometer/odometer.min.css";
import "../src/assets/vendors/swiper/swiper.min.css";
import "../src/assets/vendors/swiper/css/swiper-bundle.min.css";
import "../src/assets/vendors/owl-carousel/owl.carousel.min.css";
import "../src/assets/vendors/owl-carousel/owl.theme.default.min.css";
import "../src/assets/vendors/bxslider/jquery.bxslider.css";
import "../src/assets/vendors/vegas/vegas.min.css";
import "../src/assets/vendors/timepicker/timePicker.css";

import "../src/assets/css/cleenhearts.css";
// import "../src/assets/css/agrion.css";
import "../src/assets/vendors/cleenhearts-icons/style.css";

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      {/* <Container className=""> */}
      <Outlet />
      {/* </Container> */}
    </>
  );
};

export default App;
