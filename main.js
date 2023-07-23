$(document).ready(function () {


    $(".__mobile_menu_icon").click(()=>{
        $("._links").addClass("active")

        $("._links a").click(()=>{
            $("._links").removeClass("active");
        });

    })

    $("._links .fa-circle-xmark").click(()=>{
        $("._links").removeClass("active")
    })

    $(window).scroll(function() {

        // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
        var scroll = $(window).scrollTop();
    
        var objectSelect = $("#service");
    
        // .offset() retrieves current position of element relative to document
        var objectPosition = objectSelect.offset().top;
    
        if (scroll > objectPosition) {
          $('.nav_bar').addClass('displayNav');
        } else {
          $('.nav_bar').removeClass('displayNav');
        }
      });
    
});