import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";

export default function Menu(props) {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(0); // flag for navbar

  // only when app starts
  useEffect(() => {
    const categories = ["temp", "avvd"];
    const locations = [
      { name: "zvzx", address: "temp", coordinates: "1", category: "temp" },
      { name: "abc", address: "abc", coordinates: "2", category: "abc" },
    ];

    dispatch({ type: "LOAD", payload: { categories, locations } });
  }, []);

  const send = () => {
    setCheck(0); // default flag
    props.callback();
  };

  return (
    <>
      <div className="navbar">
        {check !== 1 && !props.data ? (
          <Links
            className="title"
            link="/allCategories"
            onClick={() => setCheck(2)}
            text="Categories"
          />
        ) : null}

        {check < 2 && !props.data ? (
          <Links
            className="title"
            link="/allLocations"
            onClick={() => setCheck(1)}
            text="Locations"
          />
        ) : null}

        {check === 2 && !props.data ? ( //when Categories pressed
          <Links
            className="link"
            link="/addCategory"
            text="Create New Category"
          />
        ) : null}

        {check === 1 && !props.data ? ( //when Locations pressed
          <Links
            className="link"
            link="/addLocation"
            text="Create New Location"
          />
        ) : null}

        {props.data && props.data[1] === 3 ? ( // if I clicked a name in a list
          <>
            <b className="title">{props.data[0]}</b>
            <Links
              className="link"
              link={`/${props.data[2]}/${props.data[0]}+view`}
              text="View"
            />
            <Links
              className="link"
              link={`/${props.data[2]}/${props.data[0]}+update`}
              text="Update"
            />
            <Links
              className="link"
              link="/"
              onClick={() => {
                send();
                dispatch({ type: "delete", payload: props.data });
              }}
              text="Delete"
            />
          </>
        ) : null}
      </div>

      <Outlet />

      {check > 0 ? ( // back to menu only when not in main page
        <Links
          style={{ fontSize: "20px" }}
          link="/"
          text="Menu Page"
          onClick={send}
        />
      ) : null}
    </>
  );
}

function Links(props) {
  return (
    <Link
      to={props.link}
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    >
      <b>{props.text}</b>
    </Link>
  );
}
