import React from "react"
import "./profile.css"
import { useSelector } from "react-redux";
import ProfileComponent from "./ProfileComponent.js"

const ProfileScreen = () => {
    const profile = useSelector(state => state.profile);
    // console.log(JSON.stringify(profile))
    return (
        <>
            <ProfileComponent profile={profile} />
        </>
    );

}
export default ProfileScreen;