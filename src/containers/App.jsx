import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About";
import AuthProvider from "../components/AuthProvider";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";
import PrivateOutlet from "../components/PrivateOutlet";
import PrivateRoute from "../PrivateRoute";
import RegisterPage from "../pages/RegisterPage";
import RegisterProject from "../pages/RegisterProject";
import ListProjects from "../pages/ListProjects";
import LinkAlumn from "../pages/LinkAlumn";
import axios from "axios";

(function() {
    var token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW5pZWxwcm9mZXNzb3I2IiwiaWF0IjoxNjQ4NjAxMzk3LCJleHAiOjE2NDk0NjUzOTd9.WibJXfXyOL26Ihf7P8YbrjVurAa86I9ahg8X7-Vrldk";
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
        /*if setting null does not remove `Authorization` header then try     
          delete axios.defaults.headers.common['Authorization'];
        */
    }
})();

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
                    <Route path="/regist-project" element={<RegisterProject />} />
                    <Route path="/list-projects" element={<ListProjects />} />
                    <Route path="/link-alumn" element={<LinkAlumn />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
);

export default App;