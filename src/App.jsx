import "./App.css";
import Nav from "./components/Nav";
import Subject from "./components/Subject";
import Profile from "./components/Profile";
import Pallete from "./components/Pallete";
import Legend from "./components/Legend";
import Content from "./components/Content";
import StatusButton from "./components/StatusButton";

function App() {
  return (
    <div className="App">
      <Nav />
      <Subject />
      <Profile />
      <Pallete />
      <Legend />
      <Content />
      <StatusButton />
    </div>
  );
}

export default App;
