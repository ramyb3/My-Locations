import Add from "./add";
import Edit from "./edit";
import { useState } from "react";

export default function Location(props) {
  const [location, setLocation] = useState({
    name: "",
    address: "",
    coordinates: "",
    category: "",
  });

  return props.edit ? (
    <Edit type={false} setData={setLocation} data={location} />
  ) : (
    <Add type={false} data={location} setData={setLocation} />
  );
}
