import React from "react";
const Page = ({ params }) => {
  const { section } = params;

  return (
    <p>
      You are in <span className="highlight">{section}</span> section select
      item on the left to read more
    </p>
  );
};

export default Page;
