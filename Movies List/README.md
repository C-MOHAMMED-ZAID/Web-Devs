# 🎬 Movies List

## 🔍 Overview

The **Movies List** project is a dynamic frontend application that displays a collection of movies, allowing users to browse titles, view key details, and potentially filter or search through the list. It simulates a simple version of a movie directory or listing interface — like a mini IMDb clone.

This project was created as a learning exercise to understand how to display content dynamically using JavaScript and practice working with arrays, loops, and optional API integrations.

---

## 🎯 Learning Objectives

- Practice DOM manipulation for displaying multiple content cards.
- Understand how to loop through objects and render HTML programmatically.
- Learn how to structure and display real-world data like movie titles, genres, ratings, posters.
- Optionally use fetch calls to load data from a JSON file or movie API (like OMDb).

---

## 🧰 Tech Stack

- **HTML5** – Page layout and movie card containers.
- **CSS3** – Responsive card design and layout styling.
- **JavaScript** – Handles dynamic rendering, filtering, and optional fetch requests.

---

## 🚀 How to Run

1. Clone or download the project directory.
2. Open `index.html` in any browser.
3. Browse the movie list — or implement a filter/search (if integrated).

> If you're using an external API like OMDb:
> - Register for an API key at [omdbapi.com](https://www.omdbapi.com/)
> - Add your key and modify the fetch function accordingly.

---

## 🧠 Features

- 🎞️ Movie cards with title, genre, rating, and poster
- 🔍 Optional search functionality to filter titles
- 🧮 Data sourced from a static array or external API
- 🖼️ Clean layout for displaying content in grid format
- 📱 Fully responsive for mobile and desktop

---

## 💡 Use Case

This is a beginner-friendly project that introduces **real-world UI and data practices**. It's perfect for:
- Practicing fetch and async/await logic
- Exploring localStorage (for favoriting movies)
- Simulating frontend components in a React-style structure

Want to take it further?
- Add pagination or lazy loading
- Show detailed view on click
- Use localStorage to save a “watchlist”

---

## 🧾 Sample JS Snippet

```javascript
const movieList = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "The Dark Knight", genre: "Action", rating: 9.0 }
];

movieList.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <h3>${movie.title}</h3>
    <p>Genre: ${movie.genre}</p>
    <p>Rating: ${movie.rating}</p>
  `;
  document.getElementById("movies").appendChild(card);
});
