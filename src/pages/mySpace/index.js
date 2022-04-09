import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSpaceById,
  deleteStory,
  createStory,
} from "../../store/mySpaceState/actions";
import { spaceById, spacesLoading } from "../../store/mySpaceState/selectors";
import { selectUser } from "../../store/user/selectors";
import Popup from "reactjs-popup";
import "./styles.css";
import { Button } from "react-bootstrap";
//fix the page to show the correct state based on delete/post
// image has to be image instead of <p>

const MySpace = () => {
  const dispatch = useDispatch();
  const spacesById = useSelector(spaceById);
  const loading = useSelector(spacesLoading);
  const user = useSelector(selectUser);

  const [form, setForm] = useState({
    name: "",
    content: "",
    imageUrl: "",
    spaceId: null,
  });

  const handleSubmit = (e) => {
    form.spaceId = spacesById.id;

    dispatch(
      createStory({
        name: form.name,
        content: form.content,
        imageUrl: form.imageUrl,
        spaceId: form.spaceId,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchSpaceById());
  }, [dispatch]);

  return (
    <div className="spaces_stories_container">
      <h1>My Space Details</h1>
      {spacesById && !loading ? (
        <div
          className="space_story_container"
          style={{
            color: spacesById.color,
            backgroundColor: spacesById.backgroundColor,
          }}
        >
          <h1>{spacesById.title}</h1>
          <h1>{spacesById.description}</h1>
          {spacesById.stories.map((story) => (
            <div key={story.id}>
              <p>{story.name}</p>
              <p>{story.content}</p>
              <img src={story.imageUrl} alt="img" />
              <button onClick={() => dispatch(deleteStory(story.id))}>
                Delete Story
              </button>
            </div>
          ))}
          <Popup trigger={<button>Post a cool story bro!</button>}>
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  size="30"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <br />
              <label>
                <textarea
                  className="text-area"
                  name="story"
                  placeholder="Put your wonderfull story here!"
                  rows="5"
                  cols="33"
                  onChange={(e) =>
                    setForm({ ...form, content: e.target.value })
                  }
                />
              </label>
              <br />
              <label>
                <input
                  type="url"
                  name="imageUrl"
                  placeholder="https://example.com"
                  pattern="https://.*"
                  size="30"
                  onChange={(e) =>
                    setForm({ ...form, imageUrl: e.target.value })
                  }
                />
              </label>
              <br />
              <Button id="submit-btn" type="submit" style={{ margin: "10px" }}>
                Submit
              </Button>
            </form>
          </Popup>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default MySpace;
