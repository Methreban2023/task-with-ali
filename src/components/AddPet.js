import React, { useState } from "react";

const AddPet = () => {
  const [petInfo, setPetInfo] = useState({});
  let handleChange = (e) => {
    setPetInfo(...petInfo, ([e.target.name] = e.target.value));
    console.log(petInfo);
  };
  const handleSubmit = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="pet name" name="name" onChange={handleChange} />
        <input placeholder="pet type" name="type" onChange={handleChange} />
        <input placeholder="pet image" name="image" onChange={handleChange} />
        <input
          placeholder="pet adopted"
          name="adopted"
          onChange={handleChange}
        />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default AddPet;
