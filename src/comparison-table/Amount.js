import React, { Component } from 'react';

export default class Amount extends Component {
  render() {
    const {currency, value, ...props} = this.props;
    return (
      <strong {...props}>{parseFloat(value).toFixed(this.props.precision || 2)} <strong className="text-primary">{currency}</strong></strong>
    );
  }
}
