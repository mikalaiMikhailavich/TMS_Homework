window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 525 ||
    document.documentElement.scrollTop > 525
  ) {
    document.getElementById("header").style.backgroundColor = "#353C65";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}
