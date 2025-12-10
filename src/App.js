import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopHeader from './Components/TopHeader.jsx';
import Header from "../src/Components/Header.jsx"
import HomeBanner from './Components/HomeBanner.jsx';
import Featured from './Components/Featured.jsx';
import WhyChooseUs from './Components/WhyChooseUs.jsx';
import JoinOurCircle from './Components/JoinOurCircle.jsx';
import Filter from './Components/Filter.jsx';
import FeedBack from './Components/FeedBack.jsx';
import Faq from './Components/Faq.jsx';
import GetStarted from './Components/GetStarted.jsx';
import LetsConnect from './Components/LetsConnect.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            exact element={
              <>
                <TopHeader />
                <Header />
                <HomeBanner />
                <Featured />
                <WhyChooseUs />
                <JoinOurCircle />
                <Filter />
                <FeedBack />
                <Faq />
                <GetStarted />
                <LetsConnect />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
