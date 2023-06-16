import React, { useEffect, useState } from "react";
import { getAllPets } from "../api/pets";

const Pet = () => {
  const [pets, setPets] = useState([]);

  const callApi = async () => {
    const res = await getAllPets();
    setPets(res.data);
  };
  useEffect(() => {
    callApi();
  }, []);
  const petList = () => pets.map((pet) => <h1>{pet.name}</h1>);

  return <div>{petList}</div>;
};

export default Pet;
