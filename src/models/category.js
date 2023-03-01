import Edit from "./edit";
import { useState } from "react";

export default function Category() {
  const [category, setCategory] = useState("");

  return <Edit type={true} setData={setCategory} data={category} />;
}
