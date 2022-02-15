import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import BookTicket from './components/BookTicket';

//for routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/bookticket" element={<BookTicket />}></Route>
              <Route exact path="/signup" element={<SignUp />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
            </Routes>
          
    {/* <SignUp/> */}
    {/* <BookTicket/> */}
    <Footer/>
    </Router>
    </>
  );
}

export default App;
