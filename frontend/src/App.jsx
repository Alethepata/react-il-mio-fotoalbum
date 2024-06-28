import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivatePage from "./middlewares/PrivatePage";

import DefaultLayout from "./layouts/DefaultLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Home";
import DashboardHome from "./pages/DashboardHome";
import Login from "./pages/Login";

import { AuthProvider } from "./contexts/AuthContext";
import { PhotosProvider } from "./contexts/PhotosContext";
import { MessagesProvider } from "./contexts/MessagesContext";
import DashboardCreate from "./pages/DashboardCreate";
import DashboardEdit from "./pages/DashboardEdit";
import DashboardShow from "./pages/DashboardShow";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <PhotosProvider>
          <MessagesProvider>

          <Routes>
    
            {/* Rotte Pubbliche */}
            <Route path="/" element={<DefaultLayout/>}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Route>
    
            {/* Rotte Private */}
            <Route path="/dashboard" element={
              <PrivatePage>
                <DashboardLayout/>
              </PrivatePage>
            }>
              <Route index element={<DashboardHome/>} />
              <Route path="create" element={<DashboardCreate/>} />
              <Route path=":id" element={<DashboardShow/>} />
              <Route path=":id/edit" element={<DashboardEdit/>} />
            </Route>
    
          </Routes>

          </MessagesProvider>
        </PhotosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
