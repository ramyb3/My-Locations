import Add from "./add";
import { useState } from "react";

export default function AddCategory() {
  const [category, setCategory] = useState("");

  return <Add type={true} data={category} setData={setCategory} />;
}
