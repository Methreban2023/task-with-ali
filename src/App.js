import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import AddPet from "./components/AddPet";
import Pet from "./components/Pet";

function App() {
  return (
    <div className="App">
      <Link to="/pet">
        <button>Pets</button>
      </Link>
      <Link to="/addpet">
        <button>Add Pets</button>
      </Link>

      <Routes>
        <Route path="/pet" element={<Pet />}></Route>
        <Route path="/addpet" element={<AddPet />}></Route>
      </Routes>
    </div>
  );
}

export default App;
