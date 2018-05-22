import React from 'react';

const Journal = (props) => {
  const journals = props.data.map(wine =>{
    return (
      <div id="form-preview" className="form-style-6" key={wine.id} >
        <h1>{wine.name}</h1>
        <h3>Name: <span>{wine.name}</span></h3>
        <h3>Vintage: <span>{wine.vintage}</span> </h3>
        <h3>Varietal: <span>{wine.varietal}</span></h3>
        <h3>Winery: <span>{wine.winery}</span></h3>
        <h3>Location: <span>{wine.location}</span></h3>
        <h3>Tasting Notes:</h3>
        <span>{wine.notes}</span>
        <h3>Rating: <span>{wine.rating}</span></h3>
        <button name={wine.id} onClick={props.handleDelete} type="delete" >Delete</button>
      </div>
    )
  })

  return (
    <div>
      <h1 className="" >Journals</h1>
      <div id="journals" >
        {journals}
      </div>
    </div>
  );
};

export default Journal;

