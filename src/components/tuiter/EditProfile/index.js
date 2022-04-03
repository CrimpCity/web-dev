import React from "react"
import "./EditProfile.css"
import { useSelector } from "react-redux";
import EditProfileComponent from "./EditProfileComponent.js"

const EditProfileScreen = () => {
    const profile = useSelector(state => state.profile);
    // console.log(JSON.stringify(profile))
    return (
        <>
            <EditProfileComponent profile={profile} />
        </>
    );

}
export default EditProfileScreen;