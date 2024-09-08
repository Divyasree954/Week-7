import React from 'react';

// Header Component
const Header = () => {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 My Company</p>
    </footer>
  );
};

// Sidebar Component
export const Sidebar = () => {
  return (
    <aside>
      <h2>Sidebar</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </aside>
  );
};

// App Component
const App = () => {
  return (
    <div>
      <Header />
      <h1>Hello, World!</h1>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
