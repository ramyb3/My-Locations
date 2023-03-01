import Edit from "./edit";
import { useState } from "react";

export default function Location() {
  const [location, setLocation] = useState({
    name: "",
    address: "",
    coordinates: "",
    category: "",
  });

  return <Edit type={false} setData={setLocation} data={location} />;
}
