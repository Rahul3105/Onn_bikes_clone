window.addEventListener("scroll", showNav);

function showNav() {
  let navBar = document.getElementsByClassName("home_nav_bar")[0];
  navBar.classList.toggle("scrollNav", window.scrollY > 0);
  let hamburgerMenu = document.getElementsByClassName("hamburgerMenu")[0];
  hamburgerMenu.classList.toggle("scrollHamburger", window.scrollY > 0);
}
function formCitySelect(city) {
  let selectedCity = document.getElementsByClassName("form_accordian")[0];
  selectedCity.innerHTML = city;
  let options = document.getElementById("formOptionBox");
  options.classList.remove("show");
}
let imgNum = 2;
function changeImgAndTagLine() {
  let arrOfImg = [
    "url('images/header_home bg/header_home_bg1.jpg')",
    "url('images/header_home bg/header_home_bg2.jpg')",
    "url('images/header_home bg/header_home_bg3.jpg')",
  ];
  let arrOfHeadings = [
    `RENT TODAY, OWN TOMORROW`,
    `LONG TERM RENTALS`,
    `SELF RIDE BIKE RENTALS`,
  ];
  let arrOfSubHeadings = [
    `ZERO-DOWN PAYMENT FLEXIBLE OWNERSHIP`,
    `CHOOSE FROM MONTHLY & QUADRATIC PLAN`,
    `NOW STARTS AT $8 /HOUR`,
  ];
  let homeHeader = document.querySelectorAll(".image_container")[0];
  let heading = document.querySelector("#tagLineHeading");
  let subHeading = document.querySelector("#tagLineHeading + h3");
  homeHeader.style.backgroundImage = arrOfImg[imgNum % arrOfImg.length];
  heading.innerHTML = arrOfHeadings[imgNum % arrOfHeadings.length];
  subHeading.innerHTML = arrOfSubHeadings[imgNum % arrOfHeadings.length];

  imgNum++;
}
setInterval(() => {
  changeImgAndTagLine();
}, 4000);
function removePopUp(name) {
  let popUpCont = document.getElementsByClassName(name)[0];
  popUpCont.style.display = "none";
}
function showSelectCity() {
  let selectCityCont = document.getElementsByClassName("selectCity")[0];
  selectCityCont.style.display = "block";
}
function showCalender() {
  let calender = document.getElementsByClassName("calender")[0];
  console.log(calender);
  calender.classList.toggle("showCal");
}
