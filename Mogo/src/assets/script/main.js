window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementById("header").style.backgroundColor = "#f38281";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}
