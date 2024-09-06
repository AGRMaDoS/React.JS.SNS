import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";

    const mapStateToProps = (state) => {
        return {
            post:state.profilePage.post,
            newPostText: state.profilePage.newPostText,
    }
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            addPost:()=>{
                dispatch(addPostActionCreator());
                dispatch(updateNewPostTextActionCreator(''))
            },
            updateNewPostText:(text) => {
                dispatch(updateNewPostTextActionCreator(text))
            }
        }
    }

    const MypostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts);


    export default MypostsContainer;