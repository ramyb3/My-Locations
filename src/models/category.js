import Add from "./add";
import Edit from "./edit";
import { useState } from "react";

export default function Category(props) {
  const [category, setCategory] = useState("");

  return props.edit ? (
    <Edit type={true} setData={setCategory} data={category} />
  ) : (
    <Add type={true} data={category} setData={setCategory} />
  );
}
