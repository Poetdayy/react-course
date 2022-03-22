import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    // <div className="feature">
    //   <img src="" alt="" className="feature-img" />
    //   <h3 className="feature-title">Title</h3>
    //   <p className="feature-dispostion">
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
    //     necessitatibus cupiditate ipsa temporibus vitae ullam nesciunt iusto
    //     maxime? Doloribus architecto nemo similique voluptatum soluta nam nulla
    //     vero amet, numquam odio.
    //   </p>
    // </div>
    <div>
      <Feature
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        name="Học React"
      ></Feature>
      <Feature
        image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        name="Học React"
      ></Feature>
      <Feature
        image="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        name="Không học React"
      ></Feature>
    </div>
  );
}

function Feature(props) {
  return (
    <div className="youtube-item">
      <img src={props.image} alt="" className="youtube-background" />
      <h3 className="youtube-title">{props.name}</h3>
      <div className="youtube-footer">
        <img src="" alt="" className="youtube avt" />
        <div className="youtube-info">
          <h5 className="youtube-author">Dũng lại lập trình</h5>
        </div>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
