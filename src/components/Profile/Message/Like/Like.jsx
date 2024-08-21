import style from './Like.module.css'
const Like = (props) =>{
    return(
        <p className={style.p}>
            <img
                src ='https://cdn-icons-png.flaticon.com/512/10307/10307855.png'/>
            {props.like}
        </p>
    )
}

export default Like;