import React from "react";

type ContainerProps = {
  children: JSX.Element;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <>
      <div className="max-w-[1184px] w-full mx-auto px-6 h-20">{children}</div>
    </>
  );
};

export default Container;
