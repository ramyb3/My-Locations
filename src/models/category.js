import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

export default function Category(props) {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();
  const params = useParams();
  const [name, setName] = useState("");
  const [before, setBefore] = useState("");

  useEffect(() => {
    const temp = params.id.split("+"); // get category name

    setName(temp[0]);
    setBefore(temp[0]);
  }, [params]);

  const send = () => {
    const check = storeData[0][0].find((data) => data === name);

    if (check) {
      alert("This category already exists!!");
    } else if (name === "") {
      alert("You need to enter a name before updating!!");
    } else {
      dispatch({ type: "update", payload: [name, before, "categories"] });
    }

    props.callback();
  };

  return (
    <div style={{ textAlign: "center", fontSize: "20px", paddingTop: "15px" }}>
      {params.id.endsWith("view") ? (
        <>
          <u>
            <b>Category Name:</b>
          </u>{" "}
          {name}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div>
            <b>Category Name: </b>
            <input
              value={name}
              type="text"
              style={{ fontSize: "20px", height: "30px" }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <Link to="/allCategories">
            <button onClick={send}>Update</button>
          </Link>
        </div>
      )}
    </div>
  );
}
