$(document).ready(function() {
  $(".nav ul li").each(function(index) {
    $(".nav ul li").eq(index).hover(function() {
      $(this).addClass("on");
      $(this).prevAll("li").removeClass("on");
      $(this).nextAll("li").removeClass("on");

      if (index < 3) {
        $(".nav-box").show();
      } else {
        $(".nav-box").hide();
      }

      var tab = $(this).attr("data-tab");

      $("#"+tab).show();
      $("#"+tab).prevAll("div").hide();
      $("#"+tab).nextAll("div").hide();
    });

    // $(".like").hover(function() {
    //   $(this).css('background', 'url(http://www.elumdesigns.com/pub/static/version1502483131/frontend/Elum/default/en_US/images/icon-fav-hover.png) no-repeat');
    // }, function() {
    //   $(this).css('background', 'url(http://www.elumdesigns.com/pub/static/version1502483131/frontend/Elum/default/en_US/images/icon-fav-outline.png)');
    // });

    $('.like').click(function() {
      var isChecked = ($(this).attr('isChecked') == 'true');

      if (isChecked) { // 이미 좋아요를 눌렀을 때
        $(this).css('background', 'url(http://www.elumdesigns.com/pub/static/version1502483131/frontend/Elum/default/en_US/images/icon-fav-outline.png)');
        $(this).attr('isChecked', 'false');
      } else { // 좋아요를 누른 상태가 아닐 때
        $(this).css('background', 'url(http://www.elumdesigns.com/pub/static/version1502483131/frontend/Elum/default/en_US/images/icon-fav-active.png) no-repeat');
        $(this).attr('isChecked', 'true');
      }
    });
  });
});
