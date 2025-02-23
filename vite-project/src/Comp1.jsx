import React from "react";
const Comp1 = () => {
  const data = {
    name: "Reshma N",
    department: "M.Tech cse",
    feedback:
      "The Full Stack Development course was well-structured, with clear explanations, and there was no hesitation in asking doubts."
  };

  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h2>Department: {data.department}</h2>
      <h3>Feedback:</h3>
      <p>{data.feedback}</p>
      <h3>Raw JSON Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Comp1;
