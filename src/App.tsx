import { BrowserRouter, Routes, Route } from "react-router";
import Client from "./pages/Client";
import Contacts from "./pages/contact/Contacts";
import HomeBody from "./pages/home/HomeBody";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/client" element={<Client />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/homebody" element={<HomeBody />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
