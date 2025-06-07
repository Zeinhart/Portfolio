import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import "./index.css";
import { Home } from "./components/section/Home";
import { About } from "./components/section/About";
import { Projects } from "./components/section/Project";
import { Contact } from "./components/section/Contact";
import { Footer } from "./components/section/Footer";


function App() {
  const[isLoaded, setIsLoaded] = useState(false)
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <>

    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "} 
     <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-slate-900 text-gray-100`}
        // style={{ backgroundColor: '#212121' }}
      >   
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        



      </div>  
      
    </>
    
  )
}

export default App
