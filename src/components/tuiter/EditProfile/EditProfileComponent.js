import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./EditProfile.css"

const EditProfileComponent = () => {
    const currentProfile = useSelector((state) => state.profile);
    let [profile, setProfile] = useState(currentProfile);
    const dispatch = useDispatch();
    const saveProfileEdit = () => {
        dispatch({
            type: 'save-profile-edit',
            profile: profile
        })
    };
    const exitEdits = () => {
        dispatch({
            type: 'exit-profile-edit',
        })
    };

    const formatted = (
        <>
            <div className="row wd-text-color wd-container mb-2">
                <div className="col-1 fs-6">
                    <Link to="/tuiter/profile">
                        <i onClick={exitEdits} className="fas fa-trash wd-text-color"></i>
                    </Link>

                </div>
                <div className="col-10">
                    <div className="fs-5 fw-bold">
                        Edit Profile
                    </div>
                </div>
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-primary wd-save-button fw-bold float-end"
                            onClick={saveProfileEdit}>
                            Save
                        </button>
                    </Link>
                </div>

            </div>

            <div className="position-relative">
                <img className=" wd-banner-image"
                    src={profile.bannerPicture}
                    alt="banner">
                </img>
                <div className="position-absolute wd-avatar-photo-position ps-3">
                    <img className="wd-avatar-photo"
                        src={profile.profilePicture}
                        alt="avatar">
                    </img>
                </div>
            </div>

            <div className="row wd-edit-position wd-edit-width ms-3">

                <div className="wd-text-box-border wd-name-box-height">
                    <div className="mt-1">
                        First Name
                    </div>

                    <div>
                        <textarea
                            placeholder={profile.firstName}
                            className="wd-text-box wd-name-form-height"
                            onChange={(event) => setProfile({ ...profile, firstName: event.target.value })}>
                        </textarea>
                    </div>
                </div>

                <div className="mt-4 wd-text-box-border wd-name-box-height">
                    <div className="mt-1">
                        Last Name
                    </div>

                    <div>
                        <textarea
                            placeholder={profile.lastName}
                            className="wd-text-box wd-name-form-height"
                            onChange={(event) => setProfile({ ...profile, lastName: event.target.value })}>
                        </textarea>
                    </div>
                </div>

                <div className="mt-4 wd-text-box-border wd-bio-box-height">
                    <div className="mt-1">
                        Bio
                    </div>

                    <div>
                        <textarea
                            placeholder={profile.bio}
                            className="wd-text-box wd-bio-form-height"
                            onChange={(event) => setProfile({ ...profile, bio: event.target.value })}>
                        </textarea>
                    </div>
                </div>


                <div className="mt-4 wd-text-box-border wd-location-box-height">
                    <div className="mt-1">
                        Location
                    </div>

                    <div>
                        <textarea
                            placeholder={profile.location}
                            className="wd-text-box wd-location-form-height"
                            onChange={(event) => setProfile({ ...profile, location: event.target.value })}>
                        </textarea>
                    </div>
                </div>


                <div className="mt-4 wd-text-box-border wd-website-box-height">
                    <div className="mt-1">
                        Website
                    </div>

                    <div>
                        <textarea
                            placeholder={profile.website}
                            className="wd-text-box wd-website-form-height"
                            onChange={(event) => setProfile({ ...profile, website: event.target.value })}>
                        </textarea>
                    </div>
                </div>

                <div className="mt-4 mb-5">
                    <div className="mt-1">
                        Date of Birth
                    </div>

                    <div>
                        <textarea
                            placeholder={profile.dateOfBirth}
                            className="wd-text-box wd-website-form-height"
                            onChange={(event) => setProfile({ ...profile, dateOfBirth: event.target.value })}>
                        </textarea>
                    </div>
                </div>
            </div>
        </>
    )

    return formatted
}

export default EditProfileComponent;