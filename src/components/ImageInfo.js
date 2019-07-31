import React from "react";

const ImageInfo = (props) => {
  return (
    <h3>Photo by {props.nasaData.copyright} - {props.nasaData.date}</h3>
  )
}

export default ImageInfo