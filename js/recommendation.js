const phones = [
    {
        name: "iPhone 14 Pro",
        price: 15499000,
        image: "asset/product/iPhone 14 Pro.jpeg",
        category: "camera"
    },
    {
        name: "iPhone 14",
        price: 13499000,
        image: "asset/product/iphone 14.jpeg",
        category: "camera"
    },
    {
        name: "iPhone 15 Pro",
        price: 23999000,
        image: "asset/product/iPhone 15 Pro.jpeg",
        category: "camera"
    },
    {
        name: "iPhone 15",
        price: 11499000,
        image: "asset/product/iPhone 15.jpeg",
        category: "camera"
    },
    {
        name: "Samsung S25",
        price: 17999000,
        image: "asset/product/Samsung Galaxy S25 Ultra.jpeg",
        category: "camera" 
    },
    {
        name: "Xiaomi 11 Ultra",
        price: 13299000,
        image: "asset/product/xiaomi 11 ultra.jpeg",
        category: "camera"
    }
]

const product_wrapper = document.getElementById("recommendation-product-wrapper")

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