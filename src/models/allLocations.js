import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AllLocations() {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul>
      {storeData.locations.map((data, index) => {
        return (
          <li key={index}>
            <Link
              className="highlight"
              to=""
              onClick={() =>
                dispatch({
                  type: "clickedItem",
                  payload: [data.name, 3, "locations"],
                })
              }
            >
              {data.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
