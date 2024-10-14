import styles from "./FormsControls.module.css"
import React from "react";

export const Textarea = ({input,meta, ...props})=>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}