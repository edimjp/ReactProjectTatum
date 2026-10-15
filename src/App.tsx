import { BrowserRouter, Routes, Route } from "react-router";
import Clients from "./pages/clients/Clients";
import NavMenuDropDown from "./components/NavMenuDropDown";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Clients />} />
        <Route index element={<NavMenuDropDown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
