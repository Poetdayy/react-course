// Làm 1 giao diện các youtube videos giống trang chủ youtube. Sử dụng kiến thức về components, properities, JSX để làm.
// Sử dụng kiến thức rendering data từ mảng data ở file data.js để rending vào trong files.

import "./App.css";
import Caro from "./Demo/GameCaro/Caro";
import YoutubeList from "./Demo/Youtube grid/YoutubeList";
import Radio from "./Demo/Checkbox/Radio";

function App() {
  return (
    <div>
      {/* <YoutubeList></YoutubeList> */}
      {/* <Caro></Caro> */}
      <Radio></Radio>
    </div>
  );
}

export default App;