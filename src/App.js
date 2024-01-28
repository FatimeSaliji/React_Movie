
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import Header from "./components/Header"
import Footer from "./components/Footer"




function App() {
  return (
    
   
   <BrowserRouter>
      <Header />
      <div className="container">
      <Routes>
        <Route path="/Home" element={<Home />}>
        </Route>
        <Route path="/Movie" element={<Movie />}>
        </Route>
      </Routes>
      </div>
      <Footer/>
  </BrowserRouter> 

  
  
  );
}

export default App;
