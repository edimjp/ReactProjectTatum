import { BrowserRouter, Routes, Route } from "react-router";
import Contacts from "./pages/contact/Contacts";
import HomeBody from "./pages/home/HomeBody";
import Clients from "./pages/clients/Clients";
import NavMenuDropDown from "./components/NavMenuDropDown";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/homebody" element={<HomeBody />} />
        <Route path="/clients" element={<Clients />} />
        <Route index element={<NavMenuDropDown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
