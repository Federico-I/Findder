import React from "react";
import { useState, useContext } from "react";
import GitHubContext from "../Context/GitHub/GitHubContext";
import AlertContext from "../Context/Alert/AlertContext";

function UsersSearch() {
  const [text, setText] = useState();
  const { users, searchUsers, clearUsers } = useContext(GitHubContext);

  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter somthing.", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <form onChange={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.lengh > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </>
  );
}

export default UsersSearch;
