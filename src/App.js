import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Specials from './components/Specials';
import BookingPage from './components/BookingPage';
import OrderOnline from './components/OrderOnline';
import ConfirmedBooking from './components/ConfirmedBooking';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserve-a-table" element={<BookingPage />} />
        <Route path="/online-menu" element={<Specials />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/about" element={<About />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
