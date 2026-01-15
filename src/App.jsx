import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/HomePage'
import { CheckOut } from './Pages/checkout/CheckOut';
import { OrderPage } from './Pages/OrderPage';
import { TrackingPage } from './Pages/TrackingPage';
import './App.css'
function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes >


  )
}

export default App
