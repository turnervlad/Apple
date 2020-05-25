function openBurger(e) {
    document.getElementById("openBurger").style.display = "none";
    document.getElementById("hideBurger").style.display = "block";
    document.getElementById('mobileMenu').style.display = "block";
    console.log(e.src);
}

function hideBurger(e) {
    document.getElementById("openBurger").style.display = "block";
    document.getElementById("hideBurger").style.display = "none";
    document.getElementById('mobileMenu').style.display = "none";
}

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
}

function checkOut(e) {
    // emptyBag(e);
    document.getElementsByClassName("checkout__total")[0].innerHTML = "0";
    document.getElementsByClassName("header__bag-total")[0].innerHTML = "0";
    e.parentElement.parentElement.previousElementSibling.innerHTML =
        `<div class="bag__thanx">Thank you for your purchase</div>`;
}
// ipad////////////////////////////////////////////////////////////////////////







//iphones//////////////////////////////////////////////////////////////////////
const iphones = [{
        src: "images/iphone-se-64gb-black-mx9r2fs-400x400.png",
        title: "iPhone SE 64Gb Black",
        price: 399,
        capacity: 64,
        color: "black",
        model: "se",
        id: 1
    },
    {
        src: "images/apple-iphone-se-2020-64gb-red-mx9u2-400x400.png",
        title: "iPhone SE 64Gb Red",
        price: 399,
        capacity: 64,
        color: "red",
        model: "se",
        id: 2
    },
    {
        src: "images/apple-iphone-se-2020-64gb-white-mx9t2-400x400.png",
        title: "iPhone SE 64Gb White",
        price: 399,
        capacity: 64,
        color: "white",
        model: "se",
        id: 3
    },
    {
        src: "images/iphone-se-64gb-black-mx9r2fs-400x400.png",
        title: "iPhone SE 128Gb Black",
        price: 449,
        capacity: 128,
        color: "black",
        model: "se",
        id: 4
    },
    {
        src: "images/apple-iphone-se-2020-64gb-red-mx9u2-400x400.png",
        title: "iPhone SE 128Gb Red",
        price: 449,
        capacity: 128,
        color: "red",
        model: "se",
        id: 5
    },
    {
        src: "images/apple-iphone-se-2020-64gb-white-mx9t2-400x400.png",
        title: "iPhone SE 128Gb White",
        price: 449,
        capacity: 128,
        color: "white",
        model: "se",
        id: 6
    },
    {
        src: "images/iphone11-black-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 64Gb Black",
        price: 799,
        capacity: 64,
        color: "black",
        model: "11",
        id: 7
    },
    {
        src: "images/iphone11-red-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 64Gb Red",
        price: 799,
        capacity: 64,
        color: "red",
        model: "11",
        id: 8
    },
    {
        src: "images/iphone11-white-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 64Gb White",
        price: 799,
        capacity: 64,
        color: "white",
        model: "11",
        id: 9
    },
    {
        src: "images/iphone11-black-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 128Gb Black",
        price: 849,
        capacity: 128,
        color: "black",
        model: "11",
        id: 10
    },
    {
        src: "images/iphone11-red-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 128Gb Red",
        price: 849,
        capacity: 128,
        color: "red",
        model: "11",
        id: 11
    },
    {
        src: "images/iphone11-white-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 128Gb White",
        price: 849,
        capacity: 128,
        color: "white",
        model: "11",
        id: 12
    },
    {
        src: "images/iphone11-black-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 256Gb Black",
        price: 949,
        capacity: 256,
        color: "black",
        model: "11",
        id: 13
    },
    {
        src: "images/iphone11-red-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 256Gb Red",
        price: 949,
        capacity: 256,
        color: "red",
        model: "11",
        id: 14
    },
    {
        src: "images/iphone11-white-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 256Gb White",
        price: 949,
        capacity: 256,
        color: "white",
        model: "11",
        id: 15
    },
    {
        src: "images/iphone-11-pro-midnight-green-select-2019-geo-emea-600x600.png",
        title: "iPhone 11 Pro 64Gb Midnight Green",
        price: 999,
        capacity: 64,
        color: "midnigth",
        model: "11pro",
        id: 16
    },
    {
        src: "images/iphone-11-pro-silver-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 Pro 64Gb Silver",
        price: 999,
        capacity: 64,
        color: "silver",
        model: "11pro",
        id: 17
    },
    {
        src: "images/iphone-11-pro-space-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 Pro 64Gb Space Gray",
        price: 999,
        capacity: 64,
        color: "spacegray",
        model: "11pro",
        id: 18
    },
    {
        src: "images/iphone-11-pro-midnight-green-select-2019-geo-emea-600x600.png",
        title: "iPhone 11 Pro 256Gb Midnight Green",
        price: 1149,
        capacity: 256,
        color: "green",
        model: "11pro",
        id: 19
    },
    {
        src: "images/iphone-11-pro-silver-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 Pro 256Gb Silver",
        price: 1149,
        capacity: 256,
        color: "silver",
        model: "11pro",
        id: 20
    },
    {
        src: "images/iphone-11-pro-space-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 Pro 256Gb Space Gray",
        price: 1149,
        capacity: 256,
        color: "spacegray",
        model: "11pro",
        id: 21
    },
    {
        src: "images/iphone-11-pro-midnight-green-select-2019-geo-emea-600x600.png",
        title: "iPhone 11 Pro 512Gb Midnight Green",
        price: 1349,
        capacity: 512,
        color: "green",
        model: "11pro",
        id: 22
    },
    {
        src: "images/iphone-11-pro-silver-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 Pro 512Gb Silver",
        price: 1349,
        capacity: 512,
        color: "silver",
        model: "11pro",
        id: 23
    },
    {
        src: "images/iphone-11-pro-space-select-2019-geo-emea-400x400.png",
        title: "iPhone 11 Pro 512Gb Space Gray",
        price: 1349,
        capacity: 512,
        color: "spacegray",
        model: "11pro",
        id: 24
    },
    {
        src: "images/img-2637-400x400.png",
        title: "iPhone 11 Pro Max 64Gb Midnight Green",
        price: 1099,
        capacity: 64,
        color: "green",
        model: "11promax",
        id: 25
    },
    {
        src: "images/img-2636-400x400.png",
        title: "iPhone 11 Pro Max 64Gb Silver",
        price: 1099,
        capacity: 64,
        color: "silver",
        model: "11promax",
        id: 26
    },
    {
        src: "images/img-2635-400x400.png",
        title: "iPhone 11 Pro Max 64Gb Space Gray",
        price: 1099,
        capacity: 64,
        color: "spacegray",
        model: "11promax",
        id: 27
    },
    {
        src: "images/img-2637-400x400.png",
        title: "iPhone 11 Pro Max 256Gb Midnight Green",
        price: 1249,
        capacity: 256,
        color: "green",
        model: "11promax",
        id: 28
    },
    {
        src: "images/img-2636-400x400.png",
        title: "iPhone 11 Pro Max 256Gb Silver",
        price: 1249,
        capacity: 256,
        color: "silver",
        model: "11promax",
        id: 29
    },
    {
        src: "images/img-2635-400x400.png",
        title: "iPhone 11 Pro Max 256Gb Space Gray",
        price: 1249,
        capacity: 256,
        color: "spacegray",
        model: "11promax",
        id: 30
    },
    {
        src: "images/img-2637-400x400.png",
        title: "iPhone 11 Pro Max 512Gb Midnight Green",
        price: 1449,
        capacity: 512,
        color: "green",
        model: "11promax",
        id: 31
    },
    {
        src: "images/img-2636-400x400.png",
        title: "iPhone 11 Pro Max 512Gb Silver",
        price: 1449,
        capacity: 512,
        color: "silver",
        model: "11promax",
        id: 32
    },
    {
        src: "images/img-2635-400x400.png",
        title: "iPhone 11 Pro Max 512Gb Space Gray",
        price: 1449,
        capacity: 512,
        color: "spacegray",
        model: "11promax",
        id: 33
    },
    {
        src: "images/iphone-xs-silver-400x400.jpg",
        title: "iPhone XS 64Gb Silver",
        price: 649,
        capacity: 64,
        color: "silver",
        model: "xs",
        id: 34
    },
    {
        src: "images/iphone-xs-space-gray-400x400.jpg",
        title: "iPhone XS 64Gb Space Gray",
        price: 649,
        capacity: 64,
        color: "spacegray",
        model: "xs",
        id: 35
    },
    {
        src: "images/iphone-xs-silver-400x400.jpg",
        title: "iPhone XS 256Gb Silver",
        price: 749,
        capacity: 256,
        color: "silver",
        model: "xs",
        id: 36
    },
    {
        src: "images/iphone-xs-space-gray-400x400.jpg",
        title: "iPhone XS 256Gb Space Gray",
        price: 749,
        capacity: 256,
        color: "spacegray",
        model: "xs",
        id: 37
    },
    {
        src: "images/apple-iphone-xr-400x400.jpg",
        title: "iPhone XR 64Gb Black",
        price: 599,
        capacity: 64,
        color: "black",
        model: "xr",
        id: 38
    },
    {
        src: "images/apple-iphone-red-xr-400x400.jpg",
        title: "iPhone XR 64Gb Red",
        price: 599,
        capacity: 64,
        color: "red",
        model: "xr",
        id: 39
    },
    {
        src: "images/apple-iphone-white-xr-400x400.jpg",
        title: "iPhone XR 64Gb White",
        price: 599,
        capacity: 64,
        color: "white",
        model: "xr",
        id: 40
    },
    {
        src: "images/apple-iphone-xr-400x400.jpg",
        title: "iPhone XR 128Gb Black",
        price: 699,
        capacity: 128,
        color: "black",
        model: "xr",
        id: 41
    },
    {
        src: "images/apple-iphone-red-xr-400x400.jpg",
        title: "iPhone XR 128Gb Red",
        price: 699,
        capacity: 128,
        color: "red",
        model: "xr",
        id: 42
    },
    {
        src: "images/apple-iphone-white-xr-400x400.jpg",
        title: "iPhone XR 128Gb White",
        price: 699,
        capacity: 128,
        color: "white",
        model: "xr",
        id: 43
    }
]
let arrr = iphones.map(a => a);

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

function showSorted(iphones) {
    document.getElementsByClassName("iphones__catalog-content")[0].innerHTML = "";
    iphones.forEach(function(item) {
        // console.log(item.src, item.title, item.price, item.capacity, item.color);
        document.getElementsByClassName("iphones__catalog-content")[0].innerHTML += showGadget(item.src, item.title, item.price, item.capacity, item.color);
    })
}
showSorted(arrr);

function sort() {
    if (document.getElementById('Sort').value == "pricelowtohigh") {
        pricelowtohigh(arrr)
    } else if (document.getElementById('Sort').value == "pricehightolow") {
        pricehightolow(arrr)
    } else if (document.getElementById('Sort').value == "nameaz") {
        nameaz(arrr)
    } else if (document.getElementById('Sort').value == "nameza") {
        nameza(arrr)
    } else if (document.getElementById('Sort').value == "default") {
        defaultSort(arrr);
    }
}

function pricelowtohigh(iphones) {
    iphones.sort((a, b) => {
            if (a.price > b.price) {
                return 1
            }
            if (a.price < b.price) {
                return -1
            }
            return 0;
        })
        // console.log(iphones);
    showSorted(iphones);
}

function pricehightolow(iphones) {
    iphones.sort((a, b) => {
            if (a.price > b.price) {
                return -1
            }
            if (a.price < b.price) {
                return 1
            }
            return 0;
        })
        // console.log(iphones);
    showSorted(iphones);
}

function nameaz(iphones) {
    iphones.sort((a, b) => {
            if (a.title > b.title) {
                return 1
            }
            if (a.title < b.title) {
                return -1
            }
            return 0;
        })
        // console.log(iphones);
    showSorted(iphones);
}

function nameza(iphones) {
    iphones.sort((a, b) => {
            if (a.title > b.title) {
                return -1
            }
            if (a.title < b.title) {
                return 1
            }
            return 0;
        })
        // console.log(iphones);
    showSorted(iphones);
}

function defaultSort(iphones) {
    iphones.sort((a, b) => {
            if (a.id > b.id) {
                return 1
            }
            if (a.id < b.id) {
                return -1
            }
            return 0;
        })
        // console.log(iphones);
    showSorted(iphones);
}




function filter() {
    // let filteredArray = []
    // let filteredArray = iphones.map(a => a);
    // console.log(filteredArray);
    let filters = [];
    filters.push(document.querySelectorAll('.filter__name input:checked'));
    filters.push(document.querySelectorAll('.filter__memory input:checked'));
    filters.push(document.querySelectorAll('.filter_color input:checked'));
    // console.log(filters);
    // let name = document.querySelectorAll('.filter__name input:checked');
    let nameFiltered = filterByName(filters[0]);
    // console.log(nameFiltered);
    let capacityFiltered = filterByCapacity(filters[1]);
    // console.log(capacityFiltered);
    arrr = filterByColor(filters[2]);
    // console.log(filtered);
    showSorted(arrr);

    function filterByName(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            return iphones
        }
        for (let i = 0; i < iphones.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (iphones[i].model == arr[j].name) {
                    filteredArray.push(iphones[i]);
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
    // hideFilter();
}

function filterApplyMobile() {
    // let filteredArray = []
    // let filteredArray = iphones.map(a => a);
    // console.log(filteredArray);
    let filters = [];
    filters.push(document.querySelectorAll('.filter__name input:checked'));
    filters.push(document.querySelectorAll('.filter__memory input:checked'));
    filters.push(document.querySelectorAll('.filter_color input:checked'));
    // console.log(filters);
    // let name = document.querySelectorAll('.filter__name input:checked');
    let nameFiltered = filterByName(filters[0]);
    // console.log(nameFiltered);
    let capacityFiltered = filterByCapacity(filters[1]);
    // console.log(capacityFiltered);
    arrr = filterByColor(filters[2]);
    // console.log(filtered);
    showSorted(arrr);

    function filterByName(arr) {
        let filteredArray = [];
        if (arr.length == 0) {
            return iphones
        }
        for (let i = 0; i < iphones.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (iphones[i].model == arr[j].name) {
                    filteredArray.push(iphones[i]);
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