import Menu from "./models/menu";
import AllCategories from "./models/allCategories";
import AddCategory from "./models/addCategory";
import AllLocations from "./models/allLocations";
import AddLocation from "./models/addLocation";
import Location from "./models/location";
import Category from "./models/category";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="allCategories" element={<AllCategories />} />
          <Route path="allLocations" element={<AllLocations />} />
          <Route path="addCategory" element={<AddCategory />} />
          <Route path="addLocation" element={<AddLocation />} />
          <Route path="categories/:id" element={<Category />} />
          <Route path="locations/:id" element={<Location />} />
        </Route>
      </Routes>
    </div>
  );
}
