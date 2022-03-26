import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../navbar';
import Home from '../pages/home';
import Container from '../container';
import Register from "../pages/register";
import Login from '../pages/login';
import Notes from '../pages/notes';
import PrivateRouter from "./PrivateRouter";


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
        <Routes>
            <Route path='/notes' element={<PrivateRouter><Notes /></PrivateRouter>} />
        </Routes>
  </BrowserRouter>
    )
}

export default RouterBrowser;