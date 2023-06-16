import React, { useEffect, useState } from "react";
import { getAllPets } from "../api/pets";
import PetItem from "./PetItem";
const Pet = () => {
  const [pets, setPets] = useState([]);

  const callApi = async () => {
    const res = await getAllPets();
    setPets(res.data);
  };
  useEffect(() => {
    callApi();
  }, []);
  const petList = pets.map((pet) => <PetItem pet={pet} key={pet.id} />);

  return <div>{petList}</div>;
};

export default Pet;
