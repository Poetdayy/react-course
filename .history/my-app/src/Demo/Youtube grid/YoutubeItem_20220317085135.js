import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      <div className={`youtube-item ${props.className}`}>
        <img src={props.image} alt="" className="youtube-background" />
        <div className="youtube-footer">
          <img src={props.avt} alt="" className="youtube-avt" />
          <h3 className="youtube-title font-size">{props.name}</h3>
        </div>
        <div className="youtube-info">
          <h5 className="youtube-author">{props.author}</h5>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
