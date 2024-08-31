/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useGetUserQuery } from "../slices/usersApiSlice";
import FormUpdate from "./Update";

const UpdateUser = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { data: user } = useGetUserQuery(userInfo._id) || {};

  return (
    <div className="container mt-4 mb-4 p-3">
      <h1>Update Project</h1>
      <hr />
      <div>{user && <FormUpdate user={user} userId={userInfo._id} />}</div>
      <div>{/* <FormUpdate project={project} /> */}</div>
    </div>
  );
};

export default UpdateUser;
