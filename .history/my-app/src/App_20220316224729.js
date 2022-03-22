// Làm 1 giao diện các youtube videos giống trang chủ youtube. Sử dụng kiến thức về components, properities, JSX để làm.
// Sử dụng kiến thức rendering data từ mảng data ở file data.js để rending vào trong files.

import "./App.css";
import { data } from "./data";
function App() {
  return (
    <div className="youtube-list">
      {
        data.map((value, index) => (
          <
        image={value.image}
        name={value.name}
        author={value.author}
        avt={value.avt}
      ></YoutubeItem>
        ))
        /* <YoutubeItem
        image="https://i.ytimg.com/vi/mv7BqeuR40s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBik-RfJI38lzRrHvc0xq_Jr59AUQ"
        name="Thói quen buổi sáng năng suất của mình | My Productive & Healthy Morning Routine | KIRA"
        author="The Hanoi Chamomile"
        avt="https://yt3.ggpht.com/1vpLEwxsewUqHZ7SQiA_Ufijf7HY8G5u4QbPwY-avOsCKGTEDUoGXABc-DyBFWX4Srar7VurHOU=s68-c-k-c0x00ffffff-no-rj"
      ></YoutubeItem>
      <YoutubeItem
        image="https://i.ytimg.com/vi/hP7jPqbDkvw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfzd4naF5earQNzov3e_cRhYtgFA"
        name="Nơi Làm Việc Ngành AI Tại Úc và Dạy Học Lập Trình Nâng Cao Tại Đại Học Swinburne"
        author="Dũng lại lập trình"
        avt="https://yt3.ggpht.com/ytc/AKedOLTkpnp9YnWX_hAa2YH9TQwUVKByrKhO-XsjiVkW=s68-c-k-c0x00ffffff-no-rj"
      ></YoutubeItem>
      <YoutubeItem
        image="https://i.ytimg.com/an_webp/SuuDADE93is/mqdefault_6s.webp?du=3000&sqp=COe9x5EG&rs=AOn4CLBidi6KifdXy_WU_VZhoJpv1xXo_Q"
        name="Sự khác biệt giữa Lập Trình Viên trong phim và ngoài đời"
        author="Tôi đi code dạo"
        avt="https://yt3.ggpht.com/ytc/AKedOLT8aBE07aouSquTwNV2Nz24U6lg94OgTVVk5HgOkw=s68-c-k-c0x00ffffff-no-rj"
      ></YoutubeItem>
      <YoutubeItem
        image="https://i.ytimg.com/an_webp/I0qfeENfRpw/mqdefault_6s.webp?du=3000&sqp=CKDnx5EG&rs=AOn4CLD0-EcET1xVlGE2uM9oPxJOFHkb0Q"
        name="Nên làm việc cho các công ty Product hay Outsourcing?"
        author="Tôi đi code dạo"
        avt="https://yt3.ggpht.com/ytc/AKedOLT8aBE07aouSquTwNV2Nz24U6lg94OgTVVk5HgOkw=s68-c-k-c0x00ffffff-no-rj"
      ></YoutubeItem> */
      }
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <img src={props.image} alt="" className="youtube-background" />
      <div className="youtube-footer">
        <img src={props.avt} alt="" className="youtube-avt" />
        <h3 className="youtube-title font-size">{props.name}</h3>
      </div>
      <div className="youtube-info">
        <h5 className="youtube-author">{props.author}</h5>
      </div>
    </div>
  );
}

export default App;
