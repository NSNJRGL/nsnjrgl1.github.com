$(document).ready(function () {
  $("#questionForm").submit(() => {
    const data = {
      question: $("#question").val(),
    };
    $.get({
      url: "/8ball",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
    })
      .done((data) => {
        $("#question").val(data);
      })
      .fail(() => {});
    return false;
  });
});
