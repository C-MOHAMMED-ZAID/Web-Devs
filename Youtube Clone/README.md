# 🎬 YouTube Clone

A fully responsive, interactive YouTube clone that mimics the core features and design of the real YouTube platform. Built with HTML, CSS, JavaScript, this project is an excellent showcase of front-end development skills, UI/UX design, and API integration. The main aim of this project is to learn how to structure, style, and add functionality to a complex, real-world web application.

---


## ✨ Features

- **Homepage Video Feed:** Displays a grid of video thumbnails, titles, channels, and view counts, just like YouTube’s homepage[4][2].
- **Responsive Navigation Bar:** Includes a logo, search bar, and user avatar, adapting seamlessly to all screen sizes[4].
- **Collapsible Sidebar:** Quick access to navigation links and categories; can be toggled for more space[4].
- **Dynamic Video Player:** Click a video to open a dedicated player page with title, channel info, views, and description[2][4].
- **Search Functionality:** Instantly search for videos by title or keyword, filtering the video feed in real time[2][4].
- **Light/Dark Theme Toggle:** Switch between light and dark modes for a modern, user-friendly experience[4].
- **Video Upload (Frontend Demo):** Simulate uploading a new video with a thumbnail and metadata[2].
- **Comment Section:** Users can post and view comments under each video (demo functionality)[6].
- **Like/Subscribe Buttons:** Interactive buttons for engagement, visually updating on click[6].
- **Fully Responsive Design:** Works beautifully on desktop, tablet, and mobile devices[4][6].

---

## 🛠️ How It Works

1. **Browse Videos:** The homepage displays a grid of video cards. Click any thumbnail to view the video.
2. **Watch & Interact:** On the video page, watch the video, read its description, post comments, and interact with like/subscribe buttons.
3. **Search:** Use the search bar to filter videos instantly by keywords.
4. **Upload Demo:** (If implemented) Use the upload form to add a new video (frontend only).
5. **Sidebar & Theme:** Toggle the sidebar for navigation or switch between light/dark themes for a personalized experience.

---

## 💡 Code Example

// Example: Filtering videos by search input
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function(e) {
const query = e.target.value.toLowerCase();
const filteredVideos = videos.filter(video =>
video.title.toLowerCase().includes(query)
);
renderVideoFeed(filteredVideos);
});



---

### 🖥️ Example UI / Output

| Feature              | Example Interaction                        |
|----------------------|--------------------------------------------|
| Video Card           | Click thumbnail to open video player       |
| Search Bar           | Type "music" to filter music-related videos|
| Theme Toggle         | Switch to dark mode for night viewing      |
| Upload Button        | Add a new video (demo, frontend only)      |

---

open `index.html` in your browser for a static version.

---

## 🤔 Why This Project?

This YouTube clone was created to practice and demonstrate real-world web development skills, including responsive layouts, API integration, interactive UI, and scalable project structure. It’s ideal for learning how to build large, feature-rich applications and makes a standout portfolio piece[4][6][2].

---

## 📝 License

MIT License © [C MOHAMMED ZAID]

---

> **Note:**  
> This project is for learning and demonstration purposes only. It does not connect to YouTube’s backend or store real user data unless you integrate APIs.
