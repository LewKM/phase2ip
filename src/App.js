
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import "./App.css"
import ChartItems from './pages/ChartItems';
import ContactForm from './pages/ContactForm';
import LandingPage from './pages/Home';
import CreateCharts from './pages/CreateCharts';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
        <Route exact path='/add' element={<CreateCharts />}></Route>
        <Route exact path='/chart' element={<ChartItems />} ></Route>
        <Route exact path='/contact' element={<ContactForm/>}></Route>
      </Routes>
    </div>

  );
}

export default App;