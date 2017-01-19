import React, { Component } from 'react';

export default class Amount extends Component {
  render() {
    const {currency, value, precision, ...props} = this.props;
    return (
      <strong {...props}>{parseFloat(value).toFixed(precision || 2)} <span className="text-primary">{currency}</span></strong>
    );
  }
}
