import React from 'react';

export default class Scroll extends React.Component {
  constructor(props) {
    super(props);

    this.state = { scrollTop: 0,
                   scrollLeft: 0 };

    window.addEventListener('scroll', event => {
      this.setState({ scrollTop: document.body.scrollTop,
                      scrollLeft: document.body.scrollLeft});
    });
  }

  render() {
    return this.props.children(this.state.scrollTop, this.state.scrollLeft)
  }
}