import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }}
    >
      <img src="/loading.gif" width={100} alt="" />
    </div>
  );
};

export default Loading;
