import React from "react";

const MyButton = ({ children, onClick }) => {
  return (
    <button
      className=" bg-blue-500 text-white rounded-md px-5 py-3 hover:bg-blue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
