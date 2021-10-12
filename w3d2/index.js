$(document).ready(function () {
  var interval;

  $(".start").on("click", function () {
    var width = $("#width").val();
    var amount = $("#amount").val();
    var rate = $("#rate").val();
    var circle = $("#circle").val();
    var container = $(".bubble-container");
    var whole = "";

    if (width < 0 || amount < 0 || rate < 0 || circle < 0) {
      alert("Please write valid number");
      return;
    }

    clearInterval(interval);

    for (var i = 0; i < circle; i++) {
      var randomColor =
        "#" +
        ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(
          -6
        );

      var element = `<div class="border" style="
      background-color: ${randomColor}; 
      height: ${width}px; 
      width: ${width}px;
      position: absolute;
      left: ${Math.floor(Math.random() * 900)}px;
      top: ${Math.floor(Math.random() * 900)}px;
      "></div>`;
      whole += element;
    }

    container.empty();
    container.append(whole);

    interval = setInterval(() => {
      $(".border").each(function () {
        $(this).css("width", parseInt(amount) + parseInt($(this).css("width")));
        $(this).css(
          "height",
          parseInt(amount) + parseInt($(this).css("height"))
        );
      });
    }, rate);
  });

  $(".bubble-container").on("click", ".border", function () {
    $(this).remove();
  });
});
