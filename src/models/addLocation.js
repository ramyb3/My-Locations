import Add from "./add";
import { useState } from "react";

export default function AddLocation() {
  const [location, setLocation] = useState({
    name: "",
    address: "",
    coordinates: "",
    category: "",
  });

  return <Add type={false} data={location} setData={setLocation} />;
}
