import React from "react";
import styled from 'styled-components';

const InfoStyle = styled.h3`
color: white;
background-color: rgba(0, 0, 0, .5);
`

const ImageInfo = (props) => {
  return (
    <InfoStyle>{props.nasaData.copyright}  {props.nasaData.date}</InfoStyle>
  )
}

export default ImageInfo