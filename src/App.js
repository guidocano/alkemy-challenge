// Libraries
import {Routes, Route} from "react-router-dom";

// Components
import Listado from "./components/Listado"
import Detalle from "./components/Detalle"
import Login from "./components/Login";
import Header from "./components/Header"
import Footer from "./components/Footer"

// Styles
import "./css/bootstrap.min.css"

function App() {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/listado" element={<Listado/>}/>
          <Route path="/detalle" element={<Detalle/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
