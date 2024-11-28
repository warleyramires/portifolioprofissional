import Header from "./components/header/Header"
import './App.css'
import SectionOne from "./components/sectionone/SectionOne"
import SectionTwo from "./components/sectiontwo/SectionTwo"
import MyProjects from "./components/myprojects/MyProjects"
import Footer from "./components/footer/Footer"
function App() {
  

  return (
    <>
     <Header/>
     <SectionOne/>
     <SectionTwo id="sobre"/>
     <MyProjects id="portifolio"/>
     <Footer/>
    </>
  )
}

export default App
