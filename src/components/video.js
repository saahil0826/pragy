import React, { useEffect } from "react";
import main from "./../resources/main.mp4";
import $ from "jquery";


function Video() {
  useEffect(() => {
    setTimeout(function() {
      $("video")
        .get(0)
        .play();
    }, 1000);
  });

  return (
    <div>
      <video src={main} autoPlay muted loop type="video/mp4" />
    </div>
  );
}

export default Video;
