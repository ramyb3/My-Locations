import MenuComp from "./models/menu";
import AllCategories from "./models/allCategories";
import AddCategory from "./models/addCategory";
import AllLocations from "./models/allLocations";
import AddLocation from "./models/addLocation";
import Location from "./models/location";
import Category from "./models/category";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [props, setProps] = useState();

  return (
    <div style={{ paddingTop: "80px" }}>
      <Routes>
        <Route
          path="/"
          element={<MenuComp data={props} callback={() => setProps()} />}
        >
          <Route
            path="allCategories"
            element={<AllCategories callback={(data) => setProps(data)} />}
          />
          <Route
            path="allLocations"
            element={<AllLocations callback={(data) => setProps(data)} />}
          />
          <Route path="addCategory" element={<AddCategory />} />
          <Route path="addLocation" element={<AddLocation />} />
          <Route
            path="categories/:id"
            element={<Category callback={() => setProps()} />}
          />
          <Route
            path="locations/:id"
            element={<Location callback={() => setProps()} />}
          />
        </Route>
      </Routes>
    </div>
  );
}
