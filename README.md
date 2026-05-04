# NexusSoft - Premium Digital Storefront (Client) 🚀


Welcome to the frontend repository for **NexusSoft**, a modern, premium digital product storefront. This application is designed to provide a seamless, lag-free, and highly aesthetic user experience for purchasing digital software subscriptions, developer tools, and creative assets.

## ✨ Features

- **Premium UI/UX:** Built with Tailwind CSS and Framer Motion for buttery-smooth animations, sleek glassmorphism effects, and dynamic layouts.
- **Product Catalog:** Beautifully presented digital products with features, pricing, and dynamic filtering.
- **Shopping Cart:** Fully functional cart system using React Context API.
- **Simulated Authentication:** Login/Signup flow for users and administrators.
- **Admin Dashboard:** A dedicated dashboard for admins to easily add new products and customer testimonials directly to the database.
- **Performance Optimized:** Heavy CSS filters have been optimized using radial gradients to ensure 60fps scrolling on all devices.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Language:** TypeScript

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.
*Note: To run the full application, you also need the **NexusSoft Backend Server** running on `localhost:5000`.*

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JsArafath/nextsoft-sell-client.git
   cd nextsoft-sell-client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or `5174` if the port is busy).

## 📂 Folder Structure

```text
src/
├── components/     # Reusable UI components (Navbar, Footer, Hero, ProductCard, etc.)
├── context/        # React Context providers (AuthContext, CartContext, DataContext)
├── data/           # Local fallback data for products and testimonials
├── pages/          # Full page components (Home, Products, AdminDashboard, etc.)
├── App.tsx         # Main application routing and layout wrapper
└── index.css       # Global styles and Tailwind imports
```

## 🔌 Backend Integration

This frontend is configured to communicate with the NexusSoft Express/MongoDB backend at `http://localhost:5000/api`. 
If the backend is offline, the app features a **graceful fallback mechanism** that loads local mock data so the UI never breaks during development.

## 🌍 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file (if you have a deployed backend):

`VITE_API_BASE_URL` (Optional, defaults to `http://localhost:5000/api`)

## 📸 Screenshots

*(You can add screenshots of your application here)*
- **Home Page**
- **Product Details**
- **Admin Dashboard**

## 🤝 Contributing

Contributions are always welcome!
Feel free to fork the repository and submit pull requests.

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

---
*Designed with ❤️ for digital creators.*
