import Home from "./pages/Home/Home";
import {Routes, Route, HashRouter} from 'react-router-dom';
import Underwear from "./pages/Underwear/Underwear";
import SetClothes from "./pages/SetClothes/SetClothes";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/underwear" element={<Underwear/>}></Route>
          <Route path="/setclothes" element={<SetClothes/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
