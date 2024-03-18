import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Gloves from "./components/Gloves";
import Bag from "./components/Bag";
import Helmet from "./components/Helmet";
import Shoes from "./components/Shoes";
function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
      
     
    </>
  );
}

export default App;
