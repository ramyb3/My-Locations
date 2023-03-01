import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AllCategories() {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul>
      {storeData.categories.map((data, index) => {
        return (
          <li key={index}>
            <Link
              className="highlight"
              to=""
              onClick={() =>
                dispatch({
                  type: "clickedItem",
                  payload: [data, 3, "categories"],
                })
              }
            >
              {data}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
