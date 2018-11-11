jQuery(document).ready(function () {

jQuery(".preload").fadeOut("slow");


jQuery(".nav-button").click(function(){
    jQuery(".navmenu").toggleClass('navmenu--show');
    jQuery(".video_toggle_button").hide();
});
jQuery(".video_switch_container").click(function(){
const value=jQuery(".video_toggle_button").hasClass("btnSlide");

if(value){
jQuery(".video_toggle_button").addClass("btnSlide")
jQuery("video").get(0).pause()
}
else{
    jQuery(".video_toggle_button").addClass("btnSlide")
    jQuery("video").get(0).pause()
}


});

});
