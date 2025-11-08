import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section1 from "./components/Main/Section1/Section1";
import Section2 from "./components/Main/Section2/Section2";
import Section3 from "./components/Main/Section3/Section3";
import Section4 from "./components/Main/Section4/Section4";
import './App.css'

function App() {

  return (
    <>
         <Header />

     <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <Footer />

    </>
  )
}

export default App
