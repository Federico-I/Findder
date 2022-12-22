import React from "react";
import { useEffect, useContext } from "react";
import DisplaySpinner from "../Layouts/Spinner";
import UsersItem from "./UsersItem";
import GitHubContext from "../Context/GitHub/GitHubContext";

function UsersResults() {
  const { displayUsers, loading, fetchUsers } = useContext(GitHubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {displayUsers.map((user) => {
          <UsersItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    <DisplaySpinner />;
  }
}

export default UsersResults; //
