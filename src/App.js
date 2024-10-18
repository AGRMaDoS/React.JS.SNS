import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Mine from "./components/Mine/Mine";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import React, {Component} from "react";
import {compose} from "redux";
import {initializeApp} from "./Redux/App-reducer";
import Preloader from "./components/Common/Preloader/Preloader";

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


export default compose(connect(mapStateToProps, {initializeApp})(App))
