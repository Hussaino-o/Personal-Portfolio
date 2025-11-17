const sidebarButton = document.querySelector(".show-contacts")

sidebarButton.addEventListener("click", () => {
  document.querySelector("aside.sidebar").classList.toggle("active")
  document.querySelector(".sidebar-info-more").classList.toggle("active")
})