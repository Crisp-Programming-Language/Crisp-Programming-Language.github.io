   
    //Main Idea Image Fade
    var image = 1;
    const src = ["/assets/images/light-mode.png", "/assets/images/dark-mode.png"];
    const changeImg = function () {
      image = 1;
      $("#main-disp").show();
      var $img = $("<img>").attr("src", src[image-1]).css("z-index", "4").hide().prependTo(".main-idea .img")
      $img.fadeIn(2000);
      $("#main-disp").fadeOut(2000, function(){
            image = 2;
          $("#main-disp").attr("src", src[image-1]).css("z-index", "5");
          window.setTimeout(function() {
              $("#main-disp").fadeIn(2000);
              $img.fadeOut(2000, function() {
                $img.remove();
              }); 
              }, 4000); 
      });
    }
    window.setTimeout(function(){
        changeImg();
        window.setInterval(changeImg, 10000);
    }, 2000);
