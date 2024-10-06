import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./pages/Layout";
import Login from "./pages/Login"
import Calender from "./components/Calender";
import Appointments from "./components/Appointments";
import Customers from "./components/Customers";
import Payments from "./components/Payments";
import Services from "./components/Services";
import Treatments from "./components/Treatments";
import Dashboard from "./components/Dashboard";
import Staff from "./components/Staff";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Dashboard />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="calender" element={<Calender />}></Route>
        <Route path="appointments" element={<Appointments />}></Route>
        <Route path="customers" element={<Customers />}></Route>
        <Route path="payments" element={<Payments />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="treatments" element={<Treatments />}></Route>
        <Route path="staff" element={<Staff />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  )
}

export default App
