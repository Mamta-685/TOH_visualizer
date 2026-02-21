# 🗼 Tower of Hanoi Visualizer

An interactive web-based visualization of the Tower of Hanoi algorithm built using **Flask (Python)** and **JavaScript**.

This project demonstrates recursion, algorithm visualization, and dynamic DOM manipulation with smooth UI animations.

---

## 🚀 Features

- 🎯 User input for number of disks
- 🔁 Recursive Tower of Hanoi solution
- 🎬 Step-by-step disk animation
- 📊 Live step and move counter
- 🌙 Modern neon-themed UI
- ⚡ Smooth frontend animation logic

---

## 🧠 Algorithm

The Tower of Hanoi follows a recursive pattern:

For `n` disks:

1. Move `n-1` disks from Source → Auxiliary
2. Move largest disk from Source → Destination
3. Move `n-1` disks from Auxiliary → Destination

Minimum number of moves required:
`2^n - 1`


---

## 🏗️ Tech Stack

### 🔹 Backend
- Python
- Flask

### 🔹 Frontend
- HTML
- CSS
- JavaScript (DOM manipulation & animation)

---

## 📂 Project Structure

---

## 🏗️ Tech Stack

### 🔹 Backend
- Python
- Flask

### 🔹 Frontend
- HTML
- CSS
- JavaScript (DOM manipulation & animation)

---

## 📂 Project Structure

```bash
TOH_visualizer/
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── app.py
└── README.md
```
---

## ⚙️ How It Works

- Flask handles routing and backend logic.
- Recursive algorithm generates disk moves.
- JavaScript dynamically creates disks.
- DOM manipulation animates disk movement.
- UI updates steps and move counter in real-time.

This separation keeps backend logic clean and frontend interactive.

---

## 🖥️ How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/TOH_visualizer.git
cd TOH_visualizer
---
```
## ⚙️ How It Works

- Flask handles routing and backend logic.
- Recursive algorithm generates disk moves.
- JavaScript dynamically creates disks.
- DOM manipulation animates disk movement.
- UI updates steps and move counter in real-time.

This separation keeps backend logic clean and frontend interactive.

---

## 🖥️ How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/TOH_visualizer.git
cd TOH_visualizer
2️⃣ Install dependencies
pip install flask
3️⃣ Run the application
python app.py
4️⃣ Open in browser
http://127.0.0.1:5000
```

🎯 Learning Outcomes

Understanding recursion deeply

Visualizing algorithm execution

Integrating Flask with frontend JavaScript

DOM manipulation & animation

UI/UX design principles

Full-stack project structure

🔮 Future Improvements

Shift more logic to backend API

Convert to API-driven architecture

Add manual play mode

Add pause/resume animation

Deploy on cloud (Render / Railway / AWS)

Add time complexity visual indicator

📌 Author

Mamta
B.Tech CSE (AI)
