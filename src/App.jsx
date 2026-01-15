import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/HomePage'
import './App.css'
import { CheckOut } from './Pages/CheckOut';
function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckOut />} />
    </Routes >


  )
}

export default App
