import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import AllPortfolio from './pages/all-portfolio';
import About from './pages/about';
import Design from './pages/design';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* 导航 */}
          <div className="container">
            <div className="nav-wrap">
              <div className="nav-icon">
                <img
                  className="nav-icon__img"
                  src="https://img.zcool.cn/zcool-diy/ib96dd0f6ec424cfbb45106570fae8167c.png"
                  alt="icon"
                />
              </div>
              <ul className="nav-menu">
                <li className="nav-menu__item">
                  <Link to="/">首页</Link>
                </li>
                <li className="nav-menu__item">
                  <Link to="/portfolio">作品</Link>
                </li>
                <li className="nav-menu__item">
                  <Link to="/about">关于</Link>
                </li>
              </ul>
            </div>

            {/* 页面内容 */}
            <div className="page-content">
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={AllPortfolio} />
              <Route path="/about" component={About} />
              <Route path="/design/:name" component={Design} />
            </div>

            {/* 页底 */}
            <footer className="page-footer">
              <div className="page-footer__content">
                <p className="page-footer__email">ziqingqin@163.com</p>
              </div>
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
