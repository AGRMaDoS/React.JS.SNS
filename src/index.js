import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, updateNewPostText} from "./Redux/Data";
import rerenderEntireTree from "./Render";

rerenderEntireTree(state,addPost,updateNewPostText);

reportWebVitals();
