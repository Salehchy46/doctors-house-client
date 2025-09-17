// components/sharedComponents/Heading.tsx
import React from "react";

interface HeadingProps {
  title: string;
  subTitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subTitle && <p className="mt-2 text-gray-600">{subTitle}</p>}
    </div>
  );
};

export default Heading;
