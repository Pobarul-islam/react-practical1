
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import FreindDetail from "./Components/freindDetail/FreindDetail";
import Friend from "./Components/Friend/Friend";
import Friends from "./Components/Friends/Friends";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="*" element={<NotFound></NotFound>}></Route>

        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/friend/:friendId" element={<FreindDetail></FreindDetail>}>
          FriendDetail
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
