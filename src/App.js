import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Mine from "./components/Mine/Mine";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import React, {Component} from "react";
import {compose} from "redux";
import {initializeApp} from "./Redux/App-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        console.log(this.props.initialized)
        if (!this.props.initialized) {
            return (<Preloader/>)
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <Mine/>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose(connect(mapStateToProps, {initializeApp})(App))

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;