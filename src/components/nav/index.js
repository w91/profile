import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ReactComponent as BackLogo } from '../../assets/images/back.svg';
import './index.scss';

class Nav extends Component {
  handleBackClick = (e) => {
    this.props.history.goBack();
  }

  render() {
    const { location } = this.props;
    const useBackLogo = /design\//.test(location.pathname);
    return (
      <div className="nav-wrap">
        <div className="nav-icon">
          {useBackLogo ? (
            <BackLogo
              className="nav-icon__back"
              onClick={this.handleBackClick}
            />
          ) : (
            <img
              className="nav-icon__img"
              src="https://img.zcool.cn/zcool-diy/ib96dd0f6ec424cfbb45106570fae8167c.png"
              alt="icon"
            />
          )}
        </div>
        <ul className="nav-menu">
          <li className="nav-menu__item">
            <Link to="/">首页</Link>
          </li>
          <li className="nav-menu__item">
            <Link to="/portfolio">我的作品</Link>
          </li>
          <li className="nav-menu__item">
            <Link to="/about">我的简历</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(Nav);
