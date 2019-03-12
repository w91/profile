import React, { Component } from 'react';
import PageTitle from '../../components/page-title'
import resume from '../../assets/images/resume.jpg';
import './index.scss';

class About extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="divider"></div>
        <PageTitle main="ABOUT ME" sub="关于我的" />
        <img className="about-me__resume" src={resume} alt="resume" />
        <div className="about-me-empty"></div>
      </div>
    );
  }
}

export default About;
