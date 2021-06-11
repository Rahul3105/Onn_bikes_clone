window.addEventListener("scroll", showNav);
// this is for when we scroll page so nav bar property change
function showNav() {
  let navBar = document.getElementsByClassName("home_nav_bar")[0];
  navBar.classList.toggle("scrollNav", window.scrollY > 0);
  let hamburgerMenu = document.getElementsByClassName("hamburgerMenu")[0];
  hamburgerMenu.classList.toggle("scrollHamburger", window.scrollY > 0);

  ////fleet and pricing overlay
  let fleetAndPricing = document.getElementsByClassName(
    "fleetAndPricingOverlay-cont"
  )[0];
  fleetAndPricing.classList.toggle("absolute", window.scrollY > 10);
}
// this is for collapsible content where we can select anything and that value  will appear on collapse_btn
function changeCollapseBtnValue(collapse_btn_type, value) {
  let collapse_btn = document.getElementsByClassName(collapse_btn_type)[0];
  collapse_btn.innerHTML = value;
  collapse_btn.classList.remove("active");
}
// this function is to change image of header dynamically
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
// ride now city popup
function showSelectCity() {
  let selectCityCont = document.getElementsByClassName("selectCity")[0];
  selectCityCont.style.display = "block";
}
// ride now calender popup
function showCalender() {
  let calender = document.getElementsByClassName("calender")[0];
  calender.classList.toggle("showCal");
}
// nav bar signup page
function showSignup() {
  let login = document.getElementById("login_form");
  let signup = document.getElementById("signup_form");
  let heading = document.getElementsByClassName("heading")[0];
  let loginHeading = heading.children[0];
  let signupHeading = heading.children[1];
  login.classList.toggle("hide");
  signup.classList.toggle("hide");
  loginHeading.classList.toggle("currForm");
  signupHeading.classList.toggle("currForm");
}
// showLoginPopup();
function showLoginPopup() {
  let loginDiv = document.getElementsByClassName("loginPop")[0];
  loginDiv.style.display = "block";
}
// help popup
function showContactPopup() {
  let contactPopup = document.getElementsByClassName(
    "contactUsForm-helpPopup-cont"
  )[0];
  contactPopup.classList.toggle("active");
}
let collapse_btn = document.querySelectorAll(".collapse-btn");

collapse_btn.forEach(function (btn, ind) {
  btn.addEventListener("click", function () {
    let grandFather = this.parentElement.parentElement;
    if (grandFather.classList.contains("accordian_container")) {
      collideOthers(ind, grandFather);
    }
    this.classList.toggle("active");
  });
});
function collideOthers(ind, elem) {
  let children = elem.children;
  for (let i = 0; i < children.length; i++) {
    if (elem.children[i].children[0].classList.contains("active") && i != ind) {
      elem.children[i].children[0].classList.remove("active");
    }
  }
}
// this function is for contact us form select city collapsible content
function showFormCity() {
  let btn = document.getElementsByClassName("collapse-btn-form")[0];
  btn.classList.toggle("active");
}
// this is for ride now collase 30 days or etc wala
function showrideNowCollapse() {
  let btn = document.getElementsByClassName("collapse-btn-rideNow")[0];
  btn.classList.toggle("active");
}

////for fleet and pricing slide
const allBikeList = document.querySelectorAll(".bike_cont_list > li");
let arrOfBikePos = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let i = 0;
let j = 2;
function slide(step) {
  if (j == arrOfBikePos.length - 1 && step > 0) return;
  else if (i == 0 && step < 0) return;
  let index;
  if (step > 0) {
    j++;
    i++;
    index = j;
  } else {
    j--;
    i--;
    index = i;
  }
  // index = Math.min(Math.max(index, 0), liEls.length - 1);
  allBikeList[index].scrollIntoView({ behavior: "smooth" });
  console.log(index);
}

// showFleetAndPricing() and for remove also ;
function showFleetAndPricing() {
  let fleetCont = document.getElementsByClassName(
    "fleetAndPricingOverlay-cont"
  )[0];
  fleetCont.classList.toggle("active");
}
