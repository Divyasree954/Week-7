import React from 'react';
import './App.css'; 
// Box Component
const Box = ({ width, height, backgroundColor }) => {
  const style = {
    width,
    height,
    backgroundColor,
  };
  return <div style={style} />;
};

// Title Component
const Title = ({ text }) => {
  const style = {
    fontSize: '24px',
    color: '#333',
    margin: '20px 0',
  };
  return <h1 style={style}>{text}</h1>;
};

// Container Component
const Container = ({ children }) => {
  const style = {
    padding: '20px',
    border: '1px solid #ddd',
    maxWidth: '800px',
    margin: '0 auto',
  };
  return <div style={style}>{children}</div>;
};

// Button Component
const Button = ({ text, onClick }) => {
  const style = {
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    padding: '10px 20px',
    margin: '10px 0',
    border: 'none',
    cursor: 'pointer',
  };
  return <button style={style} onClick={onClick}>{text}</button>;
};

// Text Component
const Text = ({ text }) => {
  const style = {
    color: '#333',
    fontWeight: '400',
    lineHeight: '1.5',
  };
  return <p style={style}>{text}</p>;
};

// Header Component
const Header = ({ text }) => {
  const style = {
    backgroundColor: '#4CAF50',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
  };
  return <header style={style}>{text}</header>;
};

// Footer Component
const Footer = ({ text }) => {
  const style = {
    backgroundColor: '#f1f1f1',
    padding: '15px',
    fontSize: '14px',
    textAlign: 'center',
    color: '#333',
  };
  return <footer style={style}>{text}</footer>;
};

// Section Component
const Section = ({ children }) => {
  const style = {
    margin: '20px auto',
    padding: '15px',
    border: '1px solid #ddd',
    maxWidth: '600px',
  };
  return <section style={style}>{children}</section>;
};

// Label Component
const Label = ({ text }) => {
  const style = {
    fontSize: '16px',
    color: '#333',
    display: 'block',
    marginBottom: '10px',
  };
  return <label style={style}>{text}</label>;
};

// Card Component
const Card = ({ children }) => {
  const style = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };
  return <div style={style}>{children}</div>;
};

// Main App Component
const App = () => {
  return (
    <div>
      <Header text="This is the Header" />
      <Container>
        <Title text="This is a Title" />
        <Box width="200px" height="200px" backgroundColor="lightblue" />
        <Text text="This is some text." />
        <Button text="Click Me" onClick={() => alert('Button Clicked')} />
        <Section>
          <Label text="Name:" />
          <Card>
            <Title text="Card Title" />
            <Text text="This is card content." />
          </Card>
        </Section>
      </Container>
      <Footer text="This is the Footer" />
    </div>
  );
};

export default App;
