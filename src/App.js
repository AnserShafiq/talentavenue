import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index.jsx';
import WhyTalentAvenue from './Pages/WhyTalentAvenue/index.jsx';
import Header from './Components/HeaderFooter/Header/Header';
import Footer from './Components/HeaderFooter/Footer/Footer';


const AppBody = () =>{
  return (
    <div>
      <Header />
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/why-talent-avenue' element={<WhyTalentAvenue />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

const App = () => {
  return(
    <BrowserRouter>
      <AppBody />
    </BrowserRouter>
  )

}

export default App