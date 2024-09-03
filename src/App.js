import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import Mine from "./components/Mine/Mine";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Mine store={props.store} state={props.state} dispatch={props.dispatch}/>
            </div>
        </BrowserRouter>);
};


export default App;
