import { createContext, useReducer, useState } from "react";
import githubReducers from "./GitHubReducers";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  /*
  const [displayUsers, setDisplayUsers] = useState([]);
  const [loading, setLoading] = useState(true);
    */

  // get initial state users (test)
  const initialState = {
    displayUsers: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducers, initialState);

  return (
    <GitHubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    ></GitHubContext.Provider>
  );
};

export default GitHubContext;
