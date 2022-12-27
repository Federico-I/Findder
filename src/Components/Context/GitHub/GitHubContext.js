import { createContext, useReducer, useState } from "react";
import githubReducers from "./GitHubReducers";

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GitHubProvider = ({ children }) => {
  /*
  const [displayUsers, setDisplayUsers] = useState([]);
  const [loading, setLoading] = useState(true);
    */

  // get initial users (test)
  const initialState = {
    displayUsers: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducers, initialState);

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users/?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // find single user
  const findUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        type: "FIND_USER",
        payload: data,
      });
    }

    /*setDisplayUsers(data);
  setLoading(false);*/
  };

  // Clear users from state
  const clearUsers = () => dispatch({ type: "CLEAR_USERS" });

  // Set Users from state
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GitHubContext.Provider
      value={{
        displayUsers: state.displayUsers,
        loading: state.loading,
        user: state.user,
        searchUsers,
        clearUsers,
        findUser,
      }}
    ></GitHubContext.Provider>
  );
};

export default GitHubContext;
