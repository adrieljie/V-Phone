const phones = [
    {
        name: "iPhone 14 Pro",
        price: 17499000,
        image: "asset/product/iPhone 14 Pro.jpeg",
        category: "camera"
    },
    {
        name: "ROG Phone 9",
        price: 10999000,
        image: "asset/product/ROG Phone 9.jpeg",
        category: "gaming"
    },
    {
        name: "vivo V40 Lite",
        price: 2850000,
        image: "asset/product/vivo V40 Lite.jpeg",
        category: "budget"
    },
    {
        name: "iQOO 12",
        price: 10499000,
        image:"asset/product/iQOO 12.jpeg",
        category: "gaming"
    },
    {
        name: "iPhone 15 Pro",
        price: 23999000,
        image: "asset/product/iPhone 15 Pro.jpeg",
        category: "camera"
    },
    {
        name: "POCO X6 5G",
        price: 3249000,
        image: "asset/product/POCO X6 5G.jpeg",
        category: "budget"
    },
    {
        name: "iPhone 15",
        price: 15499000,
        image: "asset/product/iPhone 15.jpeg",
        category: "camera"
    },
    {
        name: "OPPO Find X8",
        price: 9000000,
        image: "asset/product/Oppo Find X8.jpeg",
        category: "gaming"
    },
    {
        name: "Samsung S25",
        price: 20499000,
        image: "asset/product/Samsung Galaxy S25 Ultra.jpeg",
        category: "camera" 
    },
    {
        name: "Xiaomi 15",
        price: 11999000,
        image: "asset/product/Xiaomi 15.jpeg",
        category: "gaming"
    },
    {
        name: "Realme 13",
        price: 2879000,
        image: "asset/product/realme 13.jpeg",
        category: "budget"
    },
    {
        name: "Samsung S24",
        price: 17219000,
        image: "asset/product/samsung s24.jpeg",
        category: "camera"
    },
    {
        name: "Redmagic 8S Pro",
        price: 8499000,
        image: "asset/product/redmagic 8s pro.jpeg",
        category: "gaming"
    },
    {
        name: "vivo X80 Pro",
        price: 11299000,
        image: "asset/product/vivo x80 pro.jpeg",
        category: "gaming"
    },
    {
        name: "POCO M6 Pro",
        price: 2099000,
        image: "asset/product/poco m6 pro.jpeg",
        category: "budget"
    },
    {
        name: "Xiaomi 11 Ultra",
        price: 13299000,
        image: "asset/product/xiaomi 11 ultra.jpeg",
        category: "camera"
    },
    {
        name: "Huawei Mate 40",
        price: 9499000,
        image: "asset/product/huawei mate 40.jpeg",
        category: "camera"
    },
    {
        name: "Realme C67",
        price: 2149000,
        image: "asset/product/realme c67.jpeg",
        category: "budget"
    },
    {
        name: "ROG Phone 7",
        price: 10389000,
        image: "asset/product/ROG Phone 7.jpeg",
        category: "gaming"
    },
    {
        name: "POCO X5 Pro",
        price: 3099000,
        image: "asset/product/poco x5 pro.jpeg",
        category: "budget"
    },
    {
        name: "iPhone 14",
        price: 13499000,
        image: "asset/product/iphone 14.jpeg",
        category: "camera"
    }
]

const product_wrapper = document.getElementById("recommendation-product-wrapper")
const filter = document.getElementById("search")

for (let i = 0; i < phones.length; i++) {
    product_wrapper.innerHTML += `<div class="product-card-wrapper">
                                    <div class="product-img-wrapper">
                                        <img src="${phones[i].image}" alt="${phones[i].name}">
                                    </div>
                                    <div class="product-desc-wrapper">
                                        <h2>${phones[i].name}</h2>
                                        <p>${new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(phones[i].price)}</p>
                                    </div>
                                    <a href="#" class="buy-button">Buy</a>
                                </div>`
}

filter.addEventListener("change", function() {
    product_wrapper.innerHTML = '';
    if (this.value == "all") {
        for (let i = 0; i < phones.length; i++) {
            product_wrapper.innerHTML += `<div class="product-card-wrapper">
                                            <div class="product-img-wrapper">
                                                <img src="${phones[i].image}" alt="${phones[i].name}">
                                            </div>
                                            <div class="product-desc-wrapper">
                                                <h2>${phones[i].name}</h2>
                                                <p>${new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(phones[i].price)}</p>
                                            </div>
                                            <a href="#" class="buy-button">Buy</a>
                                        </div>`
        }
    } else {
        for (let i = 0; i < phones.length; i++) {
            if (phones[i].category == this.value) {
                product_wrapper.innerHTML += `<div class="product-card-wrapper">
                                    <div class="product-img-wrapper">
                                        <img src="${phones[i].image}" alt="${phones[i].name}">
                                    </div>
                                    <div class="product-desc-wrapper">
                                        <h2>${phones[i].name}</h2>
                                        <p>${new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(phones[i].price)}</p>
                                    </div>
                                    <a href="#" class="buy-button">Buy</a>
                                </div>`
            }
        }
    }
})