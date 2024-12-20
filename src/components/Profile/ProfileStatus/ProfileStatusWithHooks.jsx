import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deActiveEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode}><b>Status:</b> {props.status || "----"}</span>

                </div>}
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deActiveEditMode}
                           value={status}/>
                </div>}

        </div>
    )
}

export default ProfileStatusWithHooks