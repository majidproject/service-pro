# 🛠️ ServicePro — On-Demand Service Marketplace

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_ID/deploy-status)](https://app.netlify.com/sites/service-pro-majid/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)](https://tailwindcss.com/)

**ServicePro** is a comprehensive, full-stack capable marketplace platform connecting customers with local service professionals. Built with the latest **Next.js 15 App Router**, it features a robust client-side state management system to handle complex user flows like booking, service creation, and dashboard management without external database dependencies for the MVP.

---

## ✨ Live Demo

🚀 **Live URL:** [https://service-pro-majid.netlify.app/](https://service-pro-majid.netlify.app/)

---

## 🎯 Key Features & Implementation Details

| Feature | Description |
| :--- | :--- |
| **🛍️ Smart Booking Flow** | Interactive multi-step booking process with loading states, real-time price calculation, and success feedback loop. |
| **🔍 Advanced Search** | Real-time filtering engine handling keywords and categories simultaneously using URL parameters (`useSearchParams`) for shareable links. |
| **👨‍🔧 Provider Ecosystem** | Dedicated "Become a Pro" flow allowing users to publish new services with dynamic image generation (via Picsum). |
| **📊 Unified Dashboard** | A dual-view dashboard managing both "My Bookings" (Customer role) and "My Services" (Provider role) in a single interface. |
| **🔐 Auth Simulation** | Context-based authentication system mocking Login/Logout flows, protected routes, and persistent user sessions via React Context. |

---

## 🧰 Tech Stack

- **Framework:** Next.js 15 (App Router, Server/Client Components)
- **Language:** TypeScript (Strict typing for robust code)
- **Styling:** Tailwind CSS (Responsive, Mobile-first design)
- **State Management:** React Context API (`BookingContext`, `AuthContext`, `ServiceContext`)
- **Deployment:** Netlify (CI/CD Integration)

---

## 📂 Project Structure

```bash
src/
├── app/                 # App Router pages (auth, dashboard, booking, etc.)
├── components/          # Reusable UI components
│   ├── features/        # Business logic components (BookingForm, ServiceCards)
│   └── layout/          # Layout components (Header, Footer, Sidebar)
├── context/             # Global state management logic
├── constants/           # Static data (mock data)
├── types/               # TypeScript interfaces and type definitions
└── lib/                 # Utility functions
````

-----

## 🚀 How to Run Locally

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/service-pro.git](https://github.com/YOUR_GITHUB_USERNAME/service-pro.git)
    cd service-pro
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser.

-----

-----

🧠 Created with ❤️ by **Majid Mansouri**

### Connect with Me

I am open to full-stack opportunities and collaboration.

| Resource | Link |
| :--- | :--- |
| 🌐 **Portfolio** | [majidproject.github.io/web-portfolio/](https://majidproject.github.io/web-portfolio/) |
| 🔗 **LinkedIn** | [linkedin.com/in/majid-mansouri-a8163866](https://www.linkedin.com/in/majid-mansouri-a8163866) |
| 📧 **Email** | [mm.project.88@gmail.com](mailto:mm.project.88@gmail.com) |

```
```