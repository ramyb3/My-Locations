import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function List(props) {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul>
      {storeData[props.type].map((data, index) => {
        const obj = props.type === "locations" ? data.name : data;

        return (
          <li key={index}>
            <Link
              className="highlight"
              to=""
              onClick={() =>
                dispatch({ type: "clickedItem", payload: [obj, 3, props.type] })
              }
            >
              {obj}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
