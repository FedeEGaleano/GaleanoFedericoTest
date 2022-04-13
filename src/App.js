import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./Items/ItemListContainer";
import Item from './Item.css';
import Detail from './Items/Detail.css';
import ItemDetailContainer from "./Items/ItemDetailContainer";
import Footer from "./components/NavBarFooter/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BannerCar from "./components/NavBarFooter/BannerCar";
import NavBar from "./components/NavBarFooter/NavBar";

export default function App() {


  return (
    <> 
    <BrowserRouter>
      <BannerCar/>
      <NavBar/>
      <h1 className="h1">NEW IN!</h1>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/> 
        <Route exact path="/category/:id" element={<ItemListContainer/>}/> 
        <Route exact path="/ItemDetailContainer" element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}




