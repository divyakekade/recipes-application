import {Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
const App = ()=> {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  </>
)
}

export default App;
