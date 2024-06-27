import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivatePage from "./middlewares/PrivatePage";

import DefaultLayout from "./layouts/DefaultLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        
      <Routes>

        {/* Rotte Pubbliche */}
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Rotte Private */}
        <Route path="/" element={
          <PrivatePage>
            <DashboardLayout/>
          </PrivatePage>
        }>
          <Route path="dashboard" element={<Dashboard/>} />
        </Route>

      </Routes>

      </AuthProvider>
    </BrowserRouter>
  )
}

export default App