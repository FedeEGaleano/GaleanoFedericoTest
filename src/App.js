import React from "react";
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./Items/ItemListContainer";
import Item from './Item.css';
import Detail from './Items/Detail.css';
import ItemDetailContainer from "./Items/ItemDetailContainer";




export default function App() {


  return (
    <>
      <NavBar />
      <ItemDetailContainer/>
      <ItemListContainer/>
      
    </>
  );
}




