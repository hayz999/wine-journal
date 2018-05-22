import React from 'react';

const Preview = (props) => {
  return (
    <div id="form-preview" className="form-style-6">
      <h1>Preview</h1>
      <h3>Name: <span>{props.name}</span></h3>
      <h3>Vintage: <span>{props.vintage}</span> </h3>
      <h3>Varietal: <span>{props.varietal}</span></h3>
      <h3>Winery: <span>{props.winery}</span></h3>
      <h3>Location: <span>{props.location}</span></h3>
      <h3>Tasting Notes:</h3>
      <span>{props.notes}</span>
      <h3>Rating: <span>{props.rating}</span></h3>
    </div>
  );
};

export default Preview;