import React, { Component } from 'react';

export default class Amount extends Component {
  render() {
    const {currency, value, ...props} = this.props;
    return (
      <span {...props}>{parseFloat(value).toFixed(2)} <span className="small text-primary">{currency}</span></span>
    );
  }
}
