const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar");
const sidebarTogglers = document.querySelectorAll(".sidebar-toggler"); // Pakai querySelectorAll
const btnClose = document.getElementById("btnClose");

// Looping agar semua tombol dengan class "sidebar-toggler" punya event listener
sidebarTogglers.forEach((toggler) => {
  toggler.addEventListener("click", function () {
    sidebar.classList.toggle("expand");
    content.classList.toggle("shrink");
  });
});

// Event listener untuk tombol close
btnClose.addEventListener("click", function () {
  sidebar.classList.remove("expand");
  content.classList.remove("shrink");
});
