CÁC CÂU HỎI CẦN GIẢI ĐÁP PHẦN REACT
- Câu 1: Lỗi Too many re-renders. React limits the number of renders to prevent an infinite loop.
+ Lỗi này thì do tạo 1 button chứa onClick như sau: 
const [toogle,setToogle] = useState(false)
<button onClick = {setToogle(true)}> Click on me </button> 
{ setToogle && <Component></Component>
Lỗi do set onClick = {setToogle(true)} vì khi truyền này
setToogle sẽ re-render ngay lập tức, nên react cảnh báo trước nếu re-render quá nhiều lần sẽ tạo vòng lặp vô hạn.
Cách sửa: đặt callback vào hàm onClick = {() => setTooge(true)} thì không bị. Tuy nhiên em không hiểu tại sao
đặt callback vào lại không bị. Vì việc re-render em nghĩ chỉ xảy ra khi onClick được thực thi. Em nghĩ cái này
liên quan việc bất đồng bộ trong Javascript.
- Câu 2: dùng Router bị load trang liên tục, không hiện nội dung lên trang. Không biết do mạng em yếu hay bị lỗi gì.