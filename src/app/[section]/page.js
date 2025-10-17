import React from "react";

const Page = ({ params }) => {
  const { section } = params;

  return (
    <div>You are in {section} section select item on the left to read more</div>
  );
};

export default Page;
