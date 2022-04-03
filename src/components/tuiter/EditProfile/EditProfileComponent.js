import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./EditProfile.css"


const EditProfileComponent = (profile) => {
    const dispatch = useDispatch();
    // const [profile, setProfile] = useState({ profile: 'profile' });
    const deleteProfileChanges = () => { dispatch({ type: 'delete-profile-changes', profile }) }
    // const nameChangeHandler = (event) => {
    //     const newValue = event.target.value;
    //     const newName = {
    //         firstName: newValue
    //     };
    //     setProfile(newName);
    // }

    const formatted = (
        <>
            <div className="row wd-text-color wd-container mb-2">
                <div className="col-1 fs-6">
                    <i onClick={() => deleteProfileChanges(profile)}
                        className="fas fa-trash"></i>
                </div>
                <div className="col-10">
                    <div className="fs-5 fw-bold">
                        Edit Profile
                    </div>
                </div>
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-primary wd-save-button fw-bold float-end">
                            Save
                        </button>
                    </Link>
                </div>

            </div>

            <div className="position-relative">
                <img className=" wd-banner-image"
                    src={profile.profile.bannerPicture}
                    alt="banner">
                </img>
                <div className="position-absolute wd-avatar-photo-position ps-3">
                    <img className="wd-avatar-photo"
                        src={profile.profile.profilePicture}
                        alt="avatar">
                    </img>
                </div>
            </div>

            <div className="row wd-edit-position wd-edit-width ms-3">

                <div className="wd-text-box-border wd-name-box-height">
                    <div className="mt-1">
                        Name
                    </div>

                    <div>
                        <textarea
                            value={profile.profile.firstName + " " + profile.profile.lastName}
                            className="wd-text-box wd-name-form-height">
                            {profile.profile.firstName}
                        </textarea>
                    </div>
                </div>

                <div className="mt-4 wd-text-box-border wd-bio-box-height">
                    <div className="mt-1">
                        Bio
                    </div>

                    <div>
                        <textarea
                            value={profile.profile.bio}
                            className="wd-text-box wd-bio-form-height">
                            {profile.profile.bio}
                        </textarea>
                    </div>
                </div>


                <div className="mt-4 wd-text-box-border wd-location-box-height">
                    <div className="mt-1">
                        Location
                    </div>

                    <div>
                        <textarea
                            value={profile.profile.location}
                            className="wd-text-box wd-location-form-height">
                            {profile.profile.location}
                        </textarea>
                    </div>
                </div>


                <div className="mt-4 wd-text-box-border wd-website-box-height">
                    <div className="mt-1">
                        Website
                    </div>

                    <div>
                        <textarea
                            value={profile.profile.website}
                            className="wd-text-box wd-website-form-height">
                            {profile.profile.website}
                        </textarea>
                    </div>
                </div>

                <div className="mt-4 mb-5">
                    <div className="mt-1">
                        Date of Birth
                    </div>

                    <div>
                        <textarea
                            value={profile.profile.dateOfBirth}
                            className="wd-text-box wd-website-form-height">
                            {profile.profile.dateOfBirth}
                        </textarea>
                    </div>
                </div>








            </div>
        </>
    )

    return formatted
}

export default EditProfileComponent;