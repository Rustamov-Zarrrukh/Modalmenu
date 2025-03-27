let menu = document.querySelector(".Modalmenu")
let open = document.querySelector(".open")
let close = document.querySelector(".close")

open.addEventListener("click", function () {
  menu.classList.add("active"); // Открыть меню
});

close.addEventListener("click", function () {
  menu.classList.remove("active"); // Закрыть меню
});
