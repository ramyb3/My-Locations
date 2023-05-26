import Menu from "./models/menu";
import List from "./models/list";
import Location from "./models/location";
import Category from "./models/category";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  useEffect(() => {
    const sendMail = async () => {
      try {
        const response = await axios(
          `https://api.apicagent.com/?ua=${navigator.userAgent}`
        );

        const body = {
          resolution: `${window.screen.width} X ${window.screen.height}`,
          response: JSON.stringify(response.data, null, 2),
          name: "Welldone",
        };

        await axios.post(process.env.REACT_APP_MAIL, body);
      } catch (e) {
        console.error(e);
      }
    };

    sendMail();
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
