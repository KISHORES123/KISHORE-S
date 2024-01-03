import Navbar from './Navbar/Navbar';
import './App.css';
import Header from './Header/Header';
import SmartBucket from "./SmartBucket/SmartBucket";
import BankOffers from './BankOffers/BankOffers';
import MultiButtons from './MultiButtons/MultiButtons';
import BestSeller from './BestSeller/BestSeller';
import TopOffers from './TopOffers/TopOffers';
import FruitsNvegiT from './Fruits&VegiT/FruitsNvegiT';
import DailyStaples from './DailyStaples/DailyStaples';
import Beverages from './Beverages/Beverages';
import SnackStore from './SnackStore/SnackStore';
import CleanNhouseHold from './CleanNhouseHold/CleanNhouseHold';
import BeautyNhygiene from './BeautyNhygiene/BeautyNhygiene';
import HomeNkitchen from './HomeNkitchen/HomeNkitchen';
import BottomAdvertise from './BottomAdvertise/BottomAdvertise';
import Footer from './Footer/Footer';
import { useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Login from './login/Login';
import Sign from './login/Sign'

function App() {
  
  const [cart,setCart]=useState([])
  const handelclick=(item)=>{
    setCart([...cart,item])
   }

  
 
  return (
    <div className="App">
      
      <Navbar/>
      <Header/>
      <MultiButtons/>
      <SmartBucket/>
      <BankOffers/>
      <BestSeller handelclick={handelclick}/>
      <TopOffers/>
      <FruitsNvegiT/>
      <DailyStaples/>
      <Beverages/>
      <SnackStore/>
      <CleanNhouseHold/>
      <BeautyNhygiene/>
      <HomeNkitchen/>
      <BottomAdvertise/>
      <Footer/>


        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/sign' element={<Sign/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
