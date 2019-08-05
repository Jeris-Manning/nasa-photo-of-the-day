import React from 'react';
import styled from 'styled-components';

const Imgo = styled.img`
  border: solid #1c1c1c 20px;
  border-radius: 50%;
`;

const Tscope = styled.div`
  border-radius: 50%;
  border: solid black 15px;
`

const ImageDisplay = (props) => {
  return <Tscope><Imgo src={props.nasaData.url} /></Tscope>;
};

export default ImageDisplay;
