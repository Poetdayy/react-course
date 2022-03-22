import "./App.css";
function App() {
  return (
    <div className="youtube-list">
      <YoutubeItem
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        name="Học React"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        name="Học React"
        author="Dũng lại lập trình"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        name="Không học React"
        author="tôi đi code dạo"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        name="Không học React"
        author="tôi đi code dạo"
      ></YoutubeItem>
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <img src={props.image} alt="" className="youtube-background" />
      <h3 className="youtube-title">{props.name}</h3>
      <div className="youtube-footer">
        <img src="" alt="" className="youtube avt" />
        <div className="youtube-info">
          <h5 className="youtube-author">{props.author}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
