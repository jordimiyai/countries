import "./App.css";
import { Route, Routes } from "react-router";

import Countries from "./components/countries/countries";
import Detail from "./components/detail/detail";
import NewActivity from "./components/newAtivity/newActivity";
import Landing from "./components/landing/landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/home" exact element={<Countries />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/add" element={<NewActivity />} />
      </Routes>
    </div>
  );
}

export default App;
