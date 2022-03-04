import NavigationSidebar from "./NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent/index.js";
import WhoToFollowList from "./WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
    <div class="row">
        <div class="container d-flex align-items-start p-4">

            <!-- SIDE BAR -->
            <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-3 col-3 p-3">
                ${NavigationSidebar()}
            </div>

            <!-- MAIN CONTENT -->
            <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-9 col-9 pt-3">
                ${ExploreComponent()}
            </div>

            <!-- WHO TO FOLLOW SIDE BAR  -->
            <div class="col-xxl-4 col-xl-4 col-lg-4 d-lg-block d-none p-3">
                ${WhoToFollowList()}
            </div>
            
            <!-- END OF THREE COLUMN CONTAINER -->
        </div>
    </div>
    `);
})($);




// (function ($) {
//     $('#wd-explore').append(`
//         <div class="row mt-2">
//             <div class="container d-flex align-items-start p-4">
//                 <div class="col-2 col-md-2 col-lg-1 col-xl-2">
//                     ${NavigationSidebar()}
//                 </div>
//                     ${ExploreComponent()}
//                 <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//                     ${WhoToFollowList()}
//             </div>
//         </div>
//     </div>
//     `);
// })($);