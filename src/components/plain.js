import React, { Component } from 'react';
import plain from './images/plain.jpg';
import './css/slice.css';

function Plain() {
  return(
    <div className="Plain col-4">
      <div className="card">
        <img src={ plain } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Plain Slice</h5>
          <p className="card-text">Its got cheese, its got tomato, and its only a dollar. What else could you ask for.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Plain;
