// Fonctionnalité 1
let footerElement = document.getElementsByTagName("footer")[0];
let numClic = 1
let footerClic = function(){
  console.log("clic numéro " + numClic);
  numClic ++
}
footerElement.addEventListener("click",footerClic);

// Fonctionnalité 2
let headerTest = document.getElementsByClassName("navbar-toggler")[0];
let collapse = false;
let burgerClic = function(){
  let collapsHeader = document.getElementById('navbarHeader')
  if (collapse == false) {
    collapsHeader.classList.remove("collapse")
    collapse = true
  } else if (true) {
    collapsHeader.classList.add("collapse")
    collapse = false
  }
}
headerTest.addEventListener("click",burgerClic);

// Fonctionnalité 3
let editFirstCard = document.getElementsByClassName("btn-outline-secondary")[0];
let editText = function(){
  let textToEdit = document.getElementsByClassName("card-text")[0];
  textToEdit.style.color = "red"
}
editFirstCard.addEventListener("click",editText)

// Fonctionnalité 4
let editSecondCard = document.getElementsByClassName("btn-outline-secondary")[1];
let isGreen = false;
let secondCardText = function(){
  let textToEdit = document.getElementsByClassName("card-text")[1];
  if (isGreen == false) {
    textToEdit.style.color = "green";
    isGreen = true;
  } else if (isGreen == true) {
    textToEdit.style.color = "black";
    isGreen = false;
  }
}
editSecondCard.addEventListener("click",secondCardText)

// Fonctionnalité 5
let headerSite = document.getElementsByTagName("header")[0];
let isNucleare = false;
let nuclearSite = function(){
  let bootstrap = document.getElementsByTagName("link")[0];
  if (isNucleare == false) {
    bootstrap.href = "";
    isNucleare = true;
  } else if (isNucleare == true) {
    bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    isNucleare = false;
  }
}
headerSite.addEventListener("dblclick",nuclearSite)

// Fonctionnalité 6
let editCardtest = Array.from(document.getElementsByClassName("btn-outline-secondary"));
console.log(editCardtest)
let textCard = document.getElementsByClassName("card-text");
let imgCard = document.getElementsByClassName("card-img-top");

editCardtest.forEach((item, index) =>{
  item.addEventListener("mouseover", ()=>{
    if (textCard[index].style.display == "none") {
      textCard[index].style.display = "block";
      imgCard[index].style.width = "100%"
    } else {
      textCard[index].style.display = "none";
      imgCard[index].style.width = "20%";
    };
  });
});

// Fonctionnalité 7
let allCard = Array.from(document.getElementsByClassName("col-md-4"));
