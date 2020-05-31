
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


// BAG ///////////////////////////////////

function qntPlus(e) {
    e.previousElementSibling.innerHTML = Number(e.previousElementSibling.innerHTML) + 1;
    e.parentElement.nextElementSibling.children[0].innerHTML = Number(e.parentElement.previousElementSibling.children[0].innerHTML) * Number(e.previousElementSibling.innerHTML);
    updateSummary();
}

function qntMinus(e) {
    if (Number(e.nextElementSibling.innerHTML) <= 0) {
        return
    }
    e.nextElementSibling.innerHTML = Number(this.event.target.nextElementSibling.innerHTML) - 1;
    e.parentElement.nextElementSibling.children[0].innerHTML = Number(e.parentElement.previousElementSibling.children[0].innerHTML) * Number(e.nextElementSibling.innerHTML);
    updateSummary();
}

function removeItem(e) {
    this.event.target.parentElement.parentElement.remove();
    updateSummary();
}

function updateSummary() {
    let total = 0;
    for (const i of document.getElementsByClassName('final-price')) {
        // console.log(i.innerHTML);
        total += Number(i.innerHTML);
        // console.log(total);
    }
    document.getElementsByClassName("header__bag-total")[0].innerHTML = total;
    document.getElementsByClassName("checkout__total")[0].innerHTML = total;

    // console.log(document.getElementsByClassName("header__bag-total")[0].innerHTML);
}

function emptyBag(e) {
    e.parentElement.parentElement.previousElementSibling.innerHTML = `<div class="bag__thanx">Your shipping bag is empty.</div>`;
    document.getElementsByClassName("checkout__total")[0].innerHTML = "0";
    document.getElementsByClassName("header__bag-total")[0].innerHTML = "0";
    document.getElementsByClassName("header__bag-total")[1].innerHTML = "0";
}

function checkOut(e) {
    // emptyBag(e);
    document.getElementsByClassName("checkout__total")[0].innerHTML = "0";
    document.getElementsByClassName("header__bag-total")[0].innerHTML = "0";
    document.getElementsByClassName("header__bag-total")[1].innerHTML = "0";
    e.parentElement.parentElement.previousElementSibling.innerHTML =
        `<div class="bag__thanx">Thank you for your purchase</div>`;
}


