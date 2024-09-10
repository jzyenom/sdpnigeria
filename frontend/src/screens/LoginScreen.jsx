import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

// import "../assets/css/cleenhearts.css";
// import "../assets/vendors/cleenhearts-icons/style.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  // <Loader />;
  return (
    <>
      <section className="page-header @@extraClassName">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: "url('src/assets/images/background/party.jpg')",
          }}
        ></div>
        {/* <!-- /.page-header__bg --> */}
        <div className="container">
          <h2 className="page-header__title">Login</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
            </li>
            <li>
              <span>Login</span>
            </li>
          </ul>
          {/* <!-- /.thm-breadcrumb list-unstyled --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.page-header --> */}
      {/* <!-- Login Start --> */}
      <section className="login-page section-space">
        <div className="container">
          <div className="row gutter-y-40">
            <div className="col-lg-6 wow fadeInUp" data-wow-duration="1500ms">
              <div className="login-page__image">
                <img src="src/assets/images/login/login-1-1.png" alt="login" />
              </div>
              {/* <!-- /.login-page__image --> */}
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="login-page__form">
                <span className="login-page__form__top-title">Log in</span>
                <h2 className="login-page__form__title">
                  welcome to our community
                </h2>
                <form
                  className="login-page__form__box form-one"
                  onSubmit={submitHandler}
                >
                  <div className="login-page__form__input-box form-one__control">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Email address"
                      className="form-one__control__input"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="login-page__form__input-box form-one__control">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      placeholder="******"
                      className="form-one__control__input"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="login-page__form__input-box login-page__form__checkbox-forgot">
                    <div className="login-page__form__checkbox">
                      <input type="checkbox" id="save_login" />
                      <label htmlFor="save_login">save log in</label>
                    </div>
                    <a href="login.html" className="login-page__form__forgot">
                      forgot your password?
                    </a>
                  </div>
                  <div className="login-page__form__input-box">
                    <button type="submit" className="cleenhearts-btn">
                      <span className="cleenhearts-btn__icon-box">
                        <span className="cleenhearts-btn__icon-box__inner">
                          <span className="icon-duble-arrow"></span>
                        </span>
                      </span>
                      <span className="cleenhearts-btn__text">log in</span>
                    </button>
                  </div>
                  <div className="login-page__form__or">
                    <hr className="login-page__form__or-line" />
                    <span className="login-page__form__or-text">Or</span>
                    <hr className="login-page__form__or-line" />
                  </div>
                  <div className="login-page__form__signin">
                    <button
                      type="button"
                      className="login-page__form__signin-btn"
                    >
                      <span>sign in with facebook</span>
                      <img
                        src="src/assets/images/icons/login-facebook.png"
                        alt=""
                      />
                    </button>
                    <button
                      type="button"
                      className="login-page__form__signin-btn"
                    >
                      <span>sign in with google</span>
                      <img
                        src="src/assets/images/icons/login-google.png"
                        alt=""
                      />
                    </button>
                    <p className="login-page__form__register-text">
                      don’t have an account? <a href="login.html">Register</a>
                    </p>
                  </div>
                </form>
              </div>
              {/* <!-- login-form --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Login End --> */}
    </>
  );
};

export default LoginScreen;
