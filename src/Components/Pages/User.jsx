import React, { useContext, useEffect } from "react";
import { FaCoden, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import DisplaySpinner from "../Layouts/Spinner";
import userEvent from "@testing-library/user-event";
import GitHubContext from "../Context/GitHub/GitHubContext";
import { useParams } from "react-router-dom";

function User() {
  const { findUser, user, loading } = useContext(GitHubContext);

  const params = useParams();

  useEffect(() => {
    findUser(params.logn);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <DisplaySpinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:-grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="rounded-lg shadow-xl card image-full">
            <figure>
              <img src={avatar_url} alt="" />
            </figure>
            <div className="card-body justify-end">
              <h2 className="card-title mb-0">{name}</h2>
              <p>{login}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mb-6">
            <h1 className="text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-succes">{type}</div>
              {hireable && <div className="mx-1 badge-info">Hirable</div>}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 card-actions">
              <a href={html_url} target="_blank" rel="noreferrer">
                Visit GitHub Profile with Finnder
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  /*
  <div>{user.login}</div>
  */
}

export default User;
