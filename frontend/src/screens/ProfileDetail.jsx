/* eslint-disable no-unused-vars */
import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Button, Container, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useGetUserQuery } from "../slices/usersApiSlice";

const ProfileDetail = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const { id } = useParams();
  const { data: user, isLoading } = useGetUserQuery(id) || {};

  return (
    <div className="container">
      {user ? (
        <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{user.name}</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>

          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {user.email}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {user.phone}
            </span>
          </div>

          <div className="px-6">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {user.ward}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {user.state}
            </span>
          </div>

          <div className="px-6 py-4">
            {user._id == userInfo._id && (
              <span>
                <Link to={`/profile/${user._id}/edit`}>
                  <Button
                    variant="primary"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    Update
                  </Button>
                </Link>
              </span>
            )}
          </div>
        </div>
      ) : (
        "no data"
      )}
    </div>
  );
};

export default ProfileDetail;
