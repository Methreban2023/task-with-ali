import React from "react";

const PetItem = ({ petInfo }) => {
  return (
    <div>
      <div>{petInfo.name}</div>
    </div>
  );
};

export default PetItem;
