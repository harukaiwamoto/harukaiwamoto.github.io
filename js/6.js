window.addEventListener('scroll', function() {
    var fadeInElements = document.querySelectorAll('.fade-in-element');
    fadeInElements.forEach(function(element) {
      element.style.opacity = 1;
    });
  });