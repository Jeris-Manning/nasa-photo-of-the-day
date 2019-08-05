import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import styled from 'styled-components';
import ImageTitle from './components/ImageTitle';
import ImageDisplay from './components/ImageDisplay';
import ImageInfo from './components/ImageInfo';
import ImageDescription from './components/ImageDescription';

function App() {
  const axios = require('axios');

  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=fGOzQs7PeQipXGSUlafqoG4fyLlI8JtgZR0gLBq8'
      )
      .then((res) => {
        setNasaData(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='App'>
      <ImageTitle nasaData={nasaData} />
      <ImageInfo nasaData={nasaData} />
      <ImageDisplay nasaData={nasaData} />
      <ImageDescription nasaData={nasaData} />
    </div>
  );
}

export default App;
