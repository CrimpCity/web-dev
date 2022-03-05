import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import HomePostList from "./HomePostList/index.js";
import PostSummaryList from "./PostSummaryList/index.js";

(function ($) {
    $('#wd-home').append(`
    <div class="row">
        <div class="container d-flex align-items-start p-4">

            <!-- SIDE BAR -->
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-3 col-3 p-3">
                ${NavigationSidebar("Explore")}
            </div>

            <!-- MAIN CONTENT -->
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-9 col-9 pt-3">
                ${HomePostList()}
            </div>

            <!-- WHO TO FOLLOW SIDE BAR  -->
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-lg-block d-none p-3">
                ${PostSummaryList()}
            </div>
            
            <!-- END OF THREE COLUMN CONTAINER -->
        </div>
    </div>
    `);
})($);

