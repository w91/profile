import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

class ScrollTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reachBottom: false,
      showScrollToTop: null
    };

    this.checkWindowSize = this.checkWindowSize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.getScrollTop = this.getScrollTop.bind(this);
    this.setScrollTop = this.setScrollTop.bind(this);
  }

  componentDidMount() {
    this.checkWindowSize();
    this.checkForScrollToTop();
    window.addEventListener('resize', this.checkWindowSize);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkWindowSize);
    window.addEventListener('scroll', this.handleScroll);
  }

  checkWindowSize() {
    this.setState({ isMobile: window.innerWidth < this.props.breakpoint });
  }

  checkForScrollToTop() {
    if (
      document.body.scrollTop > this.props.distance ||
      document.documentElement.scrollTop > this.props.distance
    ) {
      this.setState({
        showScrollToTop: true
      });
    } else {
      this.setState({
        showScrollToTop: false
      });
    }

    if (
      document.documentElement.scrollTop + 140 >
      document.documentElement.offsetHeight - window.innerHeight
    ) {
      this.setState({
        reachBottom: true
      });
    } else {
      this.setState({
        reachBottom: false
      });
    }
  }

  handleScroll() {
    this.checkForScrollToTop();
  }

  scrollUp() {
    const { performance, requestAnimationFrame } = window;

    const { speed, target } = this.props;
    if (
      speed <= 0 ||
      typeof performance === 'undefined' ||
      typeof requestAnimationFrame === 'undefined'
    ) {
      return this.setScrollTop(target);
    }
    const start = performance.now();
    const initScrollTop = this.getScrollTop();
    const pxsToScrollBy = initScrollTop - target;

    const that = this;
    requestAnimationFrame(step);

    function step(timestamp) {
      const delta = timestamp - start;
      const progress = Math.min(delta / speed, 1);
      that.setScrollTop(initScrollTop - Math.round(progress * pxsToScrollBy));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  }

  getScrollTop() {
    return (
      document.body.scrollTop ||
      ((document.documentElement && document.documentElement.scrollTop) || 0)
    );
  }

  setScrollTop(value) {
    document.body.scrollTop = value;
    if (document.documentElement) {
      document.documentElement.scrollTop = value;
    }
  }

  render() {
    let className = 'react-scrolltop-button';
    if (this.props.className) {
      className = `${className} ${this.props.className}`;
    }
    if (this.state.reachBottom) {
      className = `${className} reach-bottom`;
    }

    // Clone this.props and then delete Component specific props so we can
    // spread the rest into the button.
    let { ...rest } = this.props;
    delete rest.text;
    delete rest.style;
    delete rest.className;
    delete rest.breakpoint;
    delete rest.distance;

    return (
      this.state.showScrollToTop && (
        <button
          style={this.props.style}
          {...rest}
          className={className}
          onClick={this.scrollUp}
        >
          {this.props.icon}
        </button>
      )
    );
  }
}

ScrollTop.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  distance: PropTypes.number,
  breakpoint: PropTypes.number,
  icon: PropTypes.element,
  speed: PropTypes.number,
  target: PropTypes.number
};

ScrollTop.defaultProps = {
  text: 'back to top',
  distance: 50,
  breakpoint: 991,
  speed: 250,
  target: 0
};

export default ScrollTop;
