$(document).ready(function() {
    $('.navShowHide').on('click', function(){
        var mainContainer = $('#pageSectionContainer');
        var sideNavBar = $('#sideNavBar');
        if(mainContainer.hasClass('leftPadding')) {
            sideNavBar.hide();
        } else {
            sideNavBar.show();
        }
        mainContainer.toggleClass('leftPadding');
    })
});