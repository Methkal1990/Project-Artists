window.onscroll = function() {
  initiateNavigation();
};

function initiateNavigation() {
  let uiModNodeList = document.querySelectorAll(".uiMod");
  let uiModeBackList = document.querySelectorAll(".uiModBack");

  let uiModArray = Array.from(uiModNodeList);
  let uiModeBackArray = Array.from(uiModeBackList);
  console.log(uiModeBackArray);
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    for (let i = 0; i < uiModArray.length; i++) {
      uiModArray[i].style.color = "#333";
    }
    for (let i = 0; i < uiModeBackArray.length; i++) {
      uiModeBackArray[i].style.backgroundColor = "#333";
    }
  } else if (
    document.body.scrollTop < 500 ||
    document.documentElement.scrollTop < 500
  ) {
    for (let i = 0; i < uiModArray.length; i++) {
      uiModArray[i].style.color = "#fff";
    }
    for (let i = 0; i < uiModeBackArray.length; i++) {
      uiModeBackArray[i].style.backgroundColor = "#fff";
    }
  }
}
//parallax example
var image = document.getElementsByClassName("image");
new simpleParallax(image, {
  delay: 0.8,
  transition: "cubic-bezier(0,0,0,1)",
});
