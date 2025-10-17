import React from "react";
import Link from "next/link";

const ContentPointer = ({ slug, title }) => {
  const href = `/${slug}`;

  return (
    <div className="content-pointer">
      <Link href={href} className="title">
        {title}
      </Link>
    </div>
  );
};

export default ContentPointer;
