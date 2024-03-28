$(document).ready(function() {
    $('a').click(function() {
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top - 120
      }, 1000);
    });
    
    window.addEventListener("load", function() {
      const text = document.querySelector(".id");
      text.style.opacity = "1";
      text.style.transform = "translateY(0)";
    });
  });
    
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
    
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
    
  window.addEventListener("scroll", reveal);