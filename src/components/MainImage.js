import React from 'react';
import { Image } from 'semantic-ui-react';
import './MainImage.css'; // 或者 './App.css'

const MainImage = () => (
  <Image className="main-image" src='/image/image.png' alt='Main' fluid />
);

export default MainImage;
