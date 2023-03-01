import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Menu() {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(0);

  // only when app starts
  useEffect(() => {
    const item = [];
    const categories = ["temp", "avvd"];
    const locations = [
      { name: "zvzx", address: "temp", coordinates: "1", category: "temp" },
      { name: "abc", address: "abc", coordinates: "2", category: "abc" },
    ];

    dispatch({ type: "LOAD", payload: { categories, locations, item } });
  }, []);

  if (!storeData.item) {
    return null;
  }

  return (
    <>
      <div className="navbar">
        {storeData.item.length === 0 ? (
          <>
            {check !== 1 ? (
              <Links
                className="title"
                link="/allCategories"
                onClick={() => setCheck(2)}
                text="Categories"
              />
            ) : null}

            {check < 2 ? (
              <Links
                className="title"
                link="/allLocations"
                onClick={() => setCheck(1)}
                text="Locations"
              />
            ) : null}

            {check === 2 ? (
              <Links
                className="link"
                link="/addCategory"
                text="Create New Category"
              />
            ) : null}

            {check === 1 ? (
              <Links
                className="link"
                link="/addLocation"
                text="Create New Location"
              />
            ) : null}
          </>
        ) : (
          <>
            <b className="title">{storeData.item[0]}</b>
            <Links
              className="link"
              link={`/${storeData.item[2]}/${storeData.item[0]}+view`}
              text="View"
            />
            <Links
              className="link"
              link={`/${storeData.item[2]}/${storeData.item[0]}+update`}
              text="Update"
            />
            <Links
              className="link"
              link="/"
              onClick={() => {
                setCheck(0);
                dispatch({ type: "delete", payload: storeData.item });
              }}
              text="Delete"
            />
          </>
        )}
      </div>

      <Outlet />

      {check > 0 ? ( // back to menu only when not in main page
        <Links
          style={{ fontSize: "20px" }}
          link="/"
          text="Menu Page"
          onClick={() => {
            setCheck(0);
            dispatch({ type: "clickedItem", payload: [] });
          }}
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
