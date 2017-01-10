import React, { Component } from 'react';

import Amount from './Amount';
import Datetime from './Datetime';

export default class Provider extends Component {

  hasNoHiddenFees() {
    return parseFloat(this.props.hiddenFees) === 0;
  }

  render() {
    return (
      <tr>
        <td className="text-xs-nowrap">
          <img className="provider-logo" src={this.props.logo} alt={this.props.name}/>
        </td>

        <td className="hidden-md hidden-lg hidden-xl text-xs-right amount-received text-primary">
          {this.props.highestAmount == this.props.amount ?
            <Amount className="text-xs-nowrap" currency={this.props.target} value={this.props.amount}/> :
            <Amount className="text-xs-nowrap" currency={this.props.target} value={this.props.amount}/>}
         </td>

         <td className="hidden-md hidden-lg hidden-xl text-xs-right">
            {this.hasNoHiddenFees() ?
              <Amount className="text-success" value={this.props.rate} precision={4}></Amount> :
              <Amount className="text-danger" value={this.props.rate} precision={4}></Amount>}
        </td>

        <td className="text-xs-right">
          <Amount className="text-no-wrap text-primary" currency={this.props.source} value={this.props.fees + this.props.hiddenFees}/>
        </td>

        <td className="hidden-xs hidden-sm text-xs-right">
            {this.hasNoHiddenFees() ?
              <Amount className="text-success" value={this.props.rate} precision={4}></Amount> :
              <Amount className="text-danger" value={this.props.rate} precision={4}></Amount>}
        </td>

        <td className="hidden-xs hidden-sm text-xs-right">
          {this.props.highestAmount == this.props.amount ?
            <Amount className="highest-amount text-primary text-xs-nowrap amount-received" currency={this.props.target} value={this.props.amount}/> :
            <Amount className="text-primary text-xs-nowrap amount-received" currency={this.props.target} value={this.props.amount}/>}
         </td>
      </tr>
    );
  }
}
