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
import Messages from "./pages/Messages";
import MessagesDetails from "./pages/MessagesDetails";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";

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
                <Route index element={<DashboardHome />} />
                
                <Route path="photos">
                  <Route path="create" element={<DashboardCreate />} />
                  <Route path=":id" element={<DashboardShow/>} />
                  <Route path=":id/edit" element={<DashboardEdit/>} />
                </Route>

                <Route path="categories">
                  <Route index element={<Categories/>} />
                  <Route path="create" element={<AddCategory/>}/>
                </Route>

                <Route path="messages">
                  <Route index element={<Messages />} />
                  <Route path=":id" element={<MessagesDetails />}/>
                </Route>

            </Route>
    
          </Routes>

          </MessagesProvider>
        </PhotosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
