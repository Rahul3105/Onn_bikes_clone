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
function showMobileNavBar() {
  let navBar = document.getElementsByClassName("mobileNavBar")[0];
  navBar.classList.toggle("active");
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
  if (popUpCont.classList.contains("active"))
    popUpCont.classList.remove("active");
  document.body.style.overflow = "visible";
}

// ride now calender popup
function showCalender(para) {
  let calender = document.querySelector(`.${para} > .calender`);
  let calender_timing = document.querySelector(`.${para} > .calender_timing`);
  if (!calender_timing.classList.contains("hide")) {
    calender_timing.classList.add("hide");
  }
  calender.classList.toggle("hide");
  missionCalender(para);
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
  let loginDiv = document.getElementsByClassName("loginPopupOverlay")[0];
  loginDiv.classList.toggle("hide");
  loginDiv.classList.add("active");
  document.body.style.overflow = "hidden";
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
// signup login function starts form here

// #signupUser();

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
// #2 validating user input fields

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

// #3createUserAccount
// here i am checking if user already exist or not if not than open otp sec
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
    if (user.email == newUser.email || user.mobile == newUser.mobile) {
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
// user constructor
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
  addToCurrLoggedIn(newUser);
}
function addToCurrLoggedIn(user) {
  let currLoggedIn = localStorage.getItem("currLoggedIn");
  if (currLoggedIn == null) {
    currLoggedIn = [];
  } else {
    currLoggedIn = JSON.parse(currLoggedIn);
  }
  currLoggedIn.push(user);
  localStorage.setItem("currLoggedIn", JSON.stringify(currLoggedIn));
  loginUser();
}
// verifyOTP();
function verifyOTP() {
  let otpInput = document.querySelector(".otpSec > #otp");
  if (otpInput.value == otp) {
    otpInput.value = "";
    userAddToLocalSto(newUser);
  } else {
    alert("The OTP you entered appears to be incorrect. Please try again.");
  }
}
// keepUserLoggedIn();
function keepUserLoggedIn() {
  let currLoggedIn = localStorage.getItem("currLoggedIn");
  if (currLoggedIn == null) {
    currLoggedIn = [];
  } else {
    currLoggedIn = JSON.parse(currLoggedIn);
  }
  if (currLoggedIn.length > 0) loginUser();
}
keepUserLoggedIn();

// loginUser();

function loginUser() {
  removePopUp("loginPopupOverlay");
  document.getElementsByClassName("welcomeNav")[0].classList.remove("hide");
  document.getElementsByClassName("signupNav")[0].classList.add("hide");

  updateMyAccount();
}
// logoutUser();
function logoutUser() {
  let arr = [];
  localStorage.setItem("currLoggedIn", JSON.stringify(arr));
  document.getElementsByClassName("welcomeNav")[0].classList.add("hide");
  document.getElementsByClassName("welcomeNav")[0].classList.remove("active");
  document.getElementsByClassName("signupNav")[0].classList.remove("hide");
}

function showWelcomeContent() {
  document.getElementsByClassName("welcomeNav")[0].classList.toggle("active");
}
// tempo
function showMyAccount() {
  let accountDiv = document.getElementsByClassName("myAccountOverlay")[0];
  accountDiv.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

// checkUsers() if exist than login user;
function checkUsers(e) {
  e.preventDefault();
  let login_form = document.getElementById("login_form");
  let email = login_form.emailORPhone.value;
  let password = login_form.password.value;
  let users = localStorage.getItem("users");
  if (users == null) {
    users = [];
  } else {
    users = JSON.parse(users);
  }
  users.forEach((user) => {
    if (
      (user.email == email && user.password == password) ||
      (user.mobile == email && user.password == password)
    ) {
      login_form.emailORPhone.value = "";
      login_form.password.value = "";
      addToCurrLoggedIn(user);
      loginUser();
    } else {
      alert("Please use forgot password, if you have problems logging in.");
    }
  });
}
function updateMyAccount() {
  let currLoggedIn = localStorage.getItem("currLoggedIn");
  if (currLoggedIn == null) {
    currLoggedIn = [];
  } else {
    currLoggedIn = JSON.parse(currLoggedIn);
  }
  let userNameCont = document.querySelector(".myAccount .user-name");
  let emailIdCont = document.querySelector(".myAccount .user-mail");
  userNameCont.innerHTML = `${currLoggedIn[0].first_name} ${currLoggedIn[0].last_name}`;
  emailIdCont.innerHTML = currLoggedIn[0].email;

  // your profile sec
  let first_name_yourProfile = document.querySelector(
    ".yourProfileCont #first_name-yourProfile"
  );
  let last_name_yourProfile = document.querySelector(
    ".yourProfileCont #last_name-yourProfile"
  );
  let email_yourProfile = document.querySelector(
    ".yourProfileCont .email-yourProfile"
  );
  let mobile_yourProfile = document.querySelector(
    ".yourProfileCont .mobile-yourProfile"
  );
  first_name_yourProfile.value = currLoggedIn[0].first_name;
  last_name_yourProfile.value = currLoggedIn[0].last_name;
  email_yourProfile.innerHTML = currLoggedIn[0].email;
  mobile_yourProfile.innerHTML = currLoggedIn[0].mobile;
}
///////////////////////login/signup logic ends here

// user profile  logic starts form here
function enableInputBox(classOfParent) {
  let parentOfInput = document.querySelector(`.${classOfParent}`);
  let updateBtn = document.querySelector(`.${classOfParent} > button`);
  Array.from(parentOfInput.children).forEach((elem) => {
    if (elem.tagName == "INPUT" || elem.tagName == "TEXTAREA") {
      if (elem.disabled == true) {
        elem.disabled = false;
        updateBtn.classList.add("active");
      } else {
        elem.disabled = true;
        updateBtn.classList.remove("active");
      }
    }
  });
}

function updateCurrUserProfile(para) {
  let currLoggedIn = JSON.parse(localStorage.getItem("currLoggedIn"));
  let users = JSON.parse(localStorage.getItem("users"));
  if (para === "profile") {
    if (
      document
        .querySelector(".edit-account > button")
        .classList.contains("active")
    ) {
      let first_name = document.getElementById("first_name-yourProfile").value;
      let last_name = document.getElementById("last_name-yourProfile").value;
      first_name = first_name.split("");
      for (let i in first_name) {
        if (first_name[i] == " ") delete first_name[i];
      }
      first_name = first_name.join("");
      last_name = last_name.split("");
      for (let i in last_name) {
        if (last_name[i] == " ") delete last_name[i];
      }
      last_name = last_name.join("");
      users.forEach((user) => {
        if (
          user.first_name == currLoggedIn[0].first_name &&
          user.last_name == currLoggedIn[0].last_name &&
          user.email == currLoggedIn[0].email &&
          user.mobile == currLoggedIn[0].mobile
        ) {
          if (first_name != "" && first_name != user.first_name) {
            user.first_name = first_name;
            currLoggedIn[0].first_name = first_name;
          }
          if (last_name != "" && last_name != user.last_name) {
            user.last_name = last_name;
            currLoggedIn[0].last_name = last_name;
          }
          alert("Profile updated successfully");
        }
      });
    }
  } else {
    if (
      document
        .querySelector(".change-password > button")
        .classList.contains("active")
    ) {
      let oldPassword = document.getElementById("old-password").value;
      let new_password = document.getElementById("new-password").value;
      let confirm_password = document.getElementById("confirm-password").value;

      users.forEach((user) => {
        if (
          user.first_name == currLoggedIn[0].first_name &&
          user.last_name == currLoggedIn[0].last_name &&
          user.email == currLoggedIn[0].email &&
          user.mobile == currLoggedIn[0].mobile
        ) {
          if (oldPassword == user.password) {
            if (new_password.length < 6) {
              alert("Please enter minimum six digit password");
            } else if (new_password != confirm_password) {
              alert(
                "Your confirm password and new password is not matching please try again"
              );
            } else if (new_password == oldPassword) {
              alert(
                "Please enter a new password this password is already the current password"
              );
            } else {
              user.password = new_password;
              currLoggedIn[0].password = new_password;
              alert("Password changed successfully");
            }
          }
        }
      });
    }
  }
  localStorage.setItem("currLoggedIn", JSON.stringify(currLoggedIn));
  localStorage.setItem("users", JSON.stringify(users));
}

// changeRightOfAccount();
// user profile options toggle function
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
////////////////////////////////////////// calender logic starts form here
let date1 = new Date();
let date2 = new Date();

function missionCalender(para) {
  let date;
  if (para === "startDateSelector") {
    date = date1;
  } else {
    date = date2;
  }
  date.setDate(1);
  let dayOfFirstDay = date.getDay();
  let month = document.querySelector(`.${para} .calender .month p`);
  let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  let prevMonthLastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  let dates = document.querySelector(`.${para} .calender .dates`);
  dates.innerHTML = "";

  month.innerHTML = `${date.getFullYear()}-${giveMonth(date.getMonth())}`;

  for (
    let i = prevMonthLastDate - dayOfFirstDay + 1;
    i <= prevMonthLastDate;
    i++
  ) {
    let dateCont = document.createElement("div");
    dateCont.innerHTML = i;
    dateCont.classList.add("prevMonthDate");
    dates.append(dateCont);
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
      dateCont.onclick = function () {
        addDateToLocalStorage(para, i, date);
        showTimingTab(para, i, date);
      };
    }
    dateCont.innerHTML = i;

    dates.append(dateCont);
  }
  date.setDate(lastDate);
  let restOfTheDay = date.getDay();
  for (let i = 1; i <= 7 - restOfTheDay - 1; i++) {
    let dateCont = document.createElement("div");
    dateCont.innerHTML = i;
    dateCont.classList.add("nextMonthDate");

    dates.append(dateCont);
  }
}

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
function changeMonth(para, parentName) {
  if (parentName == "endDateSelector") {
    let currMonth = date2.getMonth();
    date2.setDate(1);
    if (para == "prev") {
      date2.setMonth(currMonth - 1);
    } else {
      date2.setMonth(currMonth + 1);
    }
  } else {
    let currMonth = date1.getMonth();
    date1.setDate(1);
    if (para == "prev") {
      date1.setMonth(currMonth - 1);
    } else {
      date1.setMonth(currMonth + 1);
    }
  }

  missionCalender(parentName);
}
function showTimingTab(para, i, date) {
  let calender = document.querySelector(`.${para} .calender`);
  let calender_timing = document.querySelector(`.${para} .calender_timing`);
  calender.classList.add("hide");
  calender_timing.classList.remove("hide");
  date.setDate(i);
  let wholeDate = document.querySelector(
    `.${para} .calender_timing .wholeDate p`
  );
  wholeDate.innerHTML = `${giveMonth(
    date.getMonth()
  )} ${i}, ${date.getFullYear()}`;
  let arrOfTimings = [
    `09:00 AM`,
    `10:00 AM`,
    `11:00 AM`,
    `12:00 PM`,
    `01:00 PM`,
    `02:00 PM`,
    `03:00 PM`,
    `04:00 PM`,
    `05:00 PM`,
    `06:00 PM`,
    `07:00 PM`,
  ];
  let availableTimings = document.querySelector(
    `.${para} .calender_timing .availableTimings`
  );
  availableTimings.innerHTML = "";
  let today = new Date();
  if (
    date.getDate() == today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear()
  ) {
    let lastTime = 19;
    let hour = date.getHours() + 1;

    while (hour <= lastTime) {
      let amORpm = "AM";
      if (hour > 12) amORpm = "PM";
      let div = document.createElement("div");
      div.innerHTML = `${
        hour % 12 < 10 ? "0" + (hour % 12) : hour % 12
      }:00 ${amORpm}`;
      div.onclick = function () {
        addTimeToLocalSto(para, div.innerHTML);
        showRideNowDateAndTime(para);
        calender_timing.classList.add("hide");
      };
      availableTimings.append(div);
      hour++;
    }
  } else {
    for (let i = 0; i < arrOfTimings.length; i++) {
      let div = document.createElement("div");
      div.innerHTML = arrOfTimings[i];
      div.onclick = function () {
        addTimeToLocalSto(para, div.innerHTML);
        showRideNowDateAndTime(para);
        calender_timing.classList.add("hide");
      };
      availableTimings.append(div);
    }
  }
}

function addDateToLocalStorage(para, i, date) {
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  date.setDate(i);
  let obj = {
    date: i,
    month: giveMonth(date.getMonth()),
    year: date.getFullYear(),
    weekDay: weekDays[date.getDay()],
  };
  if (para == "startDateSelector") {
    localStorage.setItem("startDateObj", JSON.stringify(obj));
  } else {
    localStorage.setItem("endDateObj", JSON.stringify(obj));
  }
}
function addTimeToLocalSto(para, time) {
  if (para == "startDateSelector") {
    let startDateObj = JSON.parse(localStorage.getItem("startDateObj"));
    startDateObj["time"] = time;
    localStorage.setItem("startDateObj", JSON.stringify(startDateObj));
  } else {
    let endDateObj = JSON.parse(localStorage.getItem("endDateObj"));
    endDateObj["time"] = time;
    localStorage.setItem("endDateObj", JSON.stringify(endDateObj));
  }
}
// this function is for get the obj and show on dom ride now sec
function showRideNowDateAndTime(para) {
  if (para == "startDateSelector") {
    let startDateObj = JSON.parse(localStorage.getItem("startDateObj"));
    let spanTag = document.querySelector(`.${para} .calenderStartDate`);
    // console.log(spanTag);
    spanTag.innerHTML = `<strong class="calenderStartDate-date">${startDateObj.date}</strong>
                            <span class="calenderStartDate-weekDay">${startDateObj.weekDay}</span>
                            <span class="calenderStartDate-month">${startDateObj.month} ${startDateObj.year}</span>
                            <span class="calenderStartDate-time">${startDateObj.time}</span>`;
    let startDateSpan = document.querySelector(".startDateSpan");
    startDateSpan.classList.add("hide");
    if (spanTag.classList.contains("hide")) spanTag.classList.remove("hide");
  } else {
    let endDateObj = JSON.parse(localStorage.getItem("endDateObj"));
    let spanTag = document.querySelector(`.${para} .calenderEndDate`);
    spanTag.innerHTML = `<strong class="calenderEndDate-date">${endDateObj.date}</strong>
                            <span class="calenderEndDate-weekDay">${endDateObj.weekDay}</span>
                            <span class="calenderEndDate-month">${endDateObj.month} ${endDateObj.year}</span>
                            <span class="calenderEndDate-time">${endDateObj.time}</span>`;
    let endDateSpan = document.querySelector(".endDateSpan");
    endDateSpan.classList.add("hide");
    if (spanTag.classList.contains("hide")) spanTag.classList.remove("hide");
  }
}
// now data is going on ride now page

function checkStartAndEndDateCont() {
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
  let rideNow_city_name =
    document.getElementsByClassName("rideNow-city-name")[0];
  let choose_plan = document.querySelector(
    ".choose_plan .collapse-btn-rideNow"
  );
  let startDate = document.querySelector(
    ".startDateSelector .calenderStartDate"
  );
  let endDate = document.querySelector(".endDateSelector .calenderEndDate");

  choose_plan = choose_plan.innerHTML.trim();
  if (startDate.classList.contains("hide")) {
    alert("Please fill start date");
  } else if (
    endDate.classList.contains("hide") &&
    choose_plan == "HOURLY/DAILY"
  ) {
    alert("Please fill end date or choose 30 days plan");
  } else {
    //   let startDateObj = JSON.parse(localStorage.getItem("startDateObj"));
    //   let endDateObj = JSON.parse(localStorage.getItem("endDateObj"));
    //   if (startDateObj.year > endDateObj.year) {
    //     alert(
    //       "Your start year is greater than end year, Please fill it correctly"
    //     );
    //   } else if (startDateObj.year == endDateObj.year) {
    //     if (month.indexOf(startDateObj.month) > month.indexOf(endDateObj.month)) {
    //       alert(
    //         "Your start month is greater then end month please fill it correctly"
    //       );
    //     } else if (
    //       month.indexOf(startDateObj.month) == month.indexOf(endDateObj.month)
    //     ) {
    //       if (startDateObj.date > endDateObj.date) {
    //         alert(
    //           "Your start date is greater than end date please fill it correctly"
    //         );
    //       }
    //     }
    //   }
    let rideNowOtherInfo = {
      cityName: `${rideNow_city_name.innerHTML}`,
      planName: `${choose_plan}`,
    };
    localStorage.setItem("rideNowOtherInfo", JSON.stringify(rideNowOtherInfo));
    window.location.href = "../Ride_now/rideNow.html";
  }
}

// now i am working on city choose pop ride now features seach city sorting

const arrOfCities = [
  {
    img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/bengaluru.png",
    name: "BANGALURU",
  },
  {
    img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/hyderabad.png",
    name: "HYDERABAD",
  },
  {
    img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/jaipur.png",
    name: "JAIPUR",
  },
  {
    img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/gurugram.jpeg",
    name: "GURUGRAM",
  },
  {
    img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/mysuru.png",
    name: "MYSURU",
  },
  {
    img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/udaipur.png",
    name: "UDAIPUR",
  },
  {
    img: "https://d3bvfezcznypk7.cloudfront.net/staticwebsitecontent/CityImages/ahmedabad.png",
    name: "AHMEDABAD",
  },
];

if (localStorage.getItem("rideNowCities") == null) {
  localStorage.setItem("rideNowCities", JSON.stringify(arrOfCities));
}
function showRideNowCities() {
  const cityArea = document.querySelector(".selectCity .cityArea");
  cityArea.innerHTML = "";
  let arrOfCities = JSON.parse(localStorage.getItem("rideNowCities"));
  arrOfCities.forEach((city) => {
    let cityCont = document.createElement("div");
    cityCont.classList.add("cityCont");
    cityCont.innerHTML = `<div>
        <img src= ${city.img}
            alt="" srcset="">
         <p>${city.name}</p>
    </div>`;
    cityCont.onclick = function () {
      changeRideNowCityValue(this);
    };
    cityArea.append(cityCont);
  });
}
// ride now city popup
function showSelectCity() {
  showRideNowCities();
  let selectCityCont = document.getElementsByClassName("selectCity-overlay")[0];
  selectCityCont.classList.toggle("hide");
  selectCityCont.classList.add("active");
  document.body.style.overflow = "hidden";
}

function changeRideNowCityValue(elem) {
  let city = elem.children[0].children[1].innerHTML;
  document.getElementsByClassName("rideNow-city-name")[0].innerHTML = city;
  removePopUp("selectCity-overlay");
}
function filterRideNowCities() {
  let input = document.getElementById("searchCity").value;
  let inputVal = input.toUpperCase();
  const cityArea = document.querySelector(".selectCity .cityArea");
  cityArea.innerHTML = "";
  let arrOfCities = JSON.parse(localStorage.getItem("rideNowCities"));
  arrOfCities.forEach((city) => {
    if (city.name.includes(inputVal)) {
      let cityCont = document.createElement("div");
      cityCont.classList.add("cityCont");
      cityCont.innerHTML = `<div>
        <img src= ${city.img}
            alt="" srcset="">
         <p>${city.name}</p>
    </div>`;
      cityCont.onclick = function () {
        changeRideNowCityValue(this);
      };
      cityArea.append(cityCont);
    }
  });
}
function submitHelpPopup(e) {
  e.preventDefault();
  const form = document.getElementById("contactUsForm-helpPopup");
  let name_popup = form.name_popup.value;
  let email_popup = form.email_popup.value;
  let type_popup = form.type_popup.value;
  let tell_us_more_popup = form.tell_us_more_popup.value;
  if (name_popup == "") {
    alert("Please Type your name");
  } else if (email_popup == "") {
    alert("Please Type your email");
  } else if (type_popup == "") {
    alert("Please select a type");
  } else if (tell_us_more_popup == "") {
    alert("Please tell us more");
  } else {
    form.name_popup.value = "";
    form.email_popup.value = "";
    form.type_popup.value = "";
    form.tell_us_more_popup.value = "";
    document.getElementsByClassName("thank_you")[0].classList.toggle("hide");
  }
}
function showHelpPopupCollapseContent() {
  let helpPopup_collapse_cont = document.getElementsByClassName(
    "helpPopup-collapse-cont"
  )[0];
  helpPopup_collapse_cont.classList.toggle("active");
}
function addEventToHelpPopupCollapse() {
  let helpPopup_collapse_content = document.querySelectorAll(
    ".helpPopup-collapse-content li"
  );
  helpPopup_collapse_content.forEach((li) => {
    li.addEventListener("click", function () {
      document.getElementById("type_popup").value = this.innerHTML;
      showHelpPopupCollapseContent();
    });
  });
}
addEventToHelpPopupCollapse();
function showSucessOrNot() {
  let paymentStatus = localStorage.getItem("paymentDone");
  if (paymentStatus != null && paymentStatus != "NOT YET") {
    let successOverlay = document.getElementsByClassName(
      "paymentDoneOrNotOverlay"
    )[0];
    successOverlay.classList.remove("hide");
    localStorage.setItem("paymentDone", "NOT YET");
    document.body.style.overflow = "hidden";
  }
}
showSucessOrNot();
function aboutus() {
  window.location.href = "../about_us/about_us.html";
}
