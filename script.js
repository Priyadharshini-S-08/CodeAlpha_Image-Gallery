let galleryItems = document.querySelectorAll(".gallery-item img");
let lightbox = document.querySelector(".lightbox");
let lightboxImg = document.querySelector(".lightbox-img");
let closeBtn = document.querySelector(".close");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let filterBtns = document.querySelectorAll(".filter-buttons button");

let current = 0; 

galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    current = index;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  current = (current + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[current].src;
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[current].src;
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});


filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    let category = btn.getAttribute("data-filter");

    document.querySelectorAll(".gallery-item").forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
