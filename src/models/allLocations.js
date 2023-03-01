import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

export default function AllLocations(props) {
  const storeData = useSelector((state) => state); // get data from store

  const send = (x) => {
    props.callback([x.name, 3, "locations"]); //father props is now with location data
  };

  return (
    <div>
      <ul>
        {storeData.length != 0 ? ( // if store not empty
          <>
            {storeData[0][1].map(
              (
                x,
                index // create a list of all locations names
              ) => {
                return (
                  <li key={index}>
                    <Link className="highlight" to="" onClick={() => send(x)}>
                      {x.name}
                    </Link>
                  </li>
                );
              }
            )}
          </>
        ) : null}
      </ul>
    </div>
  );
}
