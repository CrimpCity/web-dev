import { Link } from "react-router-dom";
import "./profile.css"

const ProfileComponent = (profile) => {
    // console.log(JSON.stringify(profile))
    console.log(profile.profile.numTweets)

    const formatted = (
        <>
            <div className="row wd-text-color wd-container mb-2">
                <div className="col-1 fs-6">
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className="col-11">
                    <div className="fs-5 fw-bold">
                        {profile.profile.firstName} {profile.profile.lastName}
                    </div>
                    <div className="wd-font-size-tweet wd-post-text-light-color">
                        {profile.profile.numTweets} Tweets
                    </div>
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

            <div className="wd-edit-button-position wd-right mt-3 me-3">
                <Link to="/tuiter/edit-profile">
                    <button className="btn btn-primary wd-edit-button fw-bold">
                        Edit Profile
                    </button>
                </Link>
            </div>

            <div className="row wd-bio-width ms-3">
                <div className="mt-3 fs-5 fw-bold wd-text-color">
                    {profile.profile.firstName} {profile.profile.lastName}
                </div>
                <div className="wd-font-size-handle wd-post-text-light-color">
                    @{profile.profile.handle}
                </div>
                <div className="pt-2 fs-6 fw-light wd-text-color">
                    {profile.profile.bio}
                </div>

                <div className="mt-2 d-inline-flex wd-font-size-meta wd-post-text-light-color">
                    <div className="me-3">
                        <i className="fa fa-map-marker-alt me-2"></i>
                        {profile.profile.location}
                    </div>

                    <div className="me-3">
                        <i className="fas fa-birthday-cake me-2"></i>
                        Born {profile.profile.dateOfBirth}
                    </div>

                    <div className="me-3">
                        <i className="fas fa-calendar-alt me-2"></i>
                        Joined {profile.profile.dateJoined}
                    </div>
                </div>
                <div className="mt-2 d-inline-flex wd-font-size-meta wd-post-text-light-color">
                    <div className="me-3">
                        <span className="fw-bold wd-text-color me-2">
                            {profile.profile.followingCount}
                        </span>
                        Following
                    </div>

                    <div className="me-3">
                        <span className="fw-bold wd-text-color me-2">
                            {profile.profile.followersCount}
                        </span>
                        Followers
                    </div>
                </div>
            </div>




        </>
    )

    return formatted
}

export default ProfileComponent;