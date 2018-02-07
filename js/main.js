$(document).ready(function(){
    $("nav ul li a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
//    e.preventDefault();

    // store hash
    var hash = this.hash;
    if (hash == "#services") {
       $('html, body').animate({scrollTop: 0}, 1000, 'swing');
        //window.location.hash = "";
    } else {
        var scrollToPosition = $(hash).position().top - 100;
        $('html, body').animate({scrollTop: scrollToPosition}, 1000, 'swing');
    }
    // animate
    window.location.hash = hash;
    return false;
  });
    $('[data-toggle="tooltip"]').tooltip();
    
    $(window).scroll(function () {
        if ($("#header").hasClass("affix")) {
                $('.navbar .container-logo img').attr('src', 'images/LYNX-LOGO_SM.png');
        }
        
        else  {$('.navbar .container-logo img').attr('src', 'images/LYNX-LOGO.png');
              }
    });
        
});

$(function () {

  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $('#contact-form').validator();


  // when the form is submitted
  $('#contact-form').on('submit', function (e) {

    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "contact.php";

      // POST values in the background the the script URL
      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function (data)
        {
          // data = JSON object that contact.php returns

          // we recieve the type of the message: success x danger and apply it to the
          var messageAlert = 'alert-' + data.type;
          var messageText = data.message;

          // let's compose Bootstrap alert box HTML
          var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

          // If we have messageAlert and messageText
          if (messageAlert && messageText) {
            // inject the alert to .messages div in our form
            $('#contact-form').find('.messages').html(alertBox);
            // empty the form
            $('#contact-form')[0].reset();
          }
        }
      });
      return false;
    }
  })
});

