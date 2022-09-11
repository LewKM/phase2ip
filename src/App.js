import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import "./App.css";
import LandingPage from './pages/Home';
import CreateCharts from './pages/CreateCharts';
import FeaturedCharts from './pages/Charts';
import ContactForm from './pages/ContactForm';
import BlogPart from './pages/Blog';
import UpdateCharts from './pages/UpdateCharts';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
        <Route path='/add' element={<CreateCharts />}></Route>
        <Route path='/chart' element={<FeaturedCharts />} ></Route>
        <Route path='/update' element={<UpdateCharts />} ></Route>
        <Route path='/contact' element={<ContactForm />}></Route>
        <Route path='/blog' element={<BlogPart />}></Route>
      </Routes>
      <Footer />
    </div>

  );
}

export default App;