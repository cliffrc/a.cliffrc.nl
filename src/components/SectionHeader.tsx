import React, { ReactNode } from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeader = ({ children }: SectionHeadingProps) => {
  return (
    <>
      <h2 className="">{children}</h2>
    </>
  );
};

export default SectionHeader;
