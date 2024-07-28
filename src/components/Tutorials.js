import React from 'react';
import { faker } from '@faker-js/faker';
import './FeaturedArticles.css';

const Tutorials = () => {
  const tutorials = Array.from({ length: 3 }, () => ({
    title: faker.lorem.words(5),
    description: faker.lorem.sentence(),
    author: faker.person.fullName(),
    rating: faker.number.int({ min: 1, max: 5 }),
    image: faker.image.url(),
  }));

  return (
    <div className="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <div className="card-group">
        {tutorials.map((tutorial, index) => (
          <div className="card" key={index}>
            <img src={tutorial.image} alt="Tutorial" />
            <div className="container">
              <h4><b>{tutorial.title}</b></h4>
              <p>{tutorial.description}</p>
              <p>Author: {tutorial.author}</p>
              <p>Rating: {tutorial.rating} stars</p>
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-articles">See all Tutorials</button>
    </div>
  );
};

export default Tutorials;
