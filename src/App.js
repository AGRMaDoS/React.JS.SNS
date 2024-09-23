import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import Mine from "./components/Mine/Mine";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <Mine/>
            </div>
        </BrowserRouter>);
};


export default App;
