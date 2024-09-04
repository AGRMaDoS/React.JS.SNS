import style from './Friend.module.css'
const Friend = (props) => {
    return (<div>

            <p className={style.text}>
                <img className={style.avatar} src={props.avatar} alt="Avatar"/>
                {props.name}</p>
        </div>)
};

export default Friend;