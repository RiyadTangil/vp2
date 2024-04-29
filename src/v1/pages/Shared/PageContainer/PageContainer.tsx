import React from "react";

const PageContainer = ({ children }: any) => {
  return (
    <div className="HomeContainer2">
      <div className="RightContainer2">
        <div className="RightTopContainer">{children}</div>
      </div>
    </div>
  );
};

export default PageContainer;
