import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSpaceById,
  deleteStory,
  createStory,
  updateSpace,
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

  const [editedSpace, setEditedSpace] = useState({
    title: "",
    description: "",
    backgroundColor: "",
    color: "",
    id: null,
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

  const editSpace = (e) => {
    editedSpace.id = spacesById.userId;

    console.log(editedSpace);
    dispatch(
      updateSpace({
        title: editedSpace.title,
        description: editedSpace.description,
        backgroundColor: editedSpace.backgroundColor,
        color: editedSpace.color,
        id: editedSpace.id,
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
              <input
                type="text"
                name="name"
                placeholder="Your name"
                size="30"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <br />
              <textarea
                className="text-area"
                name="story"
                placeholder="Put your wonderfull story here!"
                rows="5"
                cols="33"
                onChange={(e) => setForm({ ...form, content: e.target.value })}
              />
              <br />
              <input
                type="url"
                name="imageUrl"
                placeholder="https://example.com"
                pattern="https://.*"
                size="30"
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              />
              <br />
              <Button id="submit-btn" type="submit" style={{ margin: "10px" }}>
                Submit
              </Button>
            </form>
          </Popup>

          <Popup trigger={<button>Edit my space</button>}>
            <form className="edit-space-form" onSubmit={editSpace}>
              <input
                type="text"
                name="title"
                placeholder="Your title"
                size="30"
                onChange={(e) =>
                  setEditedSpace({ ...editedSpace, title: e.target.value })
                }
              />
              <br />
              <input
                type="text"
                name="description"
                placeholder="Your description"
                size="30"
                onChange={(e) =>
                  setEditedSpace({
                    ...editedSpace,
                    description: e.target.value,
                  })
                }
              />
              <br />
              <input
                type="text"
                name="backgroundColor"
                placeholder="Your background color"
                size="30"
                onChange={(e) =>
                  setEditedSpace({
                    ...editedSpace,
                    backgroundColor: e.target.value,
                  })
                }
              />
              <br />
              <input
                type="text"
                name="color"
                placeholder="Your color"
                size="30"
                onChange={(e) =>
                  setEditedSpace({
                    ...editedSpace,
                    color: e.target.value,
                  })
                }
              />
              <br />
              <Button id="submit-btn2" type="submit" style={{ margin: "10px" }}>
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
