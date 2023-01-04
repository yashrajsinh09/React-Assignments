import { BrowserRouter,Routes,Route } from "react-router-dom";
import Assignment1 from "./pages/Assignment1/Assignment1";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
   
<BrowserRouter>
<h1>My React Assignments</h1>
<Routes>

  <Route path="/a1" element={<Assignment1/>}/>
  <Route path="/" element={<HomePage/>}/>
</Routes>
</BrowserRouter>
    );
}

export default App;
