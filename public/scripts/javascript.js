document
  .querySelectorAll(".nav-item a")
  .forEach((e) => e.addEventListener("click", (_) => change(e.dataset.id)));
function change(n) {
  let contents = document.querySelectorAll(".card-body");
  contents.forEach((p) => p.classList.remove("active"));
  contents[n - 1].classList.add("active");
}
