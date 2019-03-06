import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioItem.scss';

class PortfolioItem extends Component {
  render() {
    const { cover, link, text } = this.props;
    const coverStyle = {
      backgroundImage: `url(${cover})`
    };
    const to = `/design/${link}`;

    return (
      <li className="portfolio-item">
        <Link className="portfolio-item__link" to={to}>
          <div className="portfolio-item__cover" style={coverStyle} />
          <p className="portfolio-item__text">{text}</p>
        </Link>
      </li>
    );
  }
}

export default PortfolioItem;
