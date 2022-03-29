import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import AuthProvider from "../components/AuthProvider";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";
import PrivateOutlet from "../components/PrivateOutlet";
import PrivateRoute from "../PrivateRoute";
import Search from "../pages/Search";
import RegisterPage from "../pages/RegisterPage";

const App = () => (
    <BrowserRouter>
        <AuthProvider>
            <Navbar />
            <Routes>
                
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route element={<PrivateOutlet />}>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/search" element={<Search />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);

export default App;