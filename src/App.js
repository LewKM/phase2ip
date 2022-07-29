import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from './pages/Home';
import CreateCharts from './pages/CreateCharts';
import Data from './pages/ChartsContainer';
import ContactForm from './pages/ContactForm';
import Blog from "./pages/Blog.js";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
        <Route exact path='/add' element={<CreateCharts />}></Route>
        <Route exact path='/chart' element={<Data />} ></Route>
        <Route exact path='/contact' element={<ContactForm/>}></Route>
        <Route exact path='/blog' element={<Blog/>}></Route>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;