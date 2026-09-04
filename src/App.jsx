
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import RequestBooking from './pages/RequstBooking';

function App() {
  return (
    <>


    <Routes>

      <Route path="/" element={<Home />} />
       <Route path="/work" element={<Work />} />
        <Route path="/requestbooking" element={<RequestBooking />} />

</Routes>
    
    </>
  )
}

export default App

