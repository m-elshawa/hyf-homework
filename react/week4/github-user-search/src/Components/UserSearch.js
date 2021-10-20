import React, { useEffect, useState } from "react";
import userSearchContext from "../Context/userSearchContext";
import Loading from "./Loading";

function UserSearch() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [query, setQuery] = useState('')

  // function handleChange(e) {
  //     e.preventDefault();

  //     setName(e.target.value);
  // }

  const bucket = {
    isLoading,
    setIsLoading,
  };

  useEffect(() => {
    { name.length === 0 ? setData(["no result"]) : setIsLoading(true);
      fetch(`https://api.github.com/search/users?q=${name}`)
        .then((results) => results.json())
        .then((name) => {
          name.items ? setData(name.items) : setData([name.message]);
        });
      setIsLoading(false);
    }
  }, [name]);
  console.log(name);

  const Names = (props) => {
    return <div>{props.userName}</div>;
  };

  return (
    <userSearchContext.Provider value={bucket}>
      <div>
        <input
          type="text"
          placeholder="Search for user..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Loading />

        <div>
          {" "}
          {data.map((data) => {
            return <Names userName={data.login ? data.login : data} />;
          })}{" "}
        </div>
      </div>
    </userSearchContext.Provider>
  );
}

export default UserSearch;
