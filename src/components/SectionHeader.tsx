import React, { ReactNode } from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeader = ({ children }: SectionHeadingProps) => {
  return (
    <>
      <h2 className="mt-1 mb-3 text-3xl font-medium capitalize text-center  dark:text-white/60">
        {children}
      </h2>
    </>
  );
};

export default SectionHeader;
