
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
// import Wrappers from './pages/Wrappers'
// import Perfumes from './pages/Perfumes'
// import About from './pages/About'

// import Contact from './pages/Contact'

import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";

import AdminDesigns from "./admin/AdminDesigns";
import AddDesign from "./admin/AddDesign";
import RequestBooking from './pages/RequstBooking';

// firebase 

// import { auth, db, storage} from "./firebase"




function App() {
  return (
    <>


    <Routes>

      <Route path="/" element={<Home />} />
       <Route path="/work" element={<Work />} />
        <Route path="/requestbooking" element={<RequestBooking />} />


      {/* <Route path="/wrappers" element={<Wrappers />} />
      <Route path="/perfumes" element={<Perfumes />} />
     
      <Route path="/contact" element={<Contact />} /> */}

    
      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>

        <Route index element={<Dashboard />} />

         <Route
    path="designs"
    element={<AdminDesigns />}
  />
  <Route
    path="add-design"
    element={<AddDesign />}
  />

</Route>

</Routes>
    
    </>
  )
}

export default App

