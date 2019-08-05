import React from "react";
import styled from 'styled-components';

const DescriptionStyle = styled.p`
color: white;
font-size: 20px;
background-color: rgba(0, 0, 0, .5);
`

const ImageDescription = (props) => {
  return <DescriptionStyle>{props.nasaData.explanation}</DescriptionStyle>;
}

export default ImageDescription