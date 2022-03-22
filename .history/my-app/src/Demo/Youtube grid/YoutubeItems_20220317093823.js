import React from "react";

const YoutubeItem = ({data}}) => {
  return (
    <div>
      <div className={`youtube-item ${data.className}`}>
        <img src={data.image} alt="" className="youtube-background" />
        <div className="youtube-footer">
          <img src={data.avt} alt="" className="youtube-avt" />
          <h3 className="youtube-title font-size">{data.name}</h3>
        </div>
        <div className="youtube-info">
          <h5 className="youtube-author">{data.author}</h5>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem;
