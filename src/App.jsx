import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import "../src/App.css"


const App = () => {
  return (
    <>
      <Header title="Galeria de Imagenes con React" />
      <div className="mainCard">
        <Card
          src="../public/martinpescador.jpg"
          title="Martín Pescador"
          description="Pajaro"
        />
        <Card
          src="../public/tigre.jpg"
          title="Tigre"
          description="Carnivoro"
        />
        <Card
          src="../public/bebeelefante.jpg"
          title="Bebé Elefante"
          description="Abrevadero"
        />
      </div>
      <Footer/>
    </>
  )
}

export default App;