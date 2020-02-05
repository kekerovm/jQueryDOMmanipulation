$(document).ready(function() {
  $("#tabs").on("click", "a", function() {
    $(".content").removeClass("show")
    $(this)
      .find("+ .content")
      .addClass("show")
  })
})
