import React, { useContext, useEffect } from "react";
import userEvent from "@testing-library/user-event";
import GitHubContext from "../Context/GitHub/GitHubContext";
import { useParams } from "react-router-dom";

function User() {
  const { findUser, user } = useContext(GitHubContext);

  const params = useParams();

  useEffect(() => {
    findUser(params.logn);
  }, []);

  return <div>User</div>;
}

export default User;
