const content = document.querySelector(".content");
const sidebar = document.querySelector(".sidebar");
const sidebarTogglers = document.querySelectorAll(".sidebar-toggler");
const btnClose = document.getElementById("btnClose");
const body = document.body; // Ambil elemen body

// Looping agar semua tombol dengan class "sidebar-toggler" punya event listener
sidebarTogglers.forEach((toggler) => {
  toggler.addEventListener("click", function () {
    sidebar.classList.toggle("expand");
    content.classList.toggle("shrink");

    // Tambahkan atau hapus class overflow-hidden ke body
    if (sidebar.classList.contains("expand")) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  });
});

// Event listener untuk tombol close
btnClose.addEventListener("click", function () {
  sidebar.classList.remove("expand");
  content.classList.remove("shrink");
  body.classList.remove("overflow-hidden"); // Hapus class saat sidebar ditutup
});

// tooltips

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) =>
    new bootstrap.Tooltip(tooltipTriggerEl, {
      container: "body", // Memastikan tooltip muncul di luar offcanvas
    })
);

// search image
document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi Tooltip Bootstrap
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Akses Galeri, Kamera, dan File
  document
    .getElementById("uploadButton")
    .addEventListener("click", function () {
      document.getElementById("fileInput").click();
    });

  // Event Ketika File Dipilih
  document
    .getElementById("fileInput")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        alert("File yang dipilih: " + file.name);
        // Anda bisa menampilkan pratinjau atau mengunggah gambar ke server di sini
      }
    });
});

// notification
document.addEventListener("DOMContentLoaded", function () {
  const notifList = document.getElementById("notifList");
  const emptyNotif = document.getElementById("emptyNotif");
  const clearAllBtn = document.getElementById("clearAllBtn");

  function checkNotifications() {
    if (notifList.children.length === 0) {
      emptyNotif.style.display = "block"; // Tampilkan gambar "No Notifications"
      clearAllBtn.style.display = "none"; // Sembunyikan tombol "Clear All"
    } else {
      emptyNotif.style.display = "none"; // Sembunyikan gambar
      clearAllBtn.style.display = "block"; // Tampilkan tombol "Clear All"
    }
  }

  // Hapus notifikasi tertentu
  notifList.addEventListener("click", function (event) {
    if (event.target.closest(".btn-delete")) {
      event.target.closest("li").remove();
      checkNotifications();
    }
  });

  // Hapus semua notifikasi
  clearAllBtn.addEventListener("click", function () {
    notifList.innerHTML = "";
    checkNotifications();
  });

  // Cek notifikasi saat offcanvas dibuka
  document
    .getElementById("offcanvasNotif")
    .addEventListener("shown.bs.offcanvas", checkNotifications);

  // Periksa notifikasi saat halaman dimuat
  checkNotifications();
});
