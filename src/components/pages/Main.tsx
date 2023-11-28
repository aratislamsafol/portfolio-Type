import Navbar from "../navbar/Navbar";
import Loader from "../preloader/Loader";
import {useEffect, useState} from 'react';
import Blog from "./Blog";
import Gallery from "./Gallery";
import GetInTouch from "./GetInTouch";
import Home from "./Home";
import Services from "./MainDivPage/Services";
import AboutMe from "./MainDivPage/AboutMe";
import { useTheme } from "../context/ThemeContext";
export default function Main() { 
  const [isLoading, setIsLoading] = useState(true);
  // create fake db or data for load and get the time request time to setTime
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);
  const { isDarkMode, toggleDarkMode } = useTheme();
  console.log(toggleDarkMode);
  return (
    <div style={{ background: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#333' }}>
     
    {isLoading? <Loader />:
      <div className="topNav">  
        <div style={{ position: 'sticky',top: 0, zIndex:'25', background:'white'}}>
          <Navbar />
        </div>
        <Home/>
      
        <div className='main_wrapper'>
          <AboutMe />
          <Services/>
          <Gallery />
          <Blog />
          <GetInTouch />
        </div>
      </div>
      }  
    </div>
  )
}




