import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function Edit(props) {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  const params = useParams();
  const [oldData, setOldData] = useState();

  useEffect(() => {
    const names = params.id.split("+");

    if (props.type) {
      setOldData(storeData.categories.find((data) => data === names[0]));
      props.setData(names[0]);
    } else {
      setOldData(storeData.locations.find((data) => data.name === names[0]));
      props.setData(storeData.locations.find((data) => data.name === names[0]));
    }
  }, [params]);

  const send = () => {
    if (
      (props.data === "" && props.type) ||
      ((props.data.name === "" ||
        props.data.address === "" ||
        props.data.coordinates === "" ||
        props.data.category === "") &&
        !props.type)
    ) {
      alert("You need to fill all form before updating!!");
    } else {
      dispatch({ type: "update", payload: [props.data, oldData, props.type] });
      dispatch({ type: "clickedItem", payload: [] });
    }
  };

  return (
    <div className="flex">
      {params.id.endsWith("view") ? (
        props.type ? (
          <Span text="Category Name" value={props.data} />
        ) : (
          <>
            <Span text="Location Name" value={props.data.name} />
            <Span text="Location Address" value={props.data.address} />
            <Span text="Location Coordinates" value={props.data.coordinates} />
            <Span text="Location Category" value={props.data.category} />
          </>
        )
      ) : (
        <>
          {props.type ? (
            <Input
              value={props.data}
              onChange={(e) => props.setData(e.target.value)}
              text="Category Name"
            />
          ) : (
            <>
              <Input
                value={props.data.name}
                onChange={(e) =>
                  props.setData({ ...props.data, name: e.target.value })
                }
                text="Location Name"
              />
              <Input
                value={props.data.address}
                onChange={(e) =>
                  props.setData({
                    ...props.data,
                    address: e.target.value,
                  })
                }
                text="Location Address"
              />
              <Input
                value={props.data.coordinates}
                onChange={(e) =>
                  props.setData({
                    ...props.data,
                    coordinates: e.target.value,
                  })
                }
                text="Location Coordinates"
              />
              <Input
                value={props.data.category}
                onChange={(e) =>
                  props.setData({
                    ...props.data,
                    category: e.target.value,
                  })
                }
                text="Location Category"
              />
            </>
          )}

          <Link to={`/all${props.type ? "Categories" : "Locations"}`}>
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
      <b>{props.text}: </b>
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
        <b>{props.text}:</b>
      </u>{" "}
      {props.value}
    </span>
  );
}
