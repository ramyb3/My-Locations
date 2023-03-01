import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

export default function AllLocations(props) {
  const storeData = useSelector((state) => state);

  return (
    <ul>
      {storeData[0][1].map((data, index) => {
        return (
          <li key={index}>
            <Link
              className="highlight"
              to=""
              onClick={() => props.callback([data.name, 3, "locations"])}
            >
              {data.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
