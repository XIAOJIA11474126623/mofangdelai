const shell = document.querySelector(".app-shell");

function setRoute(route) {
  shell.dataset.view = route;
  history.replaceState(null, "", `#${route}`);
  document.querySelectorAll("[data-route]").forEach((el) => {
    const active = el.dataset.route === route;
    el.classList.toggle("active", active);
  });
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

const initialRoute = location.hash.replace("#", "") || "home";
setRoute(initialRoute);

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-route]");
  if (!trigger) return;
  setRoute(trigger.dataset.route);
});

document.querySelectorAll("[data-route='chat']").forEach((el) => {
  el.addEventListener("click", () => setRoute("chat"));
});

document.querySelectorAll("[data-route='discover']").forEach((el) => {
  el.addEventListener("click", () => setRoute("discover"));
});

document.querySelectorAll("[data-route='home']").forEach((el) => {
  el.addEventListener("click", () => setRoute("home"));
});

window.addEventListener("hashchange", () => {
  setRoute(location.hash.replace("#", "") || "home");
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => event.preventDefault());
});

if (window.lucide) {
  lucide.createIcons();
}
