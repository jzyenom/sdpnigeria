import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import partyList from "../assets/parties";
import { Upload } from "react-bootstrap-icons";
import { useForm } from "../utils/hook";
import { toast } from "react-toastify";

const RegisterScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    $(`.selectpicker`).selectpicker();
  }, []);

  const submitHandler = async () => {
    if (values.password !== values.password2) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const formData = new FormData();
      if (files.length > 0) {
        formData.append("avatar", files[0]);
      }
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      const res = await register(formData).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const {
    onChange,
    onSubmit,
    values,
    files,
    filePreview,
    fileError,
    getRootProps,
    getInputProps,
  } = useForm(submitHandler, {
    avatar: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    lga: "",
    ward: "",
    role: "",
    partyGroup: "",
    dob: "",
    nin: "",
    password: "",
    password2: "",
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <section className="page-header @@extraClassName">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url('src/assets/images/register/register_Bg.png')",
          }}
        ></div>
        <div className="container">
          <h2 className="page-header__title">Register</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
            </li>
            <li>
              <span>Register</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="checkout-page section-space">
        <div className="container">
          <div className="row justify-content-center gutter-y-30">
            <div className="col-xl-8 col-lg-7">
              <div className="checkout-page__billing-address">
                <h2 className="checkout-page__billing-address__title checkout-page__title">
                  Personal Details
                </h2>
                <form
                  className="checkout-page__form row gutter-y-17"
                  onSubmit={onSubmit}
                >
                  {/* Avatar field */}
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="checkout-page__input-box">
                          <label htmlFor="file-upload">Upload Image</label>
                          <div
                            className="dropzone"
                            {...getRootProps()}
                            id="avatar"
                            style={{
                              border: "2px dashed orange",
                              padding: "20px",
                              borderRadius: "50%",
                              textAlign: "center",
                              width: "300px",
                              height: "300px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              overflow: "hidden",
                              margin: "0 auto",
                            }}
                          >
                            <input {...getInputProps()} />
                            {filePreview ? (
                              <div style={{ width: "100%", height: "100%" }}>
                                <img
                                  src={filePreview}
                                  alt="Preview"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                  }}
                                />
                              </div>
                            ) : (
                              <div className="dz-message needsclick">
                                <div className="mb-5">
                                  <Upload
                                    style={{ color: "orange" }}
                                    className="display-1 mt-3"
                                  />
                                </div>
                                <h5 style={{ color: "orange" }}>
                                  Click or drag to upload files
                                </h5>
                              </div>
                            )}
                          </div>
                          {fileError && (
                            <div
                              style={{
                                backgroundColor: "red",
                                color: "white",
                                padding: "10px",
                                borderRadius: "5px",
                                marginTop: "10px",
                                textAlign: "center",
                              }}
                            >
                              {fileError}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form fields */}
                  {/* Name field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={onChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={values.phone}
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  {/* Country field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="country">Country / Region *</label>
                      <select
                        className="selectpicker"
                        name="country"
                        id="country"
                        value={values.country}
                        onChange={onChange}
                      >
                        <option value="">Select a country</option>
                        <option value="1">Nigeria</option>
                        <option value="2">England</option>
                        <option value="3">Australia</option>
                        <option value="4">United States of America</option>
                      </select>
                    </div>
                  </div>

                  {/* Address field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box checkout-page__input-box--address">
                      <label htmlFor="address">Street Address *</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={values.address}
                        onChange={onChange}
                        placeholder="your address"
                        required
                      />
                    </div>
                  </div>

                  {/* State field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="state">State</label>
                      <select
                        name="state"
                        id="state"
                        className="selectpicker"
                        value={values.state}
                        onChange={onChange}
                      >
                        <option value="">Select a state</option>
                        <option value="abia">Abia</option>
                        <option value="adamawa">Adamawa</option>
                        <option value="anambra">Anambra</option>
                      </select>
                    </div>
                  </div>

                  {/* LGA field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="lga">LGA</label>
                      <select
                        name="lga"
                        id="lga"
                        className="selectpicker"
                        value={values.lga}
                        onChange={onChange}
                      >
                        <option value="">Select an LGA</option>
                        <option value="ahiamufu">Ahiamufu</option>
                        <option value="kaura">Kaura</option>
                        <option value="idoma">Idoma</option>
                      </select>
                    </div>
                  </div>

                  {/* Ward field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="ward">Ward</label>
                      <select
                        name="ward"
                        id="ward"
                        className="selectpicker"
                        value={values.ward}
                        onChange={onChange}
                      >
                        <option value="">Select a ward</option>
                        <option value="one">Ward One</option>
                        <option value="two">Ward Two</option>
                        <option value="three">Ward Three</option>
                      </select>
                    </div>
                  </div>

                  {/* Role field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="role">Role</label>
                      <select
                        name="role"
                        id="role"
                        className="selectpicker"
                        value={values.role}
                        onChange={onChange}
                      >
                        <option value="">Select a role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select>
                    </div>
                  </div>

                  {/* Party Group field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="partyGroup">Party Group</label>
                      <select
                        name="partyGroup"
                        id="partyGroup"
                        className="selectpicker"
                        value={values.partyGroup}
                        onChange={onChange}
                      >
                        <option value="">Select a party group</option>
                        {partyList.map((party) => (
                          <option key={party.id} value={party.name}>
                            {party.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date of Birth field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="dob">Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        value={values.dob}
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  {/* NIN field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="nin">NIN</label>
                      <input
                        type="text"
                        name="nin"
                        id="nin"
                        value={values.nin}
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  {/* Password field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  {/* Confirm Password field */}
                  <div className="col-xl-12">
                    <div className="checkout-page__input-box">
                      <label htmlFor="password2">Confirm Password</label>
                      <input
                        type="password"
                        name="password2"
                        id="password2"
                        value={values.password2}
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-12">
                    <button type="submit" className="cleenhearts-btn">
                      <span className="cleenhearts-btn__icon-box">
                        <span className="cleenhearts-btn__icon-box__inner">
                          <span className="icon-duble-arrow"></span>
                        </span>
                      </span>
                      <span className="cleenhearts-btn__text">Register</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterScreen;
