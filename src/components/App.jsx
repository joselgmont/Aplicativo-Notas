import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Notas from "./Notas";
import anotacoes from "../anotacoes"


function App(){
   return <div>
   <Header />
   {anotacoes.map((nota) =>
      <Notas
      titulo= {nota.titulo}
      conteudo= {nota.conteudo} 
      />
   )};
   <Footer />
   </div>;
}

export default App;

//<Notas />