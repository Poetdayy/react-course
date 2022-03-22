import React from "react";
import { data } from "../../data";
import YoutubeItem from "./YoutubeItems";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {data.map((value, index) => (
        <YoutubeItem
          key={value.key}
          image={
            value.image ||
            "https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png"
          }
          name={value.name}
          author={value.author}
          avt={value.avt}
          className="abc"
        ></YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
