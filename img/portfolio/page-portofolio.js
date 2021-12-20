// Pagination
function loadMore() {
    var num = $("#portofolio").find("li").length;
    var i = num;
  
    if(i<=6){
        $(".gallery-button button").hide();
    }
    else {
        $(".gallery-button button").show();
    }
  
    $("li.templates").slice(0, 6).show();
    $(".gallery-button button").on('click', function (e) {
        e.preventDefault();
        $("li.portofolio:hidden").slice(0, 6).slideDown();
        if ($("li.portofolio:hidden").length == 0) {
            $(".gallery-button button").fadeOut('slow');
        }
        // $('html,body').animate({
        //     scrollTop: $(this).offset().top
        // }, 1500);
    });
  }