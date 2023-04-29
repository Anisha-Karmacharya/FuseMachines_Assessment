const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // to show menu
    nav.classList.toggle("show-menu");
    // show and hide menu icon
    toggle.classList.toggle("show-icon");
  });
};
showMenu("nav-toggle", "nav-menu");

// DROPDOWN MENU
const dropdownItems = document.querySelectorAll(".dropdown__item");
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__button");
  dropdownButton.addEventListener("click", () => {
    const showDropdown = document.querySelector(".show-dropdown");
    toggleItem(item);
    if (showDropdown && showDropdown != item) {
      toggleItem(showDropdown);
    }
  });
});
const toggleItem = (item) => {
  const dropdownContainer = item.querySelector(".dropdown__container");

  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};

// LOGIN OVERLAY
const modal = document.querySelector('.overlay');
const closeModal = document.querySelector('#close-modal');
setTimeout(() =>{
    modal.classList.toggle('show-modal')
}, 5000)
closeModal.addEventListener("click", ()=> {
    modal.classList.remove('show-modal');
    modal.classList.add("hide-modal")
})

// FORM VALIDATION
function validateForm() {
  var email = document.forms["login-form"]["email"].value;
  var password = document.forms["login-form"]["password"].value;

  if (email == "") {
    document.getElementById("email-error").innerHTML = "*Email is required";
    return false;
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  if (password == "") {
    document.getElementById("password-error").innerHTML = "*Password is required";
    return false;
  } else {
    document.getElementById("password-error").innerHTML = "";
  }
}
