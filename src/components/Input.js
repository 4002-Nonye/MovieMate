import React from "react";

const Input = () => {
  return (
    <>
      <input
        placeholder="Search everything "
        className="outline-none bg-black ml-5 text-left text-gray-500 w-full"
        value={term}
        onChange={onTermChange}
      />
    </>
  );
};

export default Input;
