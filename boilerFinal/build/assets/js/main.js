//menu slide effect
function openSlideMenu(e){
        
  document.getElementById('side-menu').style.width='300px';
  // document.getElementById('main').style.marginLeft='300px';
  
  document.getElementById("overlay-page").style.display="block";
}
function closeSlideMenu(){
  document.getElementById('side-menu').style.width='0';
  document.getElementById("overlay-page").style.display="none";
  // document.getElementById('main').style.marginLeft='0';
}
// background audio control
var getaudio = $("#player")[0];
/* Get the audio from the player (using the player's ID), the [0] is necessary */
var mouseovertimer;
/* Global variable for a timer. When the mouse is hovered over the speaker it will start playing after hovering for 1 second, if less than 1 second it won't play (incase you accidentally hover over the speaker) */
var audiostatus = "off";
/* Global variable for the audio's status (off or on). It's a bit crude but it works for determining the status. */

$(document).on("mouseenter", ".speaker", function() {
  /* Bonus feature, if the mouse hovers over the speaker image for more than 1 second the audio will start playing */
  if (!mouseovertimer) {
    mouseovertimer = window.setTimeout(function() {
      mouseovertimer = null;
      if (!$(".speaker").hasClass("speakerplay")) {
        getaudio.load();
        /* Loads the audio */
        getaudio.play();
        /* Play the audio (starting at the beginning of the track) */
        $(".speaker").addClass("speakerplay");
        return false;
      }
    }, 1000);
  }
});

$(document).on("mouseleave", ".speaker", function() {
  /* If the mouse stops hovering on the image (leaves the image) clear the timer, reset back to 0 */
  if (mouseovertimer) {
    window.clearTimeout(mouseovertimer);
    mouseovertimer = null;
  }
});

$(document).on("click touch", ".speaker", function() {
  /* Touchend is necessary for mobile devices, click alone won't work */
  if (!$(".speaker").hasClass("speakerplay")) {
    if (audiostatus == "off") {
      $(".speaker").addClass("speakerplay");
      getaudio.load();
      getaudio.play();
      window.clearTimeout(mouseovertimer);
      audiostatus = "on";
      return false;
    } else if (audiostatus == "on") {
      $(".speaker").addClass("speakerplay");
      getaudio.play();
    }
  } else if ($(".speaker").hasClass("speakerplay")) {
    getaudio.pause();
    $(".speaker").removeClass("speakerplay");
    window.clearTimeout(mouseovertimer);
    audiostatus = "on";
  }
});

$("#player").on("ended", function() {
  $(".speaker").removeClass("speakerplay");
  /*When the audio has finished playing, remove the class speakerplay*/
  audiostatus = "off";
  /*Set the status back to off*/
});

window.onscroll = function() {
  initiateNavigation();
};

function initiateNavigation() {
  let uiModNodeList = document.querySelectorAll(".uiMod");
  let uiModeBackList = document.querySelectorAll(".uiModBack");
  const subMenu = document.getElementById("subMenuNav");
  const navbar = document.getElementById("navbarElement");
  
  

  
  

  let uiModArray = Array.from(uiModNodeList);
  let uiModeBackArray = Array.from(uiModeBackList);



  if (
    document.body.scrollTop > 1100 ||
    document.documentElement.scrollTop > 1100
  ) {
    $(".goto").addClass("appear");
    subMenu.style.display = "block";
    $("#subMenuNav").addClass("flipInX");
    for (let i = 0; i < uiModArray.length; i++) {
      uiModArray[i].style.color = "#10b6f3";
      // uiModArray[i].classList.add("shadow");
    }
    for (let i = 0; i < uiModeBackArray.length; i++) {
      uiModeBackArray[i].style.backgroundColor = "#10b6f3";
      // uiModeBackArray[i].classList.add("shadow");
    }
  } else if (
    document.body.scrollTop < 1100 ||
    document.documentElement.scrollTop < 1100
  ) {
    subMenu.style.display = "none";
    $(".goto").removeClass("appear");
    for (let i = 0; i < uiModArray.length; i++) {
      uiModArray[i].style.color = "#fff";
      // uiModArray[i].removeClass("shadow");
    }
    for (let i = 0; i < uiModeBackArray.length; i++) {
      uiModeBackArray[i].style.backgroundColor = "#fff";
      // uiModeBackArray[i].removeClass("shadow");
    }
  }


  // progress bar 
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  
}





