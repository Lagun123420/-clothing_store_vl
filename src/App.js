import Home from "./pages/Home/Home";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Underwear from "./pages/Underwear/Underwear";
import SetClothes from "./pages/SetClothes/SetClothes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/underwear" element={<Underwear/>}></Route>
          <Route path="/setclothes" element={<SetClothes/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
