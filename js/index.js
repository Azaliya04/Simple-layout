const header = document.querySelector(".header");
const burger = document.querySelector(".Combined-Shape");
const closeIcon = document.querySelector(".closeIcon");
const navigation = document.querySelector(".navigation");

burger.addEventListener("click", function () {
  navigation.style.display = "block";
  header.classList.add("mobileNav");
  burger.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  navigation.style.display = "none";
  header.classList.remove("mobileNav");
  closeIcon.style.display = "none";
  burger.style.display = "block";
});
