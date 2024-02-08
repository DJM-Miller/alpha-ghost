function goTop(){
    // Check if the browser supports smooth scrolling
    if ('scrollBehavior' in document.documentElement.style) {
      // Modern browsers with smooth scrolling support
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Fallback for browsers that do not support smooth scrolling
      window.scrollTo(0, 0);
    }
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-black";
      } else {
          navbar.classList.remove("w3-card", "w3-animate-top", "w3-black");
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
    var x = document.getElementById("navDemo");
    x.classList.toggle("w3-show");
  }