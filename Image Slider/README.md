# 🖼️ Image Slider

## 🔍 Overview

The **Image Slider** project is a classic UI component that allows users to slide through a series of images using navigation controls or autoplay functionality. This project helped me understand how to work with image arrays, dynamic DOM updates, and basic animations — all using plain JavaScript.

Though common in design, building one from scratch was a powerful exercise in timing logic, DOM selection, event handling, and responsive UI behavior.

---

## 🎯 Learning Objectives

- Create an interactive carousel without using external libraries.
- Use JavaScript timers (`setInterval`, `clearInterval`) for automatic transitions.
- Handle left/right arrow navigation through image arrays.
- Learn responsive design strategies to fit all screen sizes.

---

## 🧰 Tech Stack

- **HTML5** – Image container, controls, and structure.
- **CSS3** – Slider transitions, layout, responsiveness.
- **JavaScript** – Navigation logic and image switching.

---

## 🚀 How to Run

1. Download or clone the project directory.
2. Open `index.html` in any modern browser.
3. Use navigation arrows or autoplay to cycle through images.

---

## 🧠 Features

- 🔁 Automatic and manual image slide transitions
- 🧭 Previous/Next navigation buttons
- ⚡ Smooth fade or slide animations
- 🖼️ Easily customizable images (local or URLs)
- ✅ Fully responsive layout for mobile and desktop

---

## 💡 Use Case

This component is commonly found on:
- 🛍️ E-commerce homepages
- 📰 News sites and blogs
- 📸 Photography portfolios
- 📱 Product showcases and testimonials

It can be extended to include:
- Navigation dots or thumbnails
- Captions and overlay text
- Lazy loading for performance

---

## 🧾 Sample JavaScript Snippet

```javascript
let index = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(i) {
  slides.forEach(slide => slide.style.display = "none");
  slides[i].style.display = "block";
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

showSlide(index);
