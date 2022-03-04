import PostSummaryList from "../PostSummaryList/index.js";



const ExploreComponent = () => {
    const formatted = (`
        <div class="col-12">
            <form action="#" class="wd-search-icon-align m-0">
                <i class="fas fa-search form__icon"></i>
                <input class="form__input wd-search-bar-width wd-rounded-corners-search"
                    placeholder="Search Twitter">
                <div class="ms-5">
                    <a href="explore-settings.html"><i class="fas fa-cog fa-2x"></i></a>
                </div>
            </form>
        </div>

        <!-- TABS  -->
        <div class="pt-2">
            <!-- SHOULD MAKE THIS IT'S OWN COMPONENT -->
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
        </div>

        <!-- BIG PICTURE -->
        <div class="position-relative pt-2">
            <img class="img-fluid" src="explore_images/starship.JPG" width="100%" height="100%" />
            <div
                class="ms-1 wd-over-img-text-size wd-text-color-search position-absolute bottom-0 start-20 wd-font-weight-over-img">
                SpaceX's Starship
            </div>
        </div>

    <!-- TUITS BELOW BIG PICTURE -->
    ${PostSummaryList()}
    `)



    return (formatted);
}

export default ExploreComponent;
