import style from "./Message.module.css"

const Message = (props) => {
   return (
       <div className={style.messageStyle } >
           {props.message}
       </div>
   )
};

export default Message