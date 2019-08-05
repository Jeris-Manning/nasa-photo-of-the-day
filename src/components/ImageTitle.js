import React, {useState} from "react";
import styled from 'styled-components';


const NasaTitle = styled.h1`
font-size: 80px;
font-family: 'Sirin Stencil', cursive;
color: #ebffc2;
background-color: rgba(0, 0, 0, .5);
`;

const ImageTitle = (props) => {
  return <NasaTitle>{props.nasaData.title}</NasaTitle>;
  
}

export default ImageTitle;