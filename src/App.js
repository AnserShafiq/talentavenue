import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/index.jsx';
import WhyTalentAvenue from './Pages/WhyTalentAvenue/index.jsx';
import Header from './Components/HeaderFooter/Header/Header';
import Footer from './Components/HeaderFooter/Footer/Footer';
import FAQs from './Pages/FAQs/index.jsx';
import HowWeWorks from './Pages/HowWeWorks/index.jsx';
import Employers from './Pages/Employers/index.jsx';
import JobSeekers from './Pages/JobSeekers/index.jsx';
import OurIndustries from './Pages/Industries/index.jsx';


const AppBody = () =>{
  return (
    <div>
      <Header />
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/why-talent-avenue' element={<WhyTalentAvenue />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/how-we-work' element={<HowWeWorks />}/>
          <Route path='/employers' element={<Employers />} />
          <Route path='/job-seekers' element={<JobSeekers />} />
          <Route path='/industries-we-deal' element={<OurIndustries />} />
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