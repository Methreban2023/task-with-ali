import instance from "./index";

const getAllPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getOnePet = async (id) => {
  const res = await instance.get(`/pets/${id}`, id);
  return res.data;
};

const addPet = async (petInfo) => {
  const res = await instance.post("/pets", petInfo);
  console.log(res.data);
};

const updatePet = async (id) => {
  const res = await instance.put(`/pets/${id}`, id);
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`/pets/${id}`, id);
  return res.data;
};

export { getAllPets, deletePet, updatePet, addPet, getOnePet };
