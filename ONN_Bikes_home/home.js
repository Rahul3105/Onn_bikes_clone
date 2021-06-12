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
  if (value == "30 DAYS BOOKING") {
    document.getElementsByClassName("endDateSelector")[0].style.display =
      "none";
  } else {
    document.getElementsByClassName("endDateSelector")[0].style.display =
      "block";
  }
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
  popUpCont.classList.add("hide");
}
// ride now city popup
function showSelectCity() {
  let selectCityCont = document.getElementsByClassName("selectCity")[0];
  selectCityCont.style.display = "block";
}
// ride now calender popup
function showCalender(para) {
  let calender = document.querySelector(`.${para} > .calender`);
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
  loginDiv.classList.toggle("hide");
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
// showFleetAndPricingCity(); and city change logic
function showFleetAndPricingCity() {
  let btn = document.getElementsByClassName("collapse-btn-fleetNPricing")[0];
  btn.classList.toggle("active");
}

function addEventListenerFleetCities() {
  let cities = document.querySelectorAll(
    ".collapse-content-fleetNPricing > ul > li"
  );
  cities.forEach((city) => {
    city.addEventListener("click", function () {
      changeFleetAndPricingCity(city.innerHTML);
      showFleetAndPricingCity();
    });
  });
}
addEventListenerFleetCities();

function changeFleetAndPricingCity(city) {
  let btn = document.getElementsByClassName("collapse-btn-fleetNPricing")[0];
  btn.innerHTML = city;
  let locations = document.querySelector(".locations > ul");
  let objOfLocations = {
    BENGALURU: `<li>KORAMANGALA</li>
    <li>ELECTRONIC CITY</li>
    <li>MS RAMAIAH COLLEGE</li>
    <li>KUNDALAHALLI</li>
    <li>YELAHANKA</li>
    <li>SILK BOARD SRCM</li>
    <li>ELECTRONIC CITY HUB</li>`,

    HYDERABAD: `<li>MADHAPUR</li>
    <li>GACHIBOWLI</li>
    <li>AMEERPET</li>
    <li>DILSUKHNAGAR</li>
    <li>SECUNDERABAD</li>
    <li>RAIDURGAM POLICE COMMISSIONARATE</li>
    <li>CHANDA NAGAR</li>`,

    JAIPUR: `<li>GT-GAURAV TOWER</li>
    <li>GOLD SOUK GRAND MALL-JAWAHAR CIRCLE</li>
    <li>C SCHEME</li>
    <li>NEW AATISH MARKET-METRO STATION</li>
    <li>JAGATPURA ROAD</li>
    <li>RAJA PARK</li>
    <li>MANSAROVAR-SHIPRA PATH</li>`,

    GURUGRAM: `<li>BIKE SURGEON</li>`,

    MYSURU: `<li>INFOSYS</li>
    <li>JAGANMOHAN PALACE</li>
    <li>GOKULAM</li>`,

    UDAIPUR: `<li>UDAIPOLE</li>`,

    AHMEDABAD: `<li>VIJAY CROSS ROAD</li>`,

    PUNE: ``,
  };
  locations.innerHTML = objOfLocations[city];
}

// signupUser();

function signupUser(e) {
  e.preventDefault();
  const form = document.getElementById("signup_form");
  let first_name = form.first_name.value;
  let last_name = form.last_name.value;
  let email = form.email.value;
  let mobile = form.mobile.value;
  let password = form.password.value;
  let bool = true;
  Array.from(form).forEach((input) => {
    if (
      input.value == "" &&
      input.name != "last_name" &&
      input.tagName != "BUTTON"
    ) {
      console.log(input);
      bool = false;
      document.querySelector(`#${input.id} ~ .required_field`).style.display =
        "block";
    }
  });
  if (bool) {
    createUserAccount(first_name, last_name, email, mobile, password);
    form.first_name.value = "";
    form.last_name.value = "";
    form.email.value = "";
    form.mobile.value = "";
    form.password.value = "";
  }
}

// to validate the form i am adding this addInputEvent function to all Element which has class input-event
function addInputEvent() {
  const inputs = document.querySelectorAll(".input-event");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      validateInput(this);
    });
  });
}
addInputEvent();

function validateInput(elem) {
  if (elem.name != "last_name")
    document.querySelector(`#${elem.id} ~ .required_field`).style.display =
      "none";
  if (elem.name === "email") {
    let elemId = elem.id;
    let warningMessage = document.querySelector(`#${elemId} ~ .warning`);
    if (validateMail(elem.value) || elem.value == "")
      warningMessage.style.display = "none";
    else warningMessage.style.display = "block";
  } else if (elem.name === "password") {
    let elemId = elem.id;
    let warningMessage = document.querySelector(`#${elemId} ~ .warning`);
    if (validatePassword(elem.value) || elem.value == "")
      warningMessage.style.display = "none";
    else warningMessage.style.display = "block";
  } else if (elem.name === "mobile") {
    let elemId = elem.id;
    let warningMessage = document.querySelector(`#${elemId} ~ .warning`);
    if (validateMobile(elem.value) || elem.value == "")
      warningMessage.style.display = "none";
    else warningMessage.style.display = "block";
  } else if (elem.name == "first_name" || elem.name == "last_name") {
    let elemId = elem.id;
    let warningMessage = document.querySelector(`#${elemId} ~ .warning`);
    if (validateName(elem.value) || elem.value == "")
      warningMessage.style.display = "none";
    else warningMessage.style.display = "block";
  }
}
function validateMail(str) {
  let regex =
    /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,10})(.[A-Za-z]{2,10})$/;
  return regex.test(str);
}
function validateMobile(str) {
  let regex = /^[0-9]{10}$/;
  return regex.test(str);
}
function validatePassword(str) {
  return str.length > 5 ? true : false;
}
function validateName(str) {
  str = str.trim();
  let regex = /^[a-zA-Z]+$/;
  if (!regex.test(str)) return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      return false;
    }
  }
  return true;
}

// createUserAccount
let otp;
let newUser;
function createUserAccount(first_name, last_name, email, mobile, password) {
  newUser = new User(first_name, last_name, email, mobile, password);
  let users = localStorage.getItem("users");
  if (users == null) {
    users = [];
  } else {
    users = JSON.parse(users);
  }
  let bool = true;
  users.forEach((user) => {
    if (user.email == newUser.email && user.mobile == newUser.mobile) {
      bool = false;
    }
  });
  if (bool) {
    let otpSec = document.querySelector(".otpSec");
    otpSec.classList.remove("hide");
    let formSec = document.querySelector(".formSec");
    formSec.classList.add("hide");
    otp = Math.floor(Math.random() * (10000 - 1000) + 1000);
    console.log(otp);
  } else {
    alert(
      "The Email / Phone number is already registered with us. Please use forgot password, if you have problems logging in."
    );
  }
}
function User(first_name, last_name, email, mobile, password) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.email = email;
  this.mobile = mobile;
  this.password = password;
}
function userAddToLocalSto(newUser) {
  let users = localStorage.getItem("users");
  if (users == null) {
    users = [];
  } else {
    users = JSON.parse(users);
  }
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  loginUser();
}

// verifyOTP();
function verifyOTP() {
  let otpInput = document.querySelector(".otpSec > #otp");
  if (otpInput.value == otp) {
    userAddToLocalSto(newUser);
  } else {
    alert("The OTP you entered appears to be incorrect. Please try again.");
  }
}

// loginUser();

function loginUser() {
  removePopUp("loginPop");
  document.getElementsByClassName("welcomeNav")[0].classList.remove("hide");
  document.getElementsByClassName("signupNav")[0].classList.add("hide");
}

function showWelcomeContent() {
  document.getElementsByClassName("welcomeNav")[0].classList.toggle("active");
  console.log("yo");
}
// tempo
function showMyAccount() {
  let accountDiv = document.getElementsByClassName("myAccount")[0];
  accountDiv.classList.remove("hide");
}

function enableInputBox(classOfParent) {
  let parentOfInput = document.querySelector(`.${classOfParent}`);
  Array.from(parentOfInput.children).forEach((elem) => {
    if (elem.tagName == "INPUT" || elem.tagName == "TEXTAREA") {
      if (elem.disabled == true) elem.disabled = false;
      else elem.disabled = true;
    }
  });
}
// changeRightOfAccount();
function changeRightOfAccount(show, hide, activeBtn, deactiveBtn) {
  show = document.getElementsByClassName(show)[0];
  hide = document.getElementsByClassName(hide)[0];
  activeBtn = document.getElementsByClassName(activeBtn)[0];
  deactiveBtn = document.getElementsByClassName(deactiveBtn)[0];
  if (show.classList.contains("hide")) {
    show.classList.remove("hide");
    activeBtn.classList.add("active");
  }
  if (!hide.classList.contains("hide")) {
    hide.classList.add("hide");
    deactiveBtn.classList.remove("active");
  }
}
// calender logic starts form here
let date = new Date();

function missionCalender() {
  date.setDate(1);
  let dayOfFirstDay = date.getDay();
  let month = document.querySelectorAll(".calender .month p");
  let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  let prevMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  let dates = document.querySelectorAll(".calender .dates");
  dates.forEach((dat) => {
    dat.innerHTML = "";
  });
  month.forEach((mon) => {
    mon.innerHTML = `${date.getFullYear()}-${giveMonth(date.getMonth())}`;
  });
  for (
    let i = prevMonthLastDate - dayOfFirstDay + 1;
    i <= prevMonthLastDate;
    i++
  ) {
    let dateCont = document.createElement("div");
    dateCont.innerHTML = i;
    dateCont.classList.add("prevMonthDate");
    dates.forEach((dat) => {
      dat.append(dateCont);
    });
  }
  for (let i = 1; i <= lastDate; i++) {
    let dateCont = document.createElement("div");
    let currDate = new Date();
    if (
      (date.getMonth() == currDate.getMonth() && i < currDate.getDate()) ||
      (date.getMonth() < currDate.getMonth() &&
        date.getFullYear() <= currDate.getFullYear())
    ) {
      dateCont.classList.add("past");
    } else {
      dateCont.classList.add("presentNFuture");
    }
    dateCont.innerHTML = i;
    dates.forEach((dat) => {
      dat.append(dateCont);
    });
  }
  date.setDate(lastDate);
  let restOfTheDay = date.getDay();
  for (let i = 1; i <= 7 - restOfTheDay - 1; i++) {
    let dateCont = document.createElement("div");
    dateCont.innerHTML = i;
    dateCont.classList.add("nextMonthDate");
    dates.forEach((dat) => {
      dat.append(dateCont);
    });
  }
  console.log(date);
}
missionCalender();

function giveMonth(ind) {
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return month[ind];
}
function changeMonth(para) {
  let currMonth = date.getMonth();
  date.setDate(1);
  if (para == "prev") {
    date.setMonth(currMonth - 1);
  } else {
    date.setMonth(currMonth + 1);
  }

  missionCalender();
}
