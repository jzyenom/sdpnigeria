import { Link, useParams } from "react-router-dom";
import { useGetUsersQuery } from "../slices/usersApiSlice";
import { useEffect, useState } from "react";

const UsersList = () => {
  const [filters, setFilters] = useState({ search: "" });
  const {
    data: users = [],
    isError,
    isLoading,
    error,
  } = useGetUsersQuery(filters) || {};

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/* <h1>All Users List</h1>
      <hr />

      <form className="container w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Search User
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              value={filters.search}
              name="search"
              onChange={handleChange}
              placeholder="Search by LGA, WARD and STATE"
            />
          </div>
        </div>
      </form>
      <hr />

       */}
      {/* <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-3"> */}
      <div>
        {/* <!--Page Header Start--> */}
        <section className="page-header">
          <div
            className="page-header-bg"
            style={{
              backgroundImage:
                "url(../src/assets/images/backgrounds/page-header-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="page-header__inner">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li>Pages</li>
              </ul>
              <h2>Our Members</h2>
            </div>
          </div>
        </section>
        {/* <!--Page Header End--> */}

        {/* <!--User Page Start--> */}
        <section className="team-page">
          <div className="container">
            <div className="row">
              {/* <!--Team Page Single Start--> */}
              {!isLoading ? (
                users?.length > 0 &&
                users?.map((user) => (
                  <>
                    <div
                      key={user._id}
                      className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay="500ms"
                    >
                      <div className="team-one__single">
                        <div className="team-one__shape-1">
                          <img
                            src="../src/assets/images/shapes/team-one-shape-1.png"
                            alt=""
                          />
                        </div>
                        <div className="team-one__img-box">
                          <div className="team-one__img">
                            <img src={user.avatar} alt="" />
                            <ul className="list-unstyled team-one__social">
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>{" "}
                                  <span className="team-one__social-name">
                                    Facebook
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter"></i>{" "}
                                  <span className="team-one__social-name">
                                    Twitter
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-pinterest-p"></i>{" "}
                                  <span className="team-one__social-name">
                                    Pinterest
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                  <span className="team-one__social-name">
                                    Instagram
                                  </span>
                                </a>
                              </li>
                            </ul>
                            <div className="team-one__icon">
                              <a href="#">
                                <i className="fas fa-share-alt"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="team-one__content">
                          <h3 className="team-one__title">
                            <a href="farmers.html">{user.name}</a>
                          </h3>
                          <p className="team-one__subtitle">
                            {user.partyGroup}
                          </p>
                          <p className="team-one__subtitle">
                            {user.Paymentstatus}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <>
                  <div>
                    <div className="py-8 px-8 max-w-sm mx-auto m-3 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                      <p className="text-center space-y-2 sm:text-left">
                        User not found
                      </p>
                    </div>
                  </div>
                </>
              )}
              {/* <!--Team Page Single End--> */}
            </div>
          </div>
        </section>
        {/* <!--Team Page End--> */}
      </div>
    </div>
  );
};

export default UsersList;

// <>
//   <div className="">
//     <div
//       key={user._id}
//       className="py-8 px-8 max-w-sm mx-auto m-3 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
//     >
//       <img
//         className="block mx-auto h-24 rounded-sm sm:mx-0 sm:shrink-0"
//         src="/img/erin-lindford.jpg"
//         alt={user.name}
//       />
//       <div className="text-center space-y-2 sm:text-left">
//         <div className="space-y-0.5">
//           <p className="text-md text-black font-semibold">
//             {user.name}
//           </p>
//           <p className="text-slate-500 font-medium">
//             {user.partyGroup}
//           </p>
//         </div>
//         <button>
//           <Link
//             to={"/profile/" + user._id}
//             className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
//           >
//             View
//           </Link>
//         </button>
//       </div>
//     </div>
//   </div>
// </>
