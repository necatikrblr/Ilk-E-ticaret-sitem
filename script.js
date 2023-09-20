let menu = document.getElementById("menu");
let nav = document.getElementById("nav-menu");
let nav2 = document.getElementById("nav-menu-2");

nav.addEventListener("click", ()=>{
  if(menu.classList.contains("absolute-active")){
    menu.classList.add("absolute-none");
    menu.classList.remove("absolute-active");
  }
  else{
    menu.classList.add("absolute-active");
    menu.classList.remove("absolute-none");
  }
});

nav2.addEventListener("click", ()=>{
  if(menu.classList.contains("absolute-active")){
    menu.classList.add("absolute-none");
    menu.classList.remove("absolute-active");
  }
  else{
    menu.classList.add("absolute-active");
    menu.classList.remove("absolute-none");
  }
});


const sepetclick = document.querySelector("#clickbtn");
const sepet = document.querySelector(".Sepet")

sepetclick.addEventListener("click", ()=>{
  if(sepet.classList.contains("absolute-active")){
    sepet.classList.add("absolute-none");
    sepet.classList.remove("absolute-active");
  }
  else{
    sepet.classList.add("absolute-active");
    sepet.classList.remove("absolute-none");
  }
});


const card = document.getElementsByClassName("card");
const btnadd = document.querySelectorAll(".btn-add"); 
const btncard = document.querySelector(".shop-btn");
const carddiv = document.querySelector(".shoping-card");

class Shopping{
  constructor(image,title,para){
    this.image = image;
    this.title = title;
    this.para = para;
}
}
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
    paras.textContent = shopping.para;

    const silme = document.createElement("span");
    silme.classList.add("silme");

    const olusturusu = document.createElement("div");
    olusturusu.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    urunrsm.appendChild(gercekresim);
    olusturusu.appendChild(urunrsm);
    olusturusu.appendChild(title);
    olusturusu.appendChild(paras);
    sepettam.appendChild(olusturusu);
  }
}



btnadd.forEach(btn => {
  btn.addEventListener("click", (e) => {
    element = e.target

    let resim = element.parentElement.parentElement.children[0].children[0].src
    let title = element.parentElement.parentElement.children[1].children[0].innerHTML
    let para = element.parentElement.parentElement.children[1].children[1].children[0].innerHTML
    let shopping = new Shopping(resim,title,para)
    let ekle = new Ekleme()
    
    ekle.addToCard(shopping)


})


})
