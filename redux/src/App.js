import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";

import MyListTasks from "./components/MyListTasks";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="AppTitle">
        <h1>Checkpoint Redux</h1>
        <h3>ToDo App</h3>
        <hr />
      </div>
      <MyListTasks />
    </div>
  );
}

export default App;
