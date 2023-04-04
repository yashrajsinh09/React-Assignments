import { BrowserRouter,Routes,Route } from "react-router-dom";
import Assignment1 from "./pages/Assignment1/Assignment1";
import HomePage from "./pages/HomePage/HomePage";
import CounterAssignment from "./pages/CounterAssignment/CounterAssignment";
import Calulator from "./pages/Calculator/Calulator";
import TableGenerator from "./pages/TableGenerator/TableGenerator";

function App() {
  return (
<BrowserRouter>
<h1>My React Assignments</h1>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/a1" element={<Assignment1/>}/>
  <Route path="/counter" element={<CounterAssignment/>}/>
  <Route path="/calc" element={<Calulator/>}/>
  <Route path="/table" element={<TableGenerator/>}/>
</Routes>
</BrowserRouter>
    );
}

export default App;
