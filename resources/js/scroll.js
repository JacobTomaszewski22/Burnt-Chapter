// A script to change the header image and move the logo when the page is scrolled

//on window load
window.onload = function() {

    //set up a watch to see if its been scrolled
    $(window).on('scroll', function(){

        //if the window has scrolled more than 10 px
        if($(window).scrollTop()>10){
            //we want to use a css animation to shrink the header image and move the logo to the side
            const logoImageElement = document.getElementsByClassName("band_logo");
            logoImageElement[0].style.position = "fixed";
        }
    })
}