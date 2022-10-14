import './App.css';
import MainPage from './components/pages/mainPage/mainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/pages/contactPage/contactPage'
import AboutUs from './components/pages/aboutUs/aboutUs'
import Login from './components/logReg/login/login';
import SignUpBd from './components/logReg/register/SignUpBody';

// import UserDetails from "./components/userDetails";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/Login' element={<Login />} />
            <Route path='/SignUp' element={<SignUpBd />} />
            <Route index path='Home' element={<MainPage />} />
            <Route path='*' element={<MainPage />} />
            <Route path='Contacto' element={<Contact />} />
            <Route path='SobreNosotros' element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
