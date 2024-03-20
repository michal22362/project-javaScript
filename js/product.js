const goPayment = document.getElementById("go-payment");
const price2 = document.createElement('p');
let price = 0;
let sum = JSON.parse(localStorage.getItem("price"));
price2.innerHTML = "סכום הזמנה: " + "₪" + sum;
goPayment.appendChild(price2);

const cubeGrey = document.getElementById("cubeGrey");
let paymentArr = JSON.parse(localStorage.getItem("paymentArr")) || [];

//-----------------------ניווט צדדי 

const SideNav = document.getElementById("SideNav");
const ul = document.createElement('ul');
ul.classList.add('nav', 'flex-column', 'list-group', 'list-group-flush');
SideNav.appendChild(ul);

const li_0 = document.createElement("li");
li_0.classList.add('list-group-item');
ul.appendChild(li_0);
const btn_0 = document.createElement("a");
btn_0.textContent = 'קוד קופון';
li_0.appendChild(btn_0);
btn_0.onclick = () => {
    prodDiv.innerHTML = "";
    // callProducts(, drawProducts);
}

btn_0.style.color = "white";
btn_0.style.textAlignLast
li_0.style.backgroundColor = "#a98900";
li_0.style.borderRadius = "5px";
li_0.style.width = "250px";

const li_1 = document.createElement("li");
li_1.classList.add('list-group-item');
ul.appendChild(li_1);
const btn_1 = document.createElement("a");
btn_1.textContent = 'מגשי אירוח';
li_1.appendChild(btn_1);
btn_1.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/1.json", drawProducts);
}


const li_2 = document.createElement("li");
li_2.classList.add('list-group-item');
ul.appendChild(li_2);
const btn_2 = document.createElement("a");
btn_2.textContent = 'מארזי מתנה';
li_2.appendChild(btn_2);
btn_2.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/4.json", drawProducts);
}

const li_3 = document.createElement("li");
li_3.classList.add('list-group-item');
ul.appendChild(li_3);
const btn_3 = document.createElement("a");
btn_3.textContent = 'לחמי מחמצת';
li_3.appendChild(btn_3);
btn_3.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/2.json", drawProducts);
}

const li_4 = document.createElement("li");
li_4.classList.add('list-group-item');
ul.appendChild(li_4);
const btn_4 = document.createElement("a");
btn_4.textContent = 'משפחת לחם';
li_4.appendChild(btn_4);
btn_4.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/6.json", drawProducts);
}

const li_5 = document.createElement("li");
li_5.classList.add('list-group-item');
ul.appendChild(li_5);
const btn_5 = document.createElement("a");
btn_5.textContent = 'עוגות שמרים';
li_5.appendChild(btn_5);
btn_5.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/5.json", drawProducts);
}

const li_6 = document.createElement("li");
li_6.classList.add('list-group-item');
ul.appendChild(li_6);
const btn_6 = document.createElement("a");
btn_6.textContent = 'מאפים מלוחים';
li_6.appendChild(btn_6);
btn_6.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/3.json", drawProducts);
}

const li_7 = document.createElement("li");
li_7.classList.add('list-group-item');
ul.appendChild(li_7);
const btn_7 = document.createElement("a");
btn_7.textContent = 'מאפים מתוקים';
li_7.appendChild(btn_7);
btn_7.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/Sweet _pastries.json", drawProducts);
}

const li_8 = document.createElement("li");
li_8.classList.add('list-group-item');
ul.appendChild(li_8);
const btn_8 = document.createElement("a");
btn_8.textContent = 'עוגות פס';
li_8.appendChild(btn_8);
btn_8.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/Stripe _cakes.json", drawProducts);
}


const li_9 = document.createElement("li");
li_9.classList.add('list-group-item');
ul.appendChild(li_9);
const btn_9 = document.createElement("a");
btn_9.textContent = 'עוגות בחושות';
li_9.appendChild(btn_9);
btn_9.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/Mix.json", drawProducts);
}


const li_10 = document.createElement("li");
li_10.classList.add('list-group-item');
ul.appendChild(li_10);
const btn_10 = document.createElement("a");
btn_10.textContent = 'פטיסרי';
li_10.appendChild(btn_10);
btn_10.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/patisserie.json", drawProducts);
}


const li_11 = document.createElement("li");
li_11.classList.add('list-group-item');
ul.appendChild(li_11);
const btn_11 = document.createElement("a");
btn_11.textContent = 'עוגות עגולות';
li_11.appendChild(btn_11);
btn_11.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/Round _cakes.json", drawProducts);
}


const li_12 = document.createElement("li");
li_12.classList.add('list-group-item');
ul.appendChild(li_12);
const btn_12 = document.createElement("a");
btn_12.textContent = 'עוגיות';
li_12.appendChild(btn_12);
btn_12.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/cookies.json", drawProducts);
}


const li_13 = document.createElement("li");
li_13.classList.add('list-group-item');
ul.appendChild(li_13);
const btn_13 = document.createElement("a");
btn_13.textContent = 'קישים';
li_13.appendChild(btn_13);
btn_13.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/quiches.json", drawProducts);
}

const li_14 = document.createElement("li");
li_14.classList.add('list-group-item');
ul.appendChild(li_14);
const btn_14 = document.createElement("a");
btn_14.textContent = 'פרווה';
li_14.appendChild(btn_14);
btn_14.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/fur.json", drawProducts);
}

const li_15 = document.createElement("li");
li_15.classList.add('list-group-item');
ul.appendChild(li_15);
const btn_15 = document.createElement("a");
btn_15.textContent = 'מוצרים ללא תוספת סוכר';
li_15.appendChild(btn_15);
btn_15.onclick = () => {
    prodDiv.innerHTML = "";
    btn_15.style.color = "black";
    callProducts("../data/N_suggar.json", drawProducts);
}


const li_16 = document.createElement("li");
li_16.classList.add('list-group-item');
ul.appendChild(li_16);
const btn_16 = document.createElement("a");
btn_16.textContent = 'מן המעדניה';
li_16.appendChild(btn_16);
btn_16.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/deli.json", drawProducts);
}


const li_17 = document.createElement("li");
li_17.classList.add('list-group-item');
ul.appendChild(li_17);
const btn_17 = document.createElement("a");
btn_17.textContent = 'טארטים';
li_17.appendChild(btn_17);
btn_17.onclick = () => {
    prodDiv.innerHTML = "";
    callProducts("../data/Tarts.json", drawProducts);
}


//---------------יצירת המוצרים
const dom = {
    page: document.getElementById("page"),
}

const prodDiv = document.getElementById("prodDiv");
const go_payment = document.getElementById("go-payment");

function getProduct(product) {

    const card = document.createElement('div');
    card.classList.add('product-card', 'me-lg-5');
    prodDiv.appendChild(card);

    const img = document.createElement('img');
    img.src = `../assets/${product.name}/${product.image}`;
    card.appendChild(img);

    const h5 = document.createElement('h5');
    h5.innerHTML = product.description;
    card.classList.add('product-name', 'text-center');
    card.appendChild(h5);

    const p1 = document.createElement('p');
    p1.classList.add('product-price', 'text-center');
    p1.innerHTML = `₪${product.price}`;
    card.appendChild(p1);

    const line = document.createElement('div');
    card.appendChild(line);

    const p2 = document.createElement('p');
    p2.classList.add('product-type', 'text-center');
    p2.innerHTML = product.type;
    card.appendChild(p2);

    const btnProduct = document.createElement('button');
    btnProduct.classList.add('btn');
    btnProduct.innerHTML = "הוסף הזמנה";
    card.appendChild(btnProduct);

    btnProduct.onclick = (i) => {
        paymentArr.push(product.description);
        localStorage.setItem("paymentArr", JSON.stringify(paymentArr));
        console.log(paymentArr);
        price += product.price;
        console.log(price);

        const prodName = document.getElementById("prodName");
        localStorage.setItem("price", JSON.stringify(price));
        sum = JSON.parse(localStorage.getItem("price"));
        price2.innerHTML = "סכום הזמנה" + sum + "₪";

        const desPrice = document.createElement('div');
        prodName.appendChild(desPrice);
        const Pprice = document.createElement('p');
        Pprice.innerHTML = product.description;
        desPrice.appendChild(Pprice);
        const Bprice = document.createElement('button');
        const Iprice = document.createElement('img');
        Iprice.src = "../assets/עמוד חנות/+.png";
        Bprice.style.border = "none";
        Iprice.style.width = "20px";
        Iprice.style.height = "auto";
        Bprice.style.background = "none";
        Bprice.style.marginRight = "200px";
        Pprice.style.marginLeft = "150px";
        Bprice.appendChild(Iprice);
        desPrice.appendChild(Bprice);


        const Bprice2 = document.createElement('button');
        const Iprice2 = document.createElement('img');
        Iprice2.src = "../assets/עמוד חנות/-.png";
        Bprice2.style.border = "none";
        Bprice2.style.background = "none";
        // Bprice2.style.marginRight = "100px";
        Iprice2.style.width = "20px";
        Iprice2.style.height = "auto";
        Bprice2.appendChild(Iprice2);
        desPrice.appendChild(Bprice2);

        Bprice.onclick = () => {
            btnProduct.onclick();
        }
        Bprice2.onclick = () => {
            prodName.removeChild(desPrice);
            price = JSON.parse(localStorage.getItem("price"));
            price -= product.price;
            localStorage.setItem("price", JSON.stringify(price));
            sum = JSON.parse(localStorage.getItem("price"));
            price2.innerHTML = "סכום הזמנה: " + "₪" + sum;
        }


    }




    return prodDiv;
}

const drawProducts = (product) => {
    product.forEach(p => {
        console.log(p);
        dom.page.appendChild(getProduct(p));
    });
}

callProducts("../data/cookies.json", drawProducts);

// ----------------------------------חיפוש מוצרים
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");


const handleSearch = (product, query) => {
    let description = product.description;
    const filteredResults = description.toLowerCase().includes(query);
    console.log(filteredResults);
    return filteredResults;
}

const searchProducts = (product) => {
    prodDiv.innerHTML = "";
    let count = 0;
    let query = searchInput.value.toLocaleLowerCase();
    searchResults.innerHTML = "";
    product.forEach(p => {
        if (handleSearch(p, query)) {
            console.log(p);
            searchResults.appendChild(getProduct(p));
            count++;
        }
    });
    if (count == 0) {
        searchResults.innerHTML = "מצטערים, לא נמצאו תוצאות עבור החיפוש."
        searchResults.style.fontSize = "30px";
        searchResults.style.color = "#a98900";
        searchResults.style.marginRight = "22%";
        searchResults.style.fontWeight = "bold";
    }
}

searchInput.addEventListener("input", () => {
    callProducts("../data/general.json", searchProducts)
});


// --------------------------------------לתשלום

let address = JSON.parse(localStorage.getItem("address"));
let branch = JSON.parse(localStorage.getItem("branch"));

const target = document.createElement('p');
console.log(branch);
console.log(address);
if (branch === null) {
    target.innerHTML = "משלוח ל:" + " " + address;

};
if (address === null) {
    target.innerHTML = "איסוף מסניף:" + " " + branch;
};

cubeGrey.appendChild(target);

//-----style go-payment

target.style.marginTop = "-220px";
price2.style.marginTop = "-100px";

setInterval("fgjhdtur", 0.5);