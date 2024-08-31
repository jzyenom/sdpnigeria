/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDeleteUserMutation } from "../slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";

const DeleteUser = ({ userId }) => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [deleteUser, { isSuccess }] = useDeleteUserMutation(userInfo._id);

  useEffect(() => {
    if (isSuccess) {
      try {
        logoutApiCall().unwrap();
        dispatch(logout());
        navigate("/login");
      } catch (err) {
        console.error(err);
      }
      navigate("/");
    }
  }, [isSuccess, navigate, dispatch, logoutApiCall]);

  return (
    <>
      <div className="container my-20 max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Confirm account deletion?
          </div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          <button
            onClick={deleteUser}
            className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            <span className="my-5">Delete User</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
