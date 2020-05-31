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

var dropdown = document.getElementsByClassName("dropdown-btn");
// var i;

for (var i = 0; i < dropdown.length; i++) {
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






const ipad = [{
        id: 1,
        src: "images/ipad-pro-12-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi 512GB Space Gray",
        price: 1499,
        capacity: 512,
        color: "spacegray",
        model: "ipadpro",
        lte: "wifi",
        screen: "12.9"
    },
    {
        id: 2,
        src: "images/ipad-pro-12-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi 512GB Silver",
        price: 1499,
        capacity: 512,
        color: "silver",
        model: "ipadpro",
        lte: "wifi",
        screen: "12.9"
    },
    {
        id: 3,
        src: "images/ipad-pro-12-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi 256GB Space Gray",
        price: 1299,
        capacity: 256,
        color: "spacegray",
        model: "ipadpro",
        lte: "wifi",
        screen: "12.9"
    },
    {
        id: 4,
        src: "images/ipad-pro-12-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi 255GB Silver",
        price: 1299,
        capacity: 256,
        color: "silver",
        model: "ipadpro",
        lte: "wifi",
        screen: "12.9"
    },
    {
        id: 5,
        src: "images/ipad-pro-12-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi 1TB Space Gray",
        price: 1749,
        capacity: 1024,
        color: "spacegray",
        model: "ipadpro",
        lte: "wifi",
        screen: "12.9"
    },
    {
        id: 6,
        src: "images/ipad-pro-12-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi 1TB Silver",
        price: 1749,
        capacity: 1024,
        color: "silver",
        model: "ipadpro",
        lte: "wifi",
        screen: "12.9"
    },
    {
        id: 7,
        src: "images/ipad-pro-12-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi 128GB Space Gray",
        price: 1099,
        capacity: 128,
        color: "spacegray",
        model: "ipadpro",
        lte: "wifi",
        screen: "12.9"
    },
    {
        id: 8,
        src: "images/ipad-pro-12-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi 128GB Silver",
        price: 1099,
        capacity: 128,
        color: "silver",
        model: "ipadpro",
        lte: "wifi",
        screen: "12.9"
    },
    {
        id: 9,
        src: "images/ipad-pro-12-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi+LTE 512GB Space Gray",
        price: 1699,
        capacity: 512,
        color: "spacegray",
        model: "ipadpro",
        lte: "lte",
        screen: "12.9"
    },
    {
        id: 10,
        src: "images/ipad-pro-12-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi+LTE 512GB Silver",
        price: 1699,
        capacity: 512,
        color: "silver",
        model: "ipadpro",
        lte: "lte",
        screen: "12.9"
    },
    {
        id: 11,
        src: "images/ipad-pro-12-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi+LTE 256GB Space Gray",
        price: 1399,
        capacity: 256,
        color: "spacegray",
        model: "ipadpro",
        lte: "lte",
        screen: "12.9"
    },
    {
        id: 12,
        src: "images/ipad-pro-12-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi+LTE 256GB Silver",
        price: 1399,
        capacity: 256,
        color: "silver",
        model: "ipadpro",
        lte: "lte",
        screen: "12.9"
    },
    {
        id: 13,
        src: "images/ipad-pro-12-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi+LTE 1TB Space Gray",
        price: 1849,
        capacity: 1024,
        color: "spacegray",
        model: "ipadpro",
        lte: "lte",
        screen: "12.9"
    },
    {
        id: 14,
        src: "images/ipad-pro-12-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi+LTE 1TB Silver",
        price: 1849,
        capacity: 1024,
        color: "silver",
        model: "ipadpro",
        lte: "lte",
        screen: "12.9"
    },
    {
        id: 15,
        src: "images/ipad-pro-12-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi+LTE 128GB Space Gray",
        price: 1299,
        capacity: 128,
        color: "spacegray",
        model: "ipadpro",
        lte: "lte",
        screen: "12.9"
    },
    {
        id: 16,
        src: "images/ipad-pro-12-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 12.9 2020 Wi-Fi+LTE 128GB Silver",
        price: 1299,
        capacity: 128,
        color: "silver",
        model: "ipadpro",
        lte: "lte",
        screen: "12.9"
    },
    {
        id: 16,
        src: "images/ipad-pro-11-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi 512GB Space Gray",
        price: 1299,
        capacity: 512,
        color: "spacegray",
        model: "ipadpro",
        lte: "wifi",
        screen: "11"
    },
    {
        id: 17,
        src: "images/ipad-pro-11-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi 512GB Silver",
        price: 1299,
        capacity: 512,
        color: "silver",
        model: "ipadpro",
        lte: "wifi",
        screen: "11"
    },
    {
        id: 18,
        src: "images/ipad-pro-11-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi 256GB Space Gray",
        price: 999,
        capacity: 256,
        color: "spacegray",
        model: "ipadpro",
        lte: "wifi",
        screen: "11"
    },
    {
        id: 19,
        src: "images/ipad-pro-11-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi 256GB Silver",
        price: 999,
        capacity: 256,
        color: "silver",
        model: "ipadpro",
        lte: "wifi",
        screen: "11"
    },
    {
        id: 20,
        src: "images/ipad-pro-11-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi 128GB Space Gray",
        price: 899,
        capacity: 128,
        color: "spacegray",
        model: "ipadpro",
        lte: "wifi",
        screen: "11"
    },
    {
        id: 21,
        src: "images/ipad-pro-11-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi 128GB Silver",
        price: 899,
        capacity: 128,
        color: "silver",
        model: "ipadpro",
        lte: "wifi",
        screen: "11"
    },
    {
        id: 20,
        src: "images/ipad-pro-11-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi+LTE 512GB Space Gray",
        price: 1349,
        capacity: 512,
        color: "spacegray",
        model: "ipadpro",
        lte: "lte",
        screen: "11"
    },
    {
        id: 21,
        src: "images/ipad-pro-11-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi+LTE 512GB Silver",
        price: 1349,
        capacity: 512,
        color: "silver",
        model: "ipadpro",
        lte: "lte",
        screen: "11"
    },
    {
        id: 22,
        src: "images/ipad-pro-11-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi+LTE 256GB Space Gray",
        price: 1199,
        capacity: 256,
        color: "spacegray",
        model: "ipadpro",
        lte: "lte",
        screen: "11"
    },
    {
        id: 23,
        src: "images/ipad-pro-11-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi+LTE 256GB Silver",
        price: 1199,
        capacity: 256,
        color: "silver",
        model: "ipadpro",
        lte: "lte",
        screen: "11"
    },
    {
        id: 24,
        src: "images/ipad-pro-11-select-cell-spacegray-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi+LTE 128GB Space Gray",
        price: 1049,
        capacity: 128,
        color: "spacegray",
        model: "ipadpro",
        lte: "lte",
        screen: "11"
    },
    {
        id: 25,
        src: "images/ipad-pro-11-select-cell-silver-202003-geo-ru-400x400.png",
        title: "iPad Pro 11 2020 Wi-Fi+LTE 128GB Silver",
        price: 1049,
        capacity: 128,
        color: "silver",
        model: "ipadpro",
        lte: "lte",
        screen: "11"
    },
    {
        id: 26,
        src: "images/ipad-mini-select-wifi-gold-201903-geo-ru-400x400.png",
        title: "Apple IPad Mini 5 Wi-Fi 64gb Gold 2019",
        price: 399,
        capacity: 64,
        color: "gold",
        model: "ipadmini",
        lte: "wifi",
        screen: "7.9"
    },
    {
        id: 27,
        src: "images/ipad-mini-select-wifi-spacegray-201903-geo-ru-400x400.png",
        title: "Apple IPad Mini 5 Wi-Fi 64gb Space Gray 2019",
        price: 399,
        capacity: 64,
        color: "spacegray",
        model: "ipadmini",
        lte: "wifi",
        screen: "7.9"
    },
    {
        id: 28,
        src: "images/ipad-mini-select-wifi-gold-201903-geo-ru-400x400.png",
        title: "Apple IPad Mini 5 Wi-Fi+LTE 256gb Gold 2019",
        price: 749,
        capacity: 256,
        color: "gold",
        model: "ipadmini",
        lte: "lte",
        screen: "7.9"
    },
    {
        id: 29,
        src: "images/ipad-mini-select-wifi-spacegray-201903-geo-ru-400x400.png",
        title: "Apple IPad Air 10.5 Wi-Fi 256gb Space Gray 2019",
        price: 599,
        capacity: 256,
        color: "spacegray",
        model: "ipadair",
        lte: "wifi",
        screen: "10.5"
    },
    {
        id: 30,
        src: "images/ipad-mini-select-wifi-gold-201903-geo-ru-400x400.png",
        title: "Apple IPad Air 10.5 Wi-Fi 64gb Gold 2019",
        price: 499,
        capacity: 64,
        color: "gold",
        model: "ipadair",
        lte: "wifi",
        screen: "10.5"
    },
    {
        id: 31,
        src: "images/ipad-air-select-wifi-silver-201903-geo-ru-400x400.png",
        title: "Apple IPad Air 10.5 Wi-Fi 64gb Silver 2019",
        price: 499,
        capacity: 64,
        color: "silver",
        model: "ipadair",
        lte: "wifi",
        screen: "10.5"
    },
    {
        id: 32,
        src: "images/ipad-mini-select-wifi-spacegray-201903-geo-ru-400x400.png",
        title: "Apple IPad Air 10.5 Wi-Fi 64GB Space Gray 2019",
        price: 499,
        capacity: 64,
        color: "spacegray",
        model: "ipadair",
        lte: "wifi",
        screen: "10.5"
    },

]
let ipadArray = ipad.map(a => a);


function showGadget(src, title, price, capacity, color, model) {
    return `<div class="iphone__item ${color} ${capacity} ${model}">
    <a href="index.html">
    <img src=${src} alt="airpods">
    <p class="iphone__item-title">${title}</p>
    <p class="iphone__item-price">$<span class="price">${price}</span></p>
    <button class="related__block-button">ADD TO CART</button>
</a>
</div>`
}

function showSorted(ipad) {
    document.getElementsByClassName("iphones__catalog-content")[0].innerHTML = "";
    ipad.forEach(function(item) {
        // console.log(item.src, item.title, item.price, item.capacity, item.color);
        document.getElementsByClassName("iphones__catalog-content")[0].innerHTML += showGadget(item.src, item.title, item.price, item.capacity, item.color);
    })
}
showSorted(ipadArray);


function sort() {
    if (document.getElementById('Sort').value == "pricelowtohigh") {
        pricelowtohigh(ipadArray)
    } else if (document.getElementById('Sort').value == "pricehightolow") {
        pricehightolow(ipadArray)
    } else if (document.getElementById('Sort').value == "nameaz") {
        nameaz(ipadArray)
    } else if (document.getElementById('Sort').value == "nameza") {
        nameza(ipadArray)
    } else if (document.getElementById('Sort').value == "default") {
        defaultSort(ipadArray);
    }
}

function pricelowtohigh(ipad) {
    ipad.sort((a, b) => {
            if (a.price > b.price) {
                return 1
            }
            if (a.price < b.price) {
                return -1
            }
            return 0;
        })
        // console.log(iphones);
    showSorted(ipad);
}

function pricehightolow(ipad) {
    ipad.sort((a, b) => {
            if (a.price > b.price) {
                return -1
            }
            if (a.price < b.price) {
                return 1
            }
            return 0;
        })
        // console.log(iphones);
    showSorted(ipad);
}

function nameaz(ipad) {
    ipad.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            }
            if (a.title < b.title) {
                return -1
            }
            return 0;
        })
        // console.log(iphones);
    showSorted(ipad);
}

function nameza(ipad) {
    ipad.sort((a, b) => {
            if (a.title > b.title) {
                return -1
            }
            if (a.title < b.title) {
                return 1
            }
            return 0;
        })
        // console.log(iphones);
    showSorted(ipad);
}

function defaultSort(ipad) {
    ipad.sort((a, b) => {
            if (a.id > b.id) {
                return 1
            }
            if (a.id < b.id) {
                return -1
            }
            return 0;
        })
        // console.log(iphones);
    showSorted(ipad);
}




function filter() {
    // let filteredArray = []
    // let filteredArray = iphones.map(a => a);
    // console.log(filteredArray);
    let filters = [];
    filters.push(document.querySelectorAll('.filter__name input:checked'));
    filters.push(document.querySelectorAll('.filter__memory input:checked'));
    filters.push(document.querySelectorAll('.filter_color input:checked'));
    filters.push(document.querySelectorAll('.filter__lte input:checked'));
    filters.push(document.querySelectorAll('.filter__screen input:checked'));
    // console.log(filters);
    // let name = document.querySelectorAll('.filter__name input:checked');
    let nameFiltered = filterByName(filters[0]);
    // console.log(nameFiltered);
    let capacityFiltered = filterByCapacity(filters[1]);
    // console.log(capacityFiltered);
    let colorFiltered = filterByColor(filters[2]);
    let wirelessFiltered = filterByWireless(filters[3]);
    ipadArray = filterByScreen(filters[4]);
    // console.log(filtered);
    showSorted(ipadArray);

    function filterByName(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            return ipad
        }
        for (let i = 0; i < ipad.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (ipad[i].model == arr[j].name) {
                    filteredArray.push(ipad[i]);
                }

            }
        }
        // console.log(filteredArray);
        return filteredArray
    }


    function filterByCapacity(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            filteredArray = nameFiltered;
            return filteredArray
        }
        for (let i = 0; i < nameFiltered.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (nameFiltered[i].capacity == arr[j].name) {
                    filteredArray.push(nameFiltered[i]);
                }

            }
        }
        // console.log(filteredArray);
        return filteredArray
    }

    function filterByColor(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            filteredArray = capacityFiltered;
            return filteredArray;
        }
        for (let i = 0; i < capacityFiltered.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (capacityFiltered[i].color == arr[j].name) {
                    filteredArray.push(capacityFiltered[i]);
                }

            }
        }
        // console.log(filteredArray);
        return filteredArray
    }


    function filterByWireless(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            filteredArray = colorFiltered;
            return filteredArray;
        }
        // console.log(colorFiltered);
        for (let i = 0; i < colorFiltered.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (colorFiltered[i].lte == arr[j].name) {
                    filteredArray.push(colorFiltered[i]);
                }

            }
        }
        // console.log(filteredArray);
        return filteredArray
    }

    function filterByScreen(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            filteredArray = wirelessFiltered;
            return filteredArray;
        }
        // console.log(colorFiltered);
        for (let i = 0; i < wirelessFiltered.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (wirelessFiltered[i].screen == arr[j].name) {
                    filteredArray.push(wirelessFiltered[i]);
                }

            }
        }
        // console.log(filteredArray);
        return filteredArray
    }

}

function filterApplyMobile() {
    // let filteredArray = []
    // let filteredArray = iphones.map(a => a);
    // console.log(filteredArray);
    let filters = [];
    filters.push(document.querySelectorAll('.filter__name input:checked'));
    filters.push(document.querySelectorAll('.filter__memory input:checked'));
    filters.push(document.querySelectorAll('.filter_color input:checked'));
    filters.push(document.querySelectorAll('.filter__lte input:checked'));
    filters.push(document.querySelectorAll('.filter__screen input:checked'));
    // console.log(filters);
    // let name = document.querySelectorAll('.filter__name input:checked');
    let nameFiltered = filterByName(filters[0]);
    // console.log(nameFiltered);
    let capacityFiltered = filterByCapacity(filters[1]);
    // console.log(capacityFiltered);
    let colorFiltered = filterByColor(filters[2]);
    let wirelessFiltered = filterByWireless(filters[3]);
    ipadArray = filterByScreen(filters[4]);
    // console.log(filtered);
    showSorted(ipadArray);

    function filterByName(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            return ipad
        }
        for (let i = 0; i < ipad.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (ipad[i].model == arr[j].name) {
                    filteredArray.push(ipad[i]);
                }

            }
        }
        // console.log(filteredArray);
        return filteredArray
    }


    function filterByCapacity(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            filteredArray = nameFiltered;
            return filteredArray
        }
        for (let i = 0; i < nameFiltered.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (nameFiltered[i].capacity == arr[j].name) {
                    filteredArray.push(nameFiltered[i]);
                }

            }
        }
        // console.log(filteredArray);
        return filteredArray
    }

    function filterByColor(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            filteredArray = capacityFiltered;
            return filteredArray;
        }
        for (let i = 0; i < capacityFiltered.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (capacityFiltered[i].color == arr[j].name) {
                    filteredArray.push(capacityFiltered[i]);
                }

            }
        }
        // console.log(filteredArray);
        return filteredArray
    }


    function filterByWireless(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            filteredArray = colorFiltered;
            return filteredArray;
        }
        // console.log(colorFiltered);
        for (let i = 0; i < colorFiltered.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (colorFiltered[i].lte == arr[j].name) {
                    filteredArray.push(colorFiltered[i]);
                }

            }
        }
        // console.log(filteredArray);
        return filteredArray
    }

    function filterByScreen(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            filteredArray = wirelessFiltered;
            return filteredArray;
        }
        // console.log(colorFiltered);
        for (let i = 0; i < wirelessFiltered.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (wirelessFiltered[i].screen == arr[j].name) {
                    filteredArray.push(wirelessFiltered[i]);
                }

            }
        }
        // console.log(filteredArray);
        return filteredArray
    }
    hideFilter();

}




function openFilters() {
    document.getElementsByClassName("iphones__filters")[0].style.display = "block";
    document.getElementsByClassName("iphones__catalog-content")[0].style.opacity = "0.2";
}

function hideFilter() {
    document.getElementsByClassName("iphones__filters")[0].style.display = "none";
    document.getElementsByClassName("iphones__catalog-content")[0].style.opacity = "1";

}