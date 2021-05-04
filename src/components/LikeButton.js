import React from "react";
import { useState } from "react";

export default function LikeButton() {
  const [likeState, setLikeState] = useState(false);

  return (
    <div>
      <button onClick={() => setLikeState(!likeState)}>
        {likeState ? "You've liked this. Click to unlike" : "Like this"}
      </button>
    </div>
  );
}
