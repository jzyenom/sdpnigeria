/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, user } from "../slices/authSlice";

import partyList from "../assets/parties";
import dataList from "../assets/data";
// import { useForm } from "../utils/hook";
import { toast } from "react-toastify";

const FormUpdate = ({ userId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [ward, setWard] = useState("");
  const [partyGroup, setPartyGroup] = useState("");
  const [dob, setDob] = useState("");
  const [nin, setNin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
    setLga("");
    setWard("");
  };

  const handleLgaChange = (e) => {
    setLga(e.target.value);
    setWard("");
  };

  const handleWardChange = (e) => {
    setWard(e.target.value);
  };

  const [updateUser] = useUpdateUserMutation(userInfo._id);

  const Parties = partyList.map((item, i) => {
    return (
      <option key={i} value={item.name}>
        {item.name}
      </option>
    );
  });

  const States = dataList.states.map((state) => (
    <option key={state.id} value={state.id}>
      {state.name}
    </option>
  ));

  const Wards =
    lga &&
    dataList.ward[lga].map((ward) => (
      <option key={ward.id} value={ward.id}>
        {ward.name}
      </option>
    ));

  const Lgas =
    state &&
    dataList.lga[state].map((lga) => (
      <option key={lga.id} value={lga.id}>
        {lga.name}
      </option>
    ));

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
      navigate("/register");
    } else {
      try {
        const res = await updateUser({
          id: userInfo._id,
          data: {
            name,
            email,
            phone,
            address,
            country,
            state,
            lga,
            ward,
            partyGroup,
            dob,
            nin,
            password,
            password2,
          },
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/profile/" + userInfo._id);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="container">
      <div className="w-full">
        <form
          className="container lg:w-full lg:max-w-lg"
          onSubmit={submitHandler}
        >
          {/* Fullname & Email */}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-name"
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="enter full name"
                defaultValue={userInfo.name}
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@example.com"
              />
            </div>
          </div>

          {/* mobile & address */}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Mobile
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-mobile"
                type="tel"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+234 000 000 0000"
                defaultValue={userInfo.phone}
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-address"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-address"
                type="text"
                name="address"
                defaultValue={userInfo.address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="enter address"
              />
            </div>
          </div>

          {/* country */}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Country
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-country"
                type="text"
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter your country"
              />
            </div>
          </div>

          {/* state, ward & lga */}

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                State
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  type="text"
                  name="state"
                  defaultValue={state}
                  onChange={handleStateChange}
                >
                  <option>{userInfo.state}</option>
                  {States}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-lga"
              >
                Lga
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-lga"
                  type="text"
                  name="lga"
                  defaultValue={lga}
                  onChange={handleLgaChange}
                >
                  <option>{userInfo.lga}</option>
                  {Lgas}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-ward"
              >
                Ward
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-ward"
                  name="ward"
                  defaultValue={ward}
                  onChange={handleWardChange}
                >
                  <option>{userInfo.ward}</option>
                  {Wards}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* party group */}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-partyGroup"
              >
                Party Group
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-partyGroup"
                  type="text"
                  name="partyGroup"
                  onChange={(e) => setPartyGroup(e.target.value)}
                >
                  <option>{userInfo.partyGroup}</option>
                  {Parties}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* password */}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-country"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                name="password"
                placeholder="******************"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-country"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                name="password2"
                placeholder="******************"
                onChange={(e) => setPassword2(e.target.value)}
              />
              <p className="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>

          {/* button */}

          <div className="md:flex md:items-center">
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Update
              </button>
            </div>

            <div className="md:w-1/4"></div>

            <div className="py-2 m">
              {userInfo && userInfo._id && (
                <button>
                  <Link
                    to={`/profile/${userInfo._id}/delete`}
                    className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </Link>
                </button>
              )}
            </div>
          </div>
        </form>
        {/* <DeleteUser userId={userInfo._id} /> */}
      </div>
    </div>
  );
};

export default FormUpdate;
