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

  const initialState = {
    displayUsers: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducers, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    });

    /*setDisplayUsers(data);
    setLoading(false);*/
  };

  return (
    <GitHubContext.Provider
      value={{
        displayUsers: state.displayUsers,
        loading: state.loading,
        fetchUsers,
      }}
    ></GitHubContext.Provider>
  );
};

export default GitHubContext;
