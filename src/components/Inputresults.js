import React from "react";

export const Inputresults = ({ results }) => {
  return (
    <div>
      {results.map((result, id) => {
        return <div key={id}>{result}</div>;
      })}
    </div>
  );
};

export default Inputresults;
