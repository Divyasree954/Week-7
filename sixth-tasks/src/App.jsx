import React from 'react';
import './App.css'; 

const ProductCard = ({ productName, price, description }) => {
  return (
    <div className="card product-card">
      <h2>{productName}</h2>
      <p><strong>Price:</strong> ${price}</p>
      <p>{description}</p>
    </div>
  );
};

const BookCard = ({ title, author, yearPublished }) => {
  return (
    <div className="card book-card">
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Year Published:</strong> {yearPublished}</p>
    </div>
  );
};

const EventCard = ({ eventName, date, location }) => {
  return (
    <div className="card event-card">
      <h2>{eventName}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};


const MovieCard = ({ title, director, releaseYear }) => {
  return (
    <div className="card movie-card">
      <h2>{title}</h2>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Release Year:</strong> {releaseYear}</p>
    </div>
  );
};

const RecipeCard = ({ recipeName, ingredients, cookingTime }) => {
  return (
    <div className="card recipe-card">
      <h2>{recipeName}</h2>
      <p><strong>Ingredients:</strong> {ingredients.join(', ')}</p>
      <p><strong>Cooking Time:</strong> {cookingTime} minutes</p>
    </div>
  );
};

const ProfileCard = ({ username, bio, profilePicture }) => {
  return (
    <div className="card profile-card">
      <img src={profilePicture} alt={username} className="profile-picture" />
      <h2>{username}</h2>
      <p>{bio}</p>
    </div>
  );
};


const CourseCard = ({ courseName, instructor, duration }) => {
  return (
    <div className="card course-card">
      <h2>{courseName}</h2>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Duration:</strong> {duration} hours</p>
    </div>
  );
};


const NewsCard = ({ headline, summary, source }) => {
  return (
    <div className="card news-card">
      <h2>{headline}</h2>
      <p>{summary}</p>
      <p><strong>Source:</strong> {source}</p>
    </div>
  );
};


const JobCard = ({ jobTitle, companyName, location }) => {
  return (
    <div className="card job-card">
      <h2>{jobTitle}</h2>
      <p><strong>Company:</strong> {companyName}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};


const SongCard = ({ songTitle, artist, album }) => {
  return (
    <div className="card song-card">
      <h2>{songTitle}</h2>
      <p><strong>Artist:</strong> {artist}</p>
      <p><strong>Album:</strong> {album}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>All Cards</h1>
      <div className="card-container">
        <ProductCard productName="Laptop" price="999.99" description="A high-performance laptop." />
        <ProductCard productName="Smartphone" price="499.99" description="A latest-model smartphone." />
        
        <BookCard title="1984" author="George Orwell" yearPublished="1949" />
        <BookCard title="To Kill a Mockingbird" author="Harper Lee" yearPublished="1960" />
        
        <EventCard eventName="Concert" date="2024-12-01" location="New York" />
        <EventCard eventName="Conference" date="2024-11-15" location="San Francisco" />
        
        <MovieCard title="Inception" director="Christopher Nolan" releaseYear="2010" />
        <MovieCard title="The Matrix" director="Lana Wachowski, Lilly Wachowski" releaseYear="1999" />
        
        <RecipeCard recipeName="Spaghetti Carbonara" ingredients={["Spaghetti", "Eggs", "Cheese", "Bacon"]} cookingTime="20" />
        <RecipeCard recipeName="Chicken Curry" ingredients={["Chicken", "Curry Powder", "Coconut Milk", "Vegetables"]} cookingTime="30" />
        
        <ProfileCard username="john_doe" bio="Web Developer with a passion for coding." profilePicture="https://via.placeholder.com/100" />
        <ProfileCard username="jane_smith" bio="Graphic Designer and Illustrator." profilePicture="https://via.placeholder.com/100" />
        
        <CourseCard courseName="React Basics" instructor="Jane Doe" duration="10" />
        <CourseCard courseName="Advanced JavaScript" instructor="John Smith" duration="15" />
        
        <NewsCard headline="Breaking News: New Tech Released" summary="New tech is revolutionizing the industry." source="Tech News" />
        <NewsCard headline="Economy Update" summary="The economy is experiencing significant changes." source="Finance Daily" />
        
        <JobCard jobTitle="Software Engineer" companyName="Tech Corp" location="San Francisco" />
        <JobCard jobTitle="Product Manager" companyName="Innovate Inc" location="New York" />
        
        <SongCard songTitle="Imagine" artist="John Lennon" album="Imagine" />
        <SongCard songTitle="Bohemian Rhapsody" artist="Queen" album="A Night at the Opera" />
      </div>
    </div>
  );
};

export default App;
