import { fetchSpaces } from "../../store/spaceState/actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSpaces, spaceLoading } from "../../store/spaceState/selectors";
import { Link } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const loading = useSelector(spaceLoading);
  const spaces = useSelector(allSpaces);

  // console.log(spaces);
  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);

  return (
    <div className="spacesContainer">
      <h1>Spaces</h1>
      {!loading
        ? spaces.map((space) => (
            <div
              className="spaces"
              key={space.id}
              style={{
                color: space.color,
                backgroundColor: space.backgroundColor,
              }}
            >
              <p>{space.title}</p>
              <p>{space.description}</p>
              <Link to={`/details/${space.id}`}>
                <button>Visit Space</button>
              </Link>
            </div>
          ))
        : "loading"}
    </div>
  );
};

export default HomePage;
