let cart = []

function addToCart(title, price) {
    if (document.querySelector("#cartview").classList.contains("hidden")) {
        toggleCart()
    } 

    cart.push({productTitle: title, productPrice: price, productQuantity: 1})

    console.log(cart)

    //Etter å ha lagt til et produkt; oppdater handlelistevisning: 
    renderCart()

    //Så må vi oppdatere label med antall produkter:
    document.querySelector("#cart .label").innerHTML = cart.length

    //Kan også skrive dette, med å putte inn 
    //document.getElementById("cartview").classList.remove("hidden")
}

function renderCart() {
    let totalPrice = 0 
    //Tom variabel for å bygge HTML til produkter
    let listHTML = ""
    //Gå gjennom cart arrayen, lag <li> for hvert produkt 
    cart.map((prod, index) => listHTML += `<li id="prod-${index}">
    <span class="title">${prod.productTitle}</span>
    <span class="price">${prod.productPrice},-</span>
    <span class="quantity">${prod.productQuantity}x</span>
    <button class="delete" onClick="deleteProduct(${index})">X</button>
    </li>`)
    //Bruke en selector for å finne en riktig <ul>, og skrive inn listHTML:
    document.querySelector("#cartview ul").innerHTML = listHTML

    cart.map(total => totalPrice += total.productPrice)

    document.querySelector("#total").innerHTML = totalPrice
}

function deleteProduct(index) {
    document.getElementById("prod-"+index).classList.add("hidden")
    setTimeout(() => {
        cart.splice(index, 1)
        renderCart()
    }, 700)
}

function toggleCart() {
    document.querySelector("#cartview").classList.toggle("hidden")
}

//function deleteProduct(List)