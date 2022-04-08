import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "../../store/storiesState/actions";
import { useParams } from "react-router-dom";
import { allStories, storiesLoading } from "../../store/storiesState/selectors";
import { allSpaces } from "../../store/spaceState/selectors";
import "./styles.css";

const MySpace = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const loading = useSelector(storiesLoading);
  const stories = useSelector(allStories);
  const spaces = useSelector(allSpaces);

  console.log(stories);
  useEffect(() => {
    dispatch(fetchStories(id));
  }, [dispatch, id]);

  return (
    <div className="spaces_stories_container">
      <h1>My Space Details</h1>
      {/* {!loading ? spaces.map(()), "loading"} */}
    </div>
  );
};

export default MySpace;
