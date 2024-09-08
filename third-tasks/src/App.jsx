import React from 'react';
import './App.css'; // Import external CSS

// Header Component
const Header = () => {
  return (
    <header className="header">
      <h1>My Application</h1>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </footer>
  );
};

// NavigationMenu Component
const NavigationMenu = () => {
  return (
    <nav className="navigation-menu">
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

// Banner Component
const Banner = () => {
  return (
    <div className="banner">
      <h2>Welcome to Our Website</h2>
    </div>
  );
};

// LoginForm Component
const LoginForm = () => {
  return (
    <form className="login-form">
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};

// ContactForm Component
const ContactForm = () => {
  return (
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

// Dashboard Component
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
      <div className="card">Card 4</div>
    </div>
  );
};

// Notification Component
const Notification = ({ type, message }) => {
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <a href="#dashboard">Dashboard</a>
      <a href="#reports">Reports</a>
      <a href="#settings">Settings</a>
    </aside>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <div>
      <Header />
      <NavigationMenu />
      <Banner />
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Content</h2>
        <p>This is a modal.</p>
      </Modal>
      <LoginForm />
      <ContactForm />
      <Dashboard />
      <Notification type="success" message="Operation was successful!" />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
