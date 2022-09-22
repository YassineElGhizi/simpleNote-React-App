import './App.css';
import Login from "./components/login";
import Mynavbar from "./components/navbar";
import {useSelector} from "react-redux";
import Register from "./components/register";

function App() {
    const register = useSelector((state)=>{
        return state.register;
    });

    return (<div>
        <Mynavbar/>
        {register == -1 && <Login  />}
        {register == 1 && <Register  />}
    </div>);
}

export default App;
