import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const Banner = () => {
  const images = [
    require('./assets/banner1.jpg'),
    require('./assets/banner2.jpg'),
    require('./assets/banner3.jpg')
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div>
      <img src={images[currentImage]} alt="Banner" style={{ width: '100%' }} />
    </div>
  );
};
const ImageSlider = () => {
  const images = [
    require('./assets/slider1.jpg'),
    require('./assets/slider2.jpg'),
    require('./assets/slider3.jpg')
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImage]} alt="Slider" style={{ width: '100%' }} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

const VideoGallery = () => {
  const videos = [
    require('./assets/video1.jpg'),
    require('./assets/video2.jpg'),
    require('./assets/video3.jpg')
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {videos.map((video, index) => (
        <img key={index} src={video} alt={`Video ${index + 1}`} style={{ width: '30%' }} />
      ))}
    </div>
  );
};

const LogoGallery = () => {
  const logos = [
    require('./assets/logo1.png'),
    require('./assets/logo2.png'),
    require('./assets/logo3.png')
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt={`Logo ${index + 1}`} style={{ width: '15%' }} />
      ))}
    </div>
  );
};
const ArtworkGallery = () => {
  const artworks = [
    {
      id: 1,
      image: require('./assets/art1.jpg'),
      title: 'Artwork 1',
      description: 'Description of Artwork 1'
    },
    {
      id: 2,
      image: require('./assets/art2.jpg'),
      title: 'Artwork 2',
      description: 'Description of Artwork 2'
    },
    {
      id: 3,
      image: require('./assets/art3.jpg'),
      title: 'Artwork 3',
      description: 'Description of Artwork 3'
    }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      {artworks.map((art) => (
        <div key={art.id} style={{ width: '30%', textAlign: 'center' }}>
          <img src={art.image} alt={art.title} style={{ width: '100%' }} />
          <h3>{art.title}</h3>
          <p>{art.description}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Banner</h1>
      <Banner />

      <h1>Image Slider</h1>
      <ImageSlider />

      <h1>Video Gallery</h1>
      <VideoGallery />

      <h1>Logo Gallery</h1>
      <LogoGallery />

      <h1>Artwork Gallery</h1>
      <ArtworkGallery />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
