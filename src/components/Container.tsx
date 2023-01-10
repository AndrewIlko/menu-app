import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  return (
    <>
      <div className="max-w-[1184px] w-full mx-auto px-6 h-full flex flex-col">
        {children}
      </div>
    </>
  );
};

export default Container;
