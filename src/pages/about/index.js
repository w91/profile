import React, { Component } from 'react';
import PageTitle from '../../components/page-title';
import './index.scss';

class About extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="divider" />
        <PageTitle main="ABOUT ME" sub="关于我的" />
        <img
          className="about-me__resume"
          src="http://designs.test.upcdn.net/images/resume-1.jpg"
          alt="resume"
        />
        <div className="about-me-empty" />
      </div>
    );
  }
}

export default About;
