import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import BookingPage from "./pages/BookingPage";
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<HomePage />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/order-online" element={<OrderOnline />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reserve" element={<BookingPage />}></Route>
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
