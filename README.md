# 🔍 Algo Visualizer

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/github/license/nikhxxt/algo-visualizer)
![Issues](https://img.shields.io/github/issues/nikhxxt/algo-visualizer)
![Forks](https://img.shields.io/github/forks/nikhxxt/algo-visualizer)
![Stars](https://img.shields.io/github/stars/nikhxxt/algo-visualizer)

A React-based web application that visualizes the Bubble Sort algorithm through animated bars, providing a step-by-step view of how elements are compared and rearranged.

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [⚙️ How It Works](#️-how-it-works)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚀 Getting Started](#-getting-started)
- [💻 Usage](#-usage)
- [🌐 Live Demo](#-live-demo)
- [📸 Screenshots](#-screenshots)
- [📁 Project Structure](#-project-structure)
- [📜 License](#-license)

---

## ✨ Features

- 📊 Visualizes Bubble Sort using animated bars
- 🔄 Generates random arrays for visualization
- 🫧 Step-by-step comparison and swapping animation
- ⚡ Interactive React-based interface
- 🧩 Separates sorting logic from the UI
- 📱 Responsive interface for different screen sizes

---

## ⚙️ How It Works

The application represents array values as vertical bars, where the height of each bar corresponds to its value.

When Bubble Sort is started:

1. Adjacent elements are compared.
2. Elements are swapped when they are in the wrong order.
3. The bars are updated to reflect each operation.
4. The process continues until the array is sorted.

This provides a visual representation of the algorithm's comparison and swapping process.

---

## 🛠️ Technologies Used

- **React.js** – Builds the interactive user interface
- **JavaScript (ES6+)** – Implements the sorting logic and application behavior
- **HTML5** – Structures the application
- **CSS3** – Handles styling and visual presentation
- **Create React App** – Development and build setup
- **Git & GitHub** – Version control and project hosting

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**
- **npm**
- **Git**

### Clone the Repository

```bash
git clone https://github.com/nikhxxt/algo-visualizer.git
cd algo-visualizer
````

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

---

## 💻 Usage

1. Open the application in your browser.
2. Click **Generate New Array** to create a random array.
3. Click **Bubble Sort** to start the visualization.
4. Observe the bars as elements are compared and swapped.
5. Generate a new array to run another visualization.

---

## 🌐 Live Demo

Try the visualizer here:

[https://nikhxxt.github.io/algo-visualizer/](https://nikhxxt.github.io/algo-visualizer/)

---

## 📸 Screenshots

![Algo Visualizer](https://github.com/user-attachments/assets/4193167b-cb8a-4e86-a49a-b44d1a5ac103)

---

## 📁 Project Structure

```text
algo-visualizer/
├── public/
├── src/
│   ├── algorithms/
│   ├── components/
│   ├── App.js
│   └── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📜 License

This project is licensed under the **MIT License**. See the [`LICENSE`](LICENSE) file for details.

