import React, { PureComponent } from 'react';
import './index.scss';

class PageTitle extends PureComponent {
  render() {
    const { main, sub, style = {} } = this.props;
    console.log(style)
    return (
      <div className="page-title" style={style}>
        <h1 className="page-title__main">{main}</h1>
        {sub && <h2 className="page-title__sub">/{sub}</h2>}
      </div>
    );
  }
}

export default PageTitle;
