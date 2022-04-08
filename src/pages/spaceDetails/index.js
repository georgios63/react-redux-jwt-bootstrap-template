import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "../../store/storiesState/actions";
import { useParams } from "react-router-dom";
import { allStories, storiesLoading } from "../../store/storiesState/selectors";
import "./styles.css";

const SpaceDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useSelector(storiesLoading);
  const stories = useSelector(allStories);

  useEffect(() => {
    dispatch(fetchStories(id));
  }, [dispatch, id]);
  return (
    <div className="storiesContainer">
      <h1>Space Details</h1>
      {!loading
        ? stories.map((story) => (
            <div
              className="stories"
              key={story.id}
              style={{
                color: story.space.color,
                backgroundColor: story.space.backgroundColor,
              }}
            >
              <p>{story.name}</p>
              <p>{story.content}</p>
              <img src={story.imageUrl} alt="img" />
            </div>
          ))
        : "loading"}
    </div>
  );
};

export default SpaceDetails;
