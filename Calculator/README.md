# 🧮 Calculator App

## 🔍 Overview

The **Calculator App** is a web-based arithmetic calculator designed to perform basic mathematical operations like addition, subtraction, multiplication, and division. Though simple in functionality, it marks a foundational milestone in mastering JavaScript logic, UI design, and event handling.

This project was built with the specific intent of **learning how to structure frontend logic**, manage user inputs, and simulate real-world application behavior — all from scratch.

---

## 🎯 Learning Objectives

- Implement event-driven programming in JavaScript.
- Handle user input and output formatting using the DOM.
- Understand functional separation between logic and UI.
- Practice validation and handling edge cases (e.g., dividing by zero).

---

## 🧰 Tech Stack

- **HTML** – Lays out the calculator's structure and display.
- **CSS** – Styles the calculator grid, buttons, and screen.
- **JavaScript** – Handles all logic, input storage, and computation.

---

## 🚀 How to Run

1. Clone or download the project folder.
2. Open `index.html` in any web browser.
3. Use your mouse or keyboard to input values.
4. View results in real-time as you click operations.

---

## 🧠 Features

- ➕ Performs all basic operations: `+`, `-`, `×`, `÷`
- 🧮 Displays input history and current results clearly
- ⌫ Includes **clear** and **delete last digit** functionality
- 🧠 Logic organized in functions for scalability
- ⚡ Responsive design — works on desktop and mobile

---

## 📁 Folder Structure

calculator-app/
├── index.html
├── style.css
├── script.js
└── README.md



---

## 💡 Use Case

This project is widely used as a **starting point** for frontend developers. You can extend it further with:
- Scientific calculator features (square root, power)
- Keyboard support and accessibility
- Dark/light themes
- Input validation improvements
- Real-time expression parsing with `eval()` or custom interpreters

---

## 🧾 Sample JavaScript Snippet

```javascript
function calculate(operator) {
  if (operator === '=') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else {
    display.value += operator;
  }
}
