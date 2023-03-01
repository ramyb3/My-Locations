import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AddCategory() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  const [category, setCategory] = useState("");

  const send = () => {
    const check = storeData.categories.find((data) => data === category); // check other categories with same name

    if (check) {
      alert("This category already exists!!");
    } else if (category === "") {
      alert("You need to enter a name before saving!!");
    } else {
      dispatch({ type: "add", payload: [category, true] });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        paddingTop: "15px",
      }}
    >
      <input
        placeholder="Enter category name"
        type="text"
        style={{ fontSize: "20px", height: "30px" }}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Link to="/allCategories">
        <button onClick={send}>Add</button>
      </Link>
    </div>
  );
}
