import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

export default function AllCategories(props) {
  const storeData = useSelector((state) => state);

  return (
    <ul>
      {storeData[0][0].map((data, index) => {
        return (
          <li key={index}>
            <Link
              className="highlight"
              to=""
              onClick={() => props.callback([data, 3, "categories"])}
            >
              {data}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
