import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaEmpregados from "./ListaEmpregados";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AdicionaEmpregado from "./AdicionaEmpregado";
import DetalhaEmpregado from "./DetalhaEmpregado";
import EditaEmpregado from "./EditaEmpregado";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaEmpregados />}></Route>
          <Route
            path="/empregado/adicionar"
            element={<AdicionaEmpregado />}
          ></Route>
          <Route
            path="/empregado/detalha/:empregadoid"
            element={<DetalhaEmpregado />}
          ></Route>
          <Route
            path="/empregado/edita/:empregadoid"
            element={<EditaEmpregado />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
