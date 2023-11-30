let to1 = $("#to1");
let to2 = $("#to2");
let to3 = $("#to3");
let to4 = $("#to4");
let to5 = $("#to5");
to1.click(function () {
  $("#a_complex").css({ animation: "dark 3s" });
});
to2.click(function () {
  $("#map_area").css({ animation: "dark 3s" });
});
to3.click(function () {
  $("#third_section").css({ animation: "dark 3s" });
});
to4.click(function () {
  $("#fourth_section").css({ animation: "dark 3s" });
});
to5.click(function () {
  $("#footer").css({ animation: "dark 3s" });
});
$(document).ready(function () {
  $(".burger_button").click(function (event) {
    $(".burger_button, .menu, body").toggleClass("active");
  });
});
//СВЕРХУ АНИМАЦИЯ ПРИ ПЕРЕХОДАХ
let playButton = $(".play_button");
let videoElem = $("video");
function PlayVideo() {
  if (video.paused == true) {
    video.play();
  } else {
    video.pause();
  }
}
function PlayButton() {
  if (video.paused == true) {
    playButton.css({ display: "block" });
  } else {
    playButton.css({ display: "none" });
  }
}
//Сверху видео доделал ура!
let tel_input = document.querySelectorAll("input[type='tel']");
Inputmask("7 (999) 999-99-99").mask(tel_input);
