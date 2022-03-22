import "./App.css";
function App() {
  return (
    <div className="youtube-list">
      <YoutubeItem
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
        image="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        name="Không học React"
        author="tôi đi code dạo"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        name="Không học React"
        author="Tôi đi code dạo"
      ></YoutubeItem>
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <img src={props.image} alt="" className="youtube-background" />
      <h3 className="youtube-title">{props.name}</h3>
      <img src={props.avt} alt="" className="youtube avt" />
      <div className="youtube-footer">
        <div className="youtube-info">
          <h5 className="youtube-author">{props.author}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
