import "./App.css";
function App() {
  return (
    <div className="App">
      {" "}
      <header className="App-header">
        {" "}
        <h1>欢迎来到我的后台管理系统</h1>
        <p>这是我学习React的第一个项目！</p>{" "}
        <p>当前时间：{new Date().toLocaleString()}</p>{" "}
      </header>{" "}
    </div>
  );
}
export default App;
