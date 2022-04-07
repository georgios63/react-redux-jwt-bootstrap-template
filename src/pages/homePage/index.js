import { fetchSpaces } from "../../store/spaceState/actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSpaces, spaceLoading } from "../../store/spaceState/selectors";

const HomePage = () => {
  const dispatch = useDispatch();

  const loading = useSelector(spaceLoading);
  const spaces = useSelector(allSpaces);

  console.log(spaces);
  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);

  return (
    <div>
      <h1>Cool Story Bro</h1>
      {!loading
        ? spaces.map((space) => (
            <div
              key={space.id}
              style={{
                color: space.color,
                backgroundColor: space.backgroundColor,
              }}
            >
              <p>{space.title}</p>
              <p>{space.description}</p>
              <button>Visit Space</button>
            </div>
          ))
        : "loading"}
    </div>
  );
};

export default HomePage;
