$(window).on("keydown", function(event) {
  var currentIndex = $("#imageIndexHide").val();
  var max = $("#imagesLength").val();

  if ((event.keyCode == 37 || event.keyCode == 38) && currentIndex > 1) {
    currentIndex--;
    $("#imageIndex").text(currentIndex);
    $("#imageIndexHide").val(currentIndex);
    $(".slider-img").fadeOut(0);
    $(".slider-img:nth-child(" + currentIndex + ")").fadeIn();
  }

  if ((event.keyCode == 39 || event.keyCode == 40) && currentIndex < max) {
    currentIndex++;
    $("#imageIndex").text(currentIndex);
    $("#imageIndexHide").val(currentIndex);
    $(".slider-img").fadeOut(0);
    $(".slider-img:nth-child(" + currentIndex + ")").fadeIn();
  }
});

$(".arrow-left").on("click", function(event) {
    var currentIndex = $("#imageIndexHide").val();

  if (currentIndex > 1) {
    currentIndex--;
    $("#imageIndex").text(currentIndex);
    $("#imageIndexHide").val(currentIndex);
    $(".slider-img").fadeOut(0);
    $(".slider-img:nth-child(" + currentIndex + ")").fadeIn();
  }
});


$(".arrow-right").on("click", function(event) {
    var currentIndex = $("#imageIndexHide").val();
    var max = $("#imagesLength").val();

    if (currentIndex < max) {
        currentIndex++;
        $("#imageIndex").text(currentIndex);
        $("#imageIndexHide").val(currentIndex);
        $(".slider-img").fadeOut(0);
        $(".slider-img:nth-child(" + currentIndex + ")").fadeIn();
      }
  });
