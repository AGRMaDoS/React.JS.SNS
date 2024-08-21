import style from "./Avatar.module.css";

const Avatar = (props) => {
    return (
        <div>
            <img className={style.avatar}
                 src='https://imgv3.fotor.com/images/slider-image/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg'/>
        </div>
    )
}

export default Avatar;