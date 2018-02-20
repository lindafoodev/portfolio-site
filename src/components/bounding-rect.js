import React from 'react';
import ReactDOM from 'react-dom';

export default class BoundingRect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rect:null};
  }
  
  componentWillReceiveProps() {
    const node = ReactDOM.findDOMNode(this.sticky);
    const rect = node.getBoundingClientRect();
    this.setState({rect});
  }

  render() {
    return <div ref={r => this.sticky = r} {...this.props}>
      {this.props.children(this.state.rect)}
    </div>;
  }
}