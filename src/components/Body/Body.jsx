import React from "react";

let Body = props => {
  return (
    <div>
      <body>
        <div className="item-container">
          <h1>{props.title}</h1>
          <h3> Nothing Matters</h3>
        </div>
      </body>
    </div>
  );
};

export default Body;
