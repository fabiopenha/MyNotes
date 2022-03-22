import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../navbar';
import Home from '../pages/home';
import Container from '../container';
import Register from "../pages/register";
import Login from '../pages/login';

const RouterBrowser = () => {
    return (
    
    <BrowserRouter>
        <Navbar />
        <Container>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Container>
  </BrowserRouter>
    )
}

export default RouterBrowser;