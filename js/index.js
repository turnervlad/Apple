// slider
var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
//   dropdown-mobile
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}  

// Burger

function openBurger(e) {
    document.getElementById("openBurger").style.display = "none";
    document.getElementById("hideBurger").style.display = "block";
    document.getElementById('mobileMenu').style.display = "block";    
}

function hideBurger(e) {
    document.getElementById("openBurger").style.display = "block";
    document.getElementById("hideBurger").style.display = "none";
    document.getElementById('mobileMenu').style.display = "none";
}
