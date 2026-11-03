import { BrowserRouter, Routes, Route } from "react-router";
import Contacts from "./pages/contact/Contacts";
import HomeBody from "./pages/home/HomeBody";
import Clients from "./pages/clients/Clients";
import Layout from "./components/Layout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomeBody />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/clients" element={<Clients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// import Home from "./pages/home/Home.tsx";

export default App;
