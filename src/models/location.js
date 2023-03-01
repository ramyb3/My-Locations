import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

export default function Location(props) {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();
  const params = useParams();
  const [location, setLocation] = useState({
    name: "",
    address: "",
    coordinates: "",
    category: "",
  });
  const [before, setBefore] = useState({
    name: "",
    address: "",
    coordinates: "",
    category: "",
  });

  useEffect(() => {
    const names = params.id.split("+"); // get location name

    setLocation(storeData.locations.find((data) => data.name === names[0]));
    setBefore(storeData.locations.find((data) => data.name === names[0]));
  }, [params]);

  const send = () => {
    if (
      location.name === before.name &&
      location.address === before.address &&
      location.coordinates === before.coordinates &&
      location.category === before.category
    ) {
      alert("This location already exists!!");
    } else if (
      location.name === "" ||
      location.address === "" ||
      location.coordinates === "" ||
      location.category === ""
    ) {
      alert("You need to fill all form before updating!!");
    } else {
      dispatch({ type: "update", payload: [location, before, false] });
    }

    props.callback();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        alignItems: "center",
        fontSize: "20px",
        paddingTop: "15px",
      }}
    >
      {params.id.endsWith("view") ? (
        <>
          <Span text="Name" value={location.name} />
          <Span text="Address" value={location.address} />
          <Span text="Coordinates" value={location.coordinates} />
          <Span text="Category" value={location.category} />
        </>
      ) : (
        <>
          <Input
            value={location.name}
            onChange={(e) => setLocation({ ...location, name: e.target.value })}
            text="Name"
          />
          <Input
            value={location.address}
            onChange={(e) =>
              setLocation({ ...location, address: e.target.value })
            }
            text="Address"
          />
          <Input
            value={location.coordinates}
            onChange={(e) =>
              setLocation({ ...location, coordinates: e.target.value })
            }
            text="Coordinates"
          />
          <Input
            value={location.category}
            onChange={(e) =>
              setLocation({ ...location, category: e.target.value })
            }
            text="Category"
          />
          <Link to="/allLocations">
            <button onClick={send}>Update</button>
          </Link>
        </>
      )}
    </div>
  );
}

function Input(props) {
  return (
    <div>
      <b>Location {props.text}: </b>
      <input
        value={props.value}
        onChange={props.onChange}
        style={{ fontSize: "20px", height: "30px" }}
      />
    </div>
  );
}

function Span(props) {
  return (
    <span>
      <u>
        <b>Location {props.text}:</b>
      </u>{" "}
      {props.value}
    </span>
  );
}
