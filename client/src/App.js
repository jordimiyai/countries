import "./App.css";
import { Route, Routes } from "react-router";
import Detail from "./components/detail/detail";
import NewActivity from "./components/newAtivity/newActivity";
import Landing from "./components/landing/landing";
import Home from "./components/home/home";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/add" element={<NewActivity />} />
      </Routes>
    </div>
  );
}

export default App;
