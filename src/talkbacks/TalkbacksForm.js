import React, { useContext, useState } from "react";
import { GeneralContext } from "../App";

export default function TalkbacksForm({ articleId, added, parentId }) {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const { snackbar, setIsLoader } = useContext(GeneralContext);

  const addComment = (ev) => {
    ev.preventDefault();
    setIsLoader(true);

    fetch(
      `https://api.shipap.co.il/articles/${articleId}/talkbacks?token=d2960d76-3431-11ee-b3e9-14dda9d4a5f0`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          ...formData,
          articleId,
          parent: parentId || 0,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        data.children = [];
        added(data);
        setIsLoader(false);
        snackbar("Comment added successfully");

        setFormData({
          name: "",
          comment: "",
        });
      });
  };

  const handleInput = (ev) => {
    const { name, value } = ev.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="TalkbacksForm block">
      <form onSubmit={addComment}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInput}
          required
        />
        <textarea
          name="comment"
          placeholder="Comment Content"
          cols="30"
          rows="10"
          required
          value={formData.comment}
          onChange={handleInput}
        ></textarea>
        <p>
          Please write in a respectful manner that pertains to the topic. Do not
          use offensive language.
        </p>
        <button>Submit Comment</button>
      </form>
    </div>
  );
}
