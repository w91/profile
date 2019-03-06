import React, { Component } from 'react';
import Portfolio from '../../components/portfolio';
import PageTitle from '../../components/page-title'
import data from '../../data';
import './index.scss';

class AllPortfolio extends Component {
  render() {
    return (
      <div className="all-portfolio">
        <div className="divider"></div>
        <PageTitle main="WORKS" sub="我的作品" />
        <Portfolio portfolioItems={data} />
        <div className="all-portfolio-empty"></div>
      </div>
    );
  }
}

export default AllPortfolio;
