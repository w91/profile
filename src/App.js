import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import AllPortfolio from './pages/all-portfolio';
import About from './pages/about';
import Design from './pages/design';
import ScrollToTop from './components/scroll-to-top';
import ScrollTop from './components/scroll-top';
import Nav from './components/nav';
import { ReactComponent as Arrow } from './assets/images/arrow.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            {/* 导航 */}
            <Nav />
            {/* 页面内容 */}
            <div className="page-content">
              <ScrollToTop>
                <Route exact path="/" component={Home} />
                <Route path="/portfolio" component={AllPortfolio} />
                <Route path="/about" component={About} />
                <Route path="/design/:name" component={Design} />
              </ScrollToTop>
            </div>
            {/* 回到顶部按钮 */}
            <ScrollTop icon={<Arrow />} distance={400} />
            {/* 页底 */}
            <footer className="page-footer">
              <div className="page-footer__content">
                {/* <p className="page-footer__email">ziqingqin@163.com</p> */}
              </div>
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
