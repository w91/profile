import React, { Component } from 'react';
import PageTitle from '../../components/page-title'
import { WORKS_MAP } from '../../data';
import './index.scss';

class Design extends Component {
  render() {
    const { match } = this.props;
    const works = WORKS_MAP[match.params.name];
    if (!works) return null;

    const { width = 1280, photos } = works;
    const style = { width: `${width}px` };
    return (
      <div className="design" >
        <div className="divider"></div>
        {/* <PageTitle main="Works Details" style={style} /> */}
        <div className="design-works-wrap">
          <div className="design-works" style={style}>
            {
              photos && photos.map((photo, index) => {
                return (
                  <img className="design-works__img" src={photo} alt="works" key={index + photo} style={style} />
                );
              })
            }
          </div>
        </div>
        <div className="design-empty"></div>
      </div>
    );
  }
}

export default Design;
