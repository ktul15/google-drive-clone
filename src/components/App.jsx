import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"
import Signup from "./authentication/Signup"
import Login from "./authentication/Login"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import PrivateRoute from "./authentication/PrivateRoute"
import Profile from "./authentication/Profile"

function App() {

  return (
        <Router>
          <AuthProvider>
            <Routes>
              {/* DRIVE */}

              {/* PROFILE */}
              <Route path="/user" element={<PrivateRoute><Profile /></PrivateRoute>} 
              />
              <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} 
              />

              {/* AUTH */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
  )
}

export default App
