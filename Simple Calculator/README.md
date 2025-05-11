# Simple Calculator

A clean, interactive, and beginner-friendly calculator built with HTML, CSS, and JavaScript. This project lets users perform basic arithmetic operations in a responsive and visually appealing interface. The main goal of this calculator is to practice DOM manipulation, event handling, and responsive design.

---

## ✨ Features

- Basic arithmetic: addition, subtraction, multiplication, and division
- Responsive design for use on desktop and mobile devices
- Real-time calculation as you input numbers and operators
- Clear and reset functionality
- Keyboard and button input support

---

## 🛠️ How It Works

1. **Enter numbers and operators** using the on-screen buttons or your keyboard.
2. **See results instantly** as you complete each operation.
3. **Clear** the current calculation at any time with the "C" or "AC" button.

---

## 💡 Code Example

// Basic calculator operation
function calculate(a, b, operator) {
switch(operator) {
case '+': return a + b;
case '-': return a - b;
case '*': return a * b;
case '/': return b !== 0 ? a / b : 'Error';
default: return 0;
}
}
console.log(calculate(5, 3, '+')); // Output: 8


---

### 🖥️ Example UI / Output

| Input Sequence | Displayed Result |
|---------------|------------------|
| 2 + 3         | 5                |
| 7 × 4         | 28               |
| 9 ÷ 0         | Error            |

---

## 📦 Installation

1. Clone the repository
2. Open `index.html` in your browser.

---

## 🤔 Why This Project?

This calculator was created as a fun way to learn and practice JavaScript basics, event handling, and responsive UI design. It's a perfect starting point for beginners and a great foundation for adding more advanced calculator features.

---

## 📝 License

MIT License © [C MOHAMMED ZAID]

---

> **Note:**  
> This is a simple project for learning and practice. Feel free to modify and expand it!
