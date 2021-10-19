$(function () {
  $("#addCart").on("submit", function () {
    const data = {
      name: $("#name").val(),
      price: $("#price").val(),
    };

    $.post({
      url: "/addToCart",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
    })
      .done(function (data) {
        $("#cartCounter").text(data);
        $("#success").css("display", "block");
        setTimeout(() => {
          $("#success").css("display", "none");
        }, 2000);
      })
      .fail(function () {});

    return false;
  });
});
