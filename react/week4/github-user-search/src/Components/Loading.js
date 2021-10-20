import React from "react";
import userSearchContext from "../Context/userSearchContext";

function Loading() {
const bucket = React.useContext(userSearchContext) 

console.log(bucket);

  return (
    <div>
     {bucket.isLoading ? "Loading ..." : ""  }
    </div>
  );
}

export default Loading;