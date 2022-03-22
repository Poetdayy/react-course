import React from "react";
import { data } from "../../data";
import YoutubeItem from "./YoutubeItems";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {data.map(({ data }) => (
        <YoutubeItem
          key={data.key}
          image={
            data.image ||
            "https://agentestudio.com/uploads/post/image/69/main_how_to_design_404_page.png"
          }
          name={data.name}
          author={data.author}
          avt={data.avt}
          className="abc"
        ></YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
