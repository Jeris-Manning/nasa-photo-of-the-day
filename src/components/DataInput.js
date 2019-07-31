import React, {useState, useEffect} from "react";
import Axios from 'axios';

const DataInput = (props) => {

const axios = require('axios');

useEffect((props) => {
  

  
  axios.get(
      'https://api.nasa.gov/planetary/apod?api_key=fGOzQs7PeQipXGSUlafqoG4fyLlI8JtgZR0gLBq8'
    )
    .then((res) => {
     setNasaData(res.data);
      
    })
    
    .catch((err) => console.log(err));

return nasaData;

}, []);
}
export default DataInput;