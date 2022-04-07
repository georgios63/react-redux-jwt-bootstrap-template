import { fetchSpaces } from "../../store/spaceState/actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSpaces, spaceLoading } from "../../store/spaceState/selectors";
import { fetchStories } from "../../store/storiesState/actions";
import { useParams } from "react-router-dom";

const SpaceDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useSelector(spaceLoading);
  const spaces = useSelector(allSpaces);

  useEffect(() => {
    dispatch(fetchStories(id));
  }, [dispatch, id]);
  return <div></div>;
};

export default SpaceDetails;
