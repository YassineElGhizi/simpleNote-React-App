import './App.css';
import Login from "./components/login";
import Mynavbar from "./components/navbar";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import {useLayoutEffect} from "react";
import {togleRegister} from "./redux/registerSlice";
import Welcome from "./components/welcome";
import {add_auth} from "./redux/authSlice";

function App() {

    const dispatch = useDispatch();

    const register = useSelector((state) => {
        return state.register;
    });

    let remove_auth = () => {
        dispatch(togleRegister({chosen: -100}))
    }

    let handleAuth = (user) => {
        dispatch(add_auth(user))
    }

    useLayoutEffect(() => {
        if (window.localStorage.getItem("auth")) {
            remove_auth()
            let user = JSON.parse(window.localStorage.getItem("user"))
            handleAuth(user)
        }
    })

    return (<div>
        <Mynavbar/>
        {register == -1 && <Login/>}
        {register == 1 && <Register/>}
        <BrowserRouter>
            <Routes>
                <Route path="/notes" element={<Dashboard/>}/>
                <Route path="/" element={Math.abs(register) != 1 && <Welcome/>}/>
            </Routes>

        </BrowserRouter>

    </div>);
}

export default App;
