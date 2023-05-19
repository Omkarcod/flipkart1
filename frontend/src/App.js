import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import DataProvider from "./components/context/DataProvider.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailview from "./components/deatails/Detailview";
import Cart from './components/Cart/Cart';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Detailview/>} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
