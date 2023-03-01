import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Add(props) {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);

  const send = () => {
    const type = props.type ? "categories" : "locations";
    const check = storeData[type].find(
      (obj) =>
        (props.type ? obj : obj.name) ===
        (props.type ? props.data : props.data.name)
    );

    if (check) {
      alert(`This ${props.type ? "category" : "location"} already exists!!`);
    } else if (
      ((props.data.name === "" ||
        props.data.address === "" ||
        props.data.coordinates === "" ||
        props.data.category === "") &&
        !props.type) ||
      (props.type && props.data === "")
    ) {
      alert("You need to fill all form before saving!!");
    } else {
      dispatch({ type: "add", payload: [props.data, props.type] });
    }
  };

  return (
    <div className="flex">
      {props.type ? (
        <Input
          placeholder="category name"
          onChange={(e) => props.setData(e.target.value)}
        />
      ) : (
        <>
          <Input
            placeholder="location name"
            onChange={(e) =>
              props.setData({ ...props.data, name: e.target.value })
            }
          />
          <Input
            placeholder="location address"
            onChange={(e) =>
              props.setData({ ...props.data, address: e.target.value })
            }
          />
          <Input
            placeholder="location coordinates"
            onChange={(e) =>
              props.setData({ ...props.data, coordinates: e.target.value })
            }
          />
          <Input
            placeholder="location category"
            onChange={(e) =>
              props.setData({ ...props.data, category: e.target.value })
            }
          />
        </>
      )}
      <Link to={`/all${props.type ? "Categories" : "Locations"}`}>
        <button onClick={send}>Add</button>
      </Link>
    </div>
  );
}

function Input(props) {
  return (
    <input
      placeholder={`Enter ${props.placeholder}`}
      onChange={props.onChange}
      style={{ fontSize: "20px", height: "30px" }}
    />
  );
}
