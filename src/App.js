import React from 'react';
import Header from './components/Header';
import MainImage from './components/MainImage';
import FeaturedArticles from './components/FeaturedArticles';
import Tutorials from './components/Tutorials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DEV@Deakin</h1>
      </header>
      <main>
        <Header />
        <MainImage />
        <FeaturedArticles />
        <Tutorials />
        <Subscribe />
        <Footer />
      </main>
      <footer>
        <p>© DEV@Deakin 2022</p>
      </footer>
    </div>
  );
}

export default App;
