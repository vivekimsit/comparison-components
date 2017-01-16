import React, { Component } from 'react';

import Amount from './Amount';
import Datetime from '../Datetime';

export default class CardProvider extends Component {
  state = {
    showMore: false
  };

  showDetails(e) {
    e.preventDefault();
    this.setState({ showMore: !this.state.showMore });
  }

  hasNoHiddenFees() {
    return parseFloat(this.props.hiddenFees) === 0;
  }

  isHighestAmount() {
    return this.props.highestAmount === this.props.amount;
  }

  render() {
    return (
        <div className="card m-t-2">
          <div className="bg-default item clearfix p-a-2">
            <div className="col-xs-8 text-xs-left">
              <img className="provider-logo" src={this.props.logo} alt={this.props.name}/>
            </div>
            <div className="col-xs-4 text-xs-right">
              <span className="text-xs-nowrap card-label">Rate</span>
            </div>
          </div>

          <div className="item clearfix p-a-2 rounded-bottom-corners">
              <div className="text-xs-left col-xs-8">
                <Amount
                  className={(this.isHighestAmount() ? 'highest-amount' : '') + ' text-xs-right text-xs-nowrap amount-received'}
                  currency={this.props.target}
                  value={this.props.amount}
                />
              </div>
              <div className="text-xs-right col-xs-4">
                <Amount
                  className={(this.hasNoHiddenFees() ? 'text-success' : 'text-danger') + ' text-xs-right'}
                  value={this.props.rate}
                  precision={4}
                />
              </div>
          </div>
        </div>
    );
  }
}
