import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Portfolio from '../../components/portfolio';
import data from '../../data';
import './index.scss';

const portfolio = data.slice(0, 6);

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-cover-wrapper">
          <img src="https://img.zcool.cn/zcool-diy/ib2de982595a4e7f5dbda97222e64fed5c.png" alt="cover-icon-bg" className="cover-icon-bg"/>
          <img className="cover-icon" src="https://img.zcool.cn/zcool-diy/ib492bf90a1c440ab1a1d6815058c7bb35.png" />
          <div className="cover-title">DISCOVER GOOD DESIGN</div>
          <div className="cover-desc">
            <div>设计，不是一件简单的事</div>
            <div>如果设计简单，还需要设计师做什么</div>
          </div>
        </div>


        <div className="about-me">
          <p className="about-me__title">ABOUT ME</p>
          <div className="about-me__avatar"></div>
          <p className="about-me__name">秦川</p>
          <p className="about-me__profession">Senior Designer</p>
          <div className="about-me__description">
            <p className="about-me__description__text">好的设计从来都不是一蹴而就的，它需要设计师的百般磨练和日积月累。</p>
            <p className="about-me__description__text">一个好的设计师会认真对待自己的每一个设计师作品，而他的设计也并非像艺术品一样，只满足少数人的口味，他们需要做出让尽可能多的人满意的设计。</p>
            <p className="about-me__description__text">他们的存在，不是为了追求艺术，而是为了解决大多数人的问题...</p>
          </div>
          <Link className="about-me__link home-btn" to="/about">了解我</Link>
        </div>

        <Portfolio portfolioItems={portfolio} />
      </div>
    );
  }
}

export default Home;
