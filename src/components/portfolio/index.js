import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import './index.scss';

class Portfolio extends Component {
  render() {
    const { portfolioItems } = this.props;
    return (
      <div className="portfolio-wrap">
        <ul className="portfolio">
          {portfolioItems &&
            portfolioItems.map((item, index) => {
              return <PortfolioItem key={index} {...item} />;
            })}
        </ul>
      </div>
    );
  }
}

export default Portfolio;
