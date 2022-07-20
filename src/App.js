import Home from "./pages/Home/Home";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Underwear from "./pages/Underwear/Underwear";
import SetClothes from "./pages/SetClothes/SetClothes";
import Footer from "./components/UI/Footer/Footer";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/underwear" element={<Underwear/>}></Route>
          <Route path="/setclothes" element={<SetClothes/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
