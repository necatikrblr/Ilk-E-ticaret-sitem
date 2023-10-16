let nav = document.getElementById("nav-menu");
let nav2 = document.getElementById("nav-menu-2");

nav.addEventListener("click", () => {
  const menu = document.getElementById("menu");
  if (menu.style.visibility === "visible") {
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
  } else {
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
  }
});

nav2.addEventListener("click", () => {
  const menu = document.getElementById("menu");
  if (menu.style.visibility === "visible") {
    menu.style.visibility = "hidden";
    menu.style.opacity = "0";
  } else {
    menu.style.visibility = "visible";
    menu.style.opacity = "1";
  }
});

const sepetclick = document.querySelector("#clickbtn");
const sepet = document.querySelector(".Sepet");

sepetclick.addEventListener("click", () => {
    if (sepet.classList.contains("absolute-active")) {
        sepet.classList.remove("absolute-active");
    } else {
        sepet.classList.add("absolute-active");
    }
});

const loginclick = document.querySelector("#login-btn");
const login = document.querySelector(".login-container");

loginclick.addEventListener("click", () => {
    if (login.classList.contains("absolute-active")) {
      login.classList.remove("absolute-active");
    } else {
      login.classList.add("absolute-active");
    }
});






// sepet yapısı
const card = document.getElementsByClassName("card");
const btnadd = document.querySelectorAll(".btn-add");
const btncard = document.querySelector(".shop-btn");
const carddiv = document.querySelector(".shoping-card");
const toplamTutarSpan = document.getElementById("toplamtutar");

class Shopping {
  constructor(image, title, para) {
    this.image = image;
    this.title = title;
    this.para = parseFloat(para.replace("₺", "").replace(",", ".")); 
  }
}

let toplamTutar = 0;

class Ekleme {
  addToCard(shopping) {
    const sepettam = document.querySelector("#eklenecekyer");
    const urunrsm = document.createElement("div");
    urunrsm.classList.add("urunresim");

    const gercekresim = document.createElement("img");
    gercekresim.src = shopping.image;

    const title = document.createElement("span");
    title.classList.add("urun");
    title.textContent = shopping.title;

    const paras = document.createElement("span");
    paras.textContent = shopping.para + " ₺";

    const silDugmesi = document.createElement("i");
    silDugmesi.classList.add("fas", "fa-xmark", "sil-button");

    const olusturusu = document.createElement("div");
    olusturusu.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "m-3",
    );

    urunrsm.appendChild(gercekresim);
    olusturusu.appendChild(urunrsm);
    olusturusu.appendChild(title);
    olusturusu.appendChild(paras);
    olusturusu.appendChild(silDugmesi);
    sepettam.appendChild(olusturusu);

    toplamTutar += shopping.para;
    toplamTutarSpan.textContent = toplamTutar.toFixed(2) + " ₺";
  }
}

const sepettam = document.querySelector("#eklenecekyer");

btnadd.forEach(btn => {
  btn.addEventListener("click", (e) => {
    element = e.target;

    let resim = element.parentElement.parentElement.children[0].children[0].src;
    let title = element.parentElement.parentElement.children[1].children[0].innerHTML;
    let para = element.parentElement.parentElement.children[1].children[1].children[0].innerHTML;
    let shopping = new Shopping(resim, title, para);
    let ekle = new Ekleme();

    ekle.addToCard(shopping);

    const silButton = document.querySelectorAll(".sil-button");

    silButton.forEach(silDugmesi => {
      silDugmesi.addEventListener("click", () => {
        let parentDiv = silDugmesi.parentElement;
        sepettam.removeChild(parentDiv);

        toplamTutar -= shopping.para;
        toplamTutarSpan.textContent = toplamTutar.toFixed(2) + " ₺";
      });
    });
  });
});

// kıyafet index js
function changeImage(imageSrc) {
  document.getElementById('mainImage').src = imageSrc;
  document.getElementById('zoomedImage').src = imageSrc; 
}
const addToCartButton = document.querySelector(".btn-add-to-cart");
     addToCartButton.addEventListener("click", () => {
      const productImage = document.querySelector("#mainImage").src;
      const productName = document.querySelector("h2").textContent;
      const productPrice = document.querySelector("p:nth-child(3) span").textContent;
      console.log(productPrice)
      const shopping = new Shopping(productImage, productName, productPrice);
      const ekle = new Ekleme();
      ekle.addToCard(shopping);

      const silButton = document.querySelectorAll(".sil-button");
      silButton.forEach(silDugmesi => {
        silDugmesi.addEventListener("click", () => {
          let parentDiv = silDugmesi.parentElement;
          sepettam.removeChild(parentDiv);
  
          toplamTutar -= shopping.para;
          toplamTutarSpan.textContent = toplamTutar.toFixed(2) + " ₺";
        });
      });

      
}); 
function changeImage(imgElement, newSrc) {
  imgElement.src = newSrc;
}