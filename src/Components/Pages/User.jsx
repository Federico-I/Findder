import React, { useContext, useEffect } from "react";
import {
  FaCode,
  FaCoden,
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import DisplaySpinner from "../Layouts/Spinner";
import RepoList from "../Repos/RepoList";
import GitHubContext from "../Context/GitHub/GitHubContext";
import { useParams } from "react-router-dom";
import { getUserAndRepos } from "../Context/GitHub/GitHubActions";

function User() {
  const { user, loading, repos, dispatch } = useContext(GitHubContext);

  const params = useParams();

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };

    getUserData();
  }, [dispatch, params.login]);

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
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title tex-mid">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title tex-mid">Website</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title tex-mid">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-l shadown-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-mxl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Follower</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-mxl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Follower</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-mxl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Follower</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-mxl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-mxl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gist</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
        <RepoList Repos={repos} />
      </div>
    </>
  );
  /*
  <div>{user.login}</div>
  */
}

export default User;
