document
  .querySelectorAll(".nav-item a")
  .forEach((e) => e.addEventListener("click", (_) => change(e.dataset.id)));
function change(n) {
  let panels = document.querySelectorAll(".card-body");
  panels.forEach((p) => p.classList.remove("active"));
  panels[n - 1].classList.add("active");
}
