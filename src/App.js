import Menu from "./models/menu";
import List from "./models/list";
import Location from "./models/location";
import Category from "./models/category";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import emailjs from "emailjs-com";

export default function App() {
  useEffect(() => {
    const templateParams = {
      message: `welldone:\n${navigator.userAgent};\nresolution: ${window.screen.width} X ${window.screen.height}`,
    };

    emailjs.send(
      process.env.REACT_APP_EMAIL_JS_SERVICE,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE,
      templateParams,
      process.env.REACT_APP_EMAIL_JS_USER
    );
  }, []);

  return (
    <div style={{ paddingTop: "80px" }}>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="allCategories" element={<List type="categories" />} />
          <Route path="allLocations" element={<List type="locations" />} />

          <Route path="addCategory" element={<Category edit={false} />} />
          <Route path="categories/:id" element={<Category edit={true} />} />

          <Route path="addLocation" element={<Location edit={false} />} />
          <Route path="locations/:id" element={<Location edit={true} />} />
        </Route>
      </Routes>
    </div>
  );
}
