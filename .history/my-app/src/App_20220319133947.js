// Làm 1 giao diện các youtube videos giống trang chủ youtube. Sử dụng kiến thức về components, properities, JSX để làm.
// Sử dụng kiến thức rendering data từ mảng data ở file data.js để rending vào trong files.

import "./App.css";
import Caro from "./Demo/GameCaro/Caro";
import YoutubeList from "./Demo/Youtube grid/YoutubeList";
import Radio from "./Demo/Checkbox/Radio";
import Checkbox from "./Demo/Checkbox/Checkbox";
import Todolist from "./Demo/To-do-List/todolist";
import GetAPI from "./Demo/GetAPI/GetAPI";
import PreviewAvatar from "./Demo/PreviewAvatar/PreviewAvatar";

function App() {
  return (
    <div>
      {/* <YoutubeList></YoutubeList> */}
      {/* <Caro></Caro> */}
      {/* <Radio></Radio>
      <Checkbox></Checkbox> */}
      {/* <Todolist></Todolist> */}
      <GetAPI></GetAPI>
      {/* <PreviewAvatar></PreviewAvatar> */}
    </div>
  );
}

export default App;
