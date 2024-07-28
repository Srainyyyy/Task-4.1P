import React from 'react';
import { faker } from '@faker-js/faker';
import './FeaturedArticles.css';
const FeaturedArticles = () => {
  const articles = Array.from({ length: 3 }, () => ({
    title: faker.lorem.words(5),
    description: faker.lorem.sentence(),
    author: faker.person.fullName(),
    rating: faker.number.int({ min: 1, max: 5 }),
    image: faker.image.url(),
  }));

  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="card-group">
        {articles.map((article, index) => (
          <div className="card" key={index}>
            <img src={article.image} alt="Article" />
            <div className="container">
              <h4><b>{article.title}</b></h4>
              <p>{article.description}</p>
              <p>Author: {article.author}</p>
              <p>Rating: {article.rating} stars</p>
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-articles">See all articles</button>
    </div>
  );
};

export default FeaturedArticles;
