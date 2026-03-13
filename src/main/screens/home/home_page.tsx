import React from 'react';
import './home_page.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="left-side">
        {/* Left side content - 30% */}
        <h2>Left Panel</h2>
        <p>This is the left side view (30% width)</p>
      </div>
      <div className="divider"></div>
      <div className="right-side">
        {/* Right side content - 70% */}
        <h2>Right Panel</h2>
        <p>This is the right side view (70% width)</p>
      </div>
    </div>
  );
};

export default HomePage;
