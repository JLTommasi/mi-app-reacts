import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/carrito";
import CheckOut from "./components/CheckOut";



function App() {
    return (
    <div>
        <CartProvider>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/productos" element={<ItemListContainer />} />
                    <Route path="/productos/:categoria" element={<ItemListContainer />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/checkout" element={<CheckOut />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    </div>  
    );
}
export default App; 