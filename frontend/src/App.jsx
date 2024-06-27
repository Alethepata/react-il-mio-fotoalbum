import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/DefaultLayout";
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        {/* Rotte Pubbliche */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>

        {/* Rotte Private */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
