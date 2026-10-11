import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import MenuPage from "./features/menu/pages/MenuPage";
import DishDetailPage from "./features/menu/pages/DishDetailPage";
import OrderPage from "./features/menu/pages/OrderPage";


function App() {

  return (
    <div>

      <Navbar />


      <Routes>

        <Route path="/" element={<MenuPage />} />

        <Route path="/dish/:id" element={<DishDetailPage />} />

        <Route path="/order" element={<OrderPage />} />

      </Routes>


      <Footer />

    </div>
  );
}


export default App;