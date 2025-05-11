# ⏳ Countdown Timer

## 🔍 Overview

The **Countdown Timer** is a real-time JavaScript-based tool that lets users input a future time or date, then displays the live countdown until that target is reached. It’s a perfect project to understand real-world concepts like **interval timers**, **date manipulation**, and **dynamic content rendering** using JavaScript.

This project was built as part of my self-paced learning journey to grasp how time works in the browser and how to manage **real-time UI updates** effectively.

---

## 🎯 Learning Objectives

- Understand how to work with JavaScript's `Date` object.
- Use `setInterval()` to create dynamic countdown updates.
- Calculate and display remaining days, hours, minutes, and seconds.
- Learn how to handle user input and validate time-based events.

---

## 🧰 Tech Stack

- **HTML** – Input fields and timer display structure.
- **CSS** – Responsive and centered countdown UI.
- **JavaScript** – Handles time math, updates the display, and stops the timer.

---

## 🚀 How to Run

1. Clone or download the project directory.
2. Open `index.html` in any modern browser.
3. Enter a future time or date.
4. Watch the countdown begin in real-time.

---

## 🧠 Features

- ⏱️ Accurate countdown from current time to target time.
- 🔁 Live updating interface using `setInterval`.
- 🧮 Displays remaining time in `DD:HH:MM:SS` format.
- 🚫 Stops automatically when countdown reaches zero.
- 💡 Handles edge cases (e.g. inputting a past date).

---

## 📁 Folder Structure

countdown-timer/
├── index.html
├── style.css
├── script.js
└── README.md



---

## 💡 Use Case

The countdown timer can be used in:
- 🔔 Product launch pages
- ⏳ Event reminders
- 🕹️ Game timers
- 📅 Coming soon landing pages

This project is extendable — you could easily add:
- Notification alerts when time runs out
- Input fields for custom messages or event names
- Sound effects or animations on timer completion

---

## 🧾 Sample JavaScript Snippet

```javascript
function startCountdown(targetDate) {
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerText = "Time's up!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerText =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}
