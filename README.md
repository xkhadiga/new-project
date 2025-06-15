# Shopora - E-commerce Web Application

## Project Description
Shopora is a modern, responsive e-commerce web application built with React.js. It provides a seamless shopping experience with features like product browsing by category, search functionality, product details, a shopping cart, and a favorites list. The application is designed to be user friendly and visually appealing across various devices.

## Features
-   **Product Catalog:** Browse a wide range of products.
-   **Category based Browsing:** Filter products by different categories.
-   **Product Search:** Easily find products using a search bar.
-   **Product Details Page:** View detailed information about each product.
-   **Shopping Cart:** Add, update, and remove items from the cart.
-   **Favorites List:** Mark products as favorites for quick access.
-   **Responsive Design:** Optimized for mobile, tablet, and desktop screens.
-   **User Authentication (Placeholder):** Account, Login, and Register pages are present for future integration.
-   **Scroll to Top:** Automatically scrolls to the top of the page on route change for better UX.

## Technologies Used
-   **React.js:** Frontend JavaScript library for building user interfaces.
-   **React Router DOM:** For declarative routing in React applications.
-   **Redux Toolkit:** For efficient state management.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **DummyJSON:** Used as a mock API for product data.



## Usage
-   Navigate through categories using the header.
-   Use the search bar to find specific products.
-   Click on a product card to view its details.
-   Add products to your cart or favorites list.
-   Manage your cart items and proceed to checkout.

## Project Structure
```
.
├── public/
├── src/
│   ├── assets/             # Static assets like images and icons
│   ├── Components/         # Reusable UI components (e.g., Card, UpButton, ScrollToTop)
│   ├── pages/              # Main application pages (e.g., HomePage, ProductPage, Search)
│   ├── Sections/           # Larger sections of the application (e.g., Header, Footer, Testimonials)
│   ├── store/              # Redux store setup and slices (e.g., cartSlice, favoritesSlice)
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point of the React application
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

