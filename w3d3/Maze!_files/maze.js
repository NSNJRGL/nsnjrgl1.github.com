$(document).ready(function () {
  function offEvent() {
    $(".boundary").off();
    $("#end").off();
  }

  function onLose() {
    $(".boundary").css("background-color", "red");
    $("#status").text("You lose");
    offEvent();
  }

  $("#start").on("click", function () {
    $(".boundary").css("background-color", "#eeeeee");
    $("#status").text("Let's start");

    $("#maze").on("mouseleave", function () {
      onLose();
    });

    $(".boundary").on("mouseover", function () {
      onLose();
    });

    $("#end").on("mouseover", function () {
      $("#status").text("You win");
      offEvent();
    });
  });
});
