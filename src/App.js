import React, { useState, useEffect,useRef } from "react";
import Navbar from "./navbar";

import Header from "./Header";
import TheNobelCard from './TheNobelCard'
import PrivacyCookie from './privacycookie'
import TheIframe from './theiframe';

import Footer from './footer'
function App() {
  const [data, setData] = useState([]);
  const [currentResult,setCurrentResult] = useState(0);
  const [show , setShow] = useState(false)
  const alert = document.getElementsByClassName('priavcy-cookie"');
  const setCard = ()=>{
    // if(show === false){
    //   alert.classList.add('show');
    // }
  }
  setCard();
  const Nobellist = () => {
    try {
      fetch("http://api.nobelprize.org/v1/country.json")
        .then((res) => res.json())
        .then((data) => setData(data.countries));
    } catch (error) {
      throw new error();
    }
  };

  useEffect(() => {
    Nobellist();
  }, []);
  console.log(data);
 const per_page = 10;
 const offset = currentResult * per_page;
 const currentPageData = data.slice(offset,offset + 10)

  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <div className="container-xxl bg-dark text-center" >
              <div className="row">
                <div className="col-12" >
      {data !== null
        ? currentPageData.map((country, index) => {
             
            return (
              
              
              
              <TheNobelCard country={country} index={index}/>
            
              );
          })
        : "loding"}
</div>
              </div>
              </div>
        <TheIframe/>
        <PrivacyCookie/>
        <Footer/>
    </div>
  );
}

export default App;
