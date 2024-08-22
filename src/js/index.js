let button1 = document.getElementById("button-1");
let button2 = document.getElementById("button-2");
let socials = document.getElementById("socials");
let triangle = document.getElementById("triangle");
let profile = document.getElementById("profile");

button1.addEventListener("click", () => {
  if (
    socials.classList.contains("mobile:hidden") &&
    socials.classList.contains("desktop:hidden")
  ) {
    socials.classList.remove("mobile:hidden");
    socials.classList.remove("desktop:hidden");
    socials.classList.add("flex");
    triangle.classList.remove("hidden");
    button1.classList.add("desktop:bg-primary_dark");
    button1.classList.add("desktop:hover-share");
  } else {
    if (
      !socials.classList.contains("mobile:hidden") &&
      !socials.classList.contains("desktop:hidden")
    ) {
      socials.classList.add("mobile:hidden");
      socials.classList.add("desktop:hidden");
      triangle.classList.add("hidden");
      button1.classList.remove("desktop:bg-primary_dark");
      button1.classList.remove("desktop:hover-share");
    }
  }
});

button2.addEventListener("click", () => {
  if (
    !socials.classList.contains("mobile:hidden") &&
    !socials.classList.contains("desktop:hidden")
  ) {
    socials.classList.add("mobile:hidden");
    socials.classList.add("desktop:hidden");
    triangle.classList.add("hidden");
    button1.classList.remove("desktop:bg-primary_dark");
    button1.classList.remove("desktop:hover-share");
  }
});
