import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AddLocation() {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  const [location, setLocation] = useState({
    name: "",
    address: "",
    coordinates: "",
    category: "",
  });

  const send = () => {
    const check = storeData.locations.find(
      (data) => data.name === location.name
    );

    if (check) {
      alert("This location already exists!!");
    } else if (
      location.name === "" ||
      location.address === "" ||
      location.coordinates === "" ||
      location.category === ""
    ) {
      alert("You need to fill all form before saving!!");
    } else {
      dispatch({ type: "add", payload: [location, false] });
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
      <Input
        placeholder="name"
        onChange={(e) => setLocation({ ...location, name: e.target.value })}
      />
      <Input
        placeholder="address"
        onChange={(e) => setLocation({ ...location, address: e.target.value })}
      />
      <Input
        placeholder="coordinates"
        onChange={(e) =>
          setLocation({ ...location, coordinates: e.target.value })
        }
      />
      <Input
        placeholder="category"
        onChange={(e) => setLocation({ ...location, category: e.target.value })}
      />
      <Link to="/allLocations">
        <button onClick={send}>Add</button>
      </Link>
    </div>
  );
}

function Input(props) {
  return (
    <input
      placeholder={`Enter location ${props.placeholder}`}
      onChange={props.onChange}
      style={{ fontSize: "20px", height: "30px" }}
    />
  );
}
