import React, { Component } from 'react';

import Amount from './Amount';
import Datetime from '../Datetime';

export default class Provider extends Component {

  hasNoHiddenFees() {
    return parseFloat(this.props.hiddenFees) === 0;
  }

  render() {
    const barWidth = (((this.props.hiddenFees + this.props.fees) / this.props.maxFee) * 100) * 0.5;
    const feeBarWidth = (this.props.fees / (this.props.hiddenFees + this.props.fees) * 100);
    return (
      <tr>
        <td className="provider-name text-xs-nowrap">
          <div className="h3 font-weight-normal m-t-3"><img className="provider-logo" src={this.props.logo} alt={this.props.name}/></div>
        </td>

        <td className="hidden-xs hidden-sm">
          <div className="m-t-3 text-xs-nowrap">
            <div className="progress progress-lg" style={{position: 'relative', width: barWidth + '%', verticalAlign: 'middle', minWidth: '35px'}}>
              {parseFloat(this.props.fees) > 0 ?
                <div className="progress-bar" style={{width: feeBarWidth + '%'}}>
                </div> : null}
            </div>

            <Amount className="h2 font-weight-normal text-no-wrap m-l-2" style={{verticalAlign: 'middle', margin: 0}} currency={this.props.source} value={this.props.fees + this.props.hiddenFees}/>
          </div>
          <div>
            <small className="text-primary">Fee</small>
            {this.props.hiddenFees > 0 ? <small className="text-danger m-l-2">Rate markup</small> : null}
          </div>
        </td>

        <td className="hidden-xs hidden-md hidden-lg hidden-xl text-xs-right">
          <div className="progress" style={{width: barWidth + '%'}}>
            <div className="progress-bar" style={{width: feeBarWidth + '%'}}></div>
          </div>

          <br/>
          <Amount className="m-b-0 h2 font-weight-normal text-xs-nowrap" style={{display: 'inline-block'}} currency={this.props.source} value={this.props.fees + this.props.hiddenFees}/>

          <br/>
          <div style={{display: 'inline-block'}}>
            <small>
              {this.hasNoHiddenFees() ?
                'Fair and honest fee' :
                <span>Hidden in rate <Amount currency={this.props.source} value={this.props.hiddenFees}/></span>
              }
            </small>
          </div>
        </td>

        <td className="text-xs-right amount-received">
          <div className="m-t-3">
            <Amount className="m-b-0 h2 font-weight-normal text-xs-nowrap" currency={this.props.target} value={this.props.amount}/>
            <small className="text-xs-nowrap">
              {this.hasNoHiddenFees() ?
                <div>Real rate <span className="text-default">{this.props.rate}</span></div> :
                <div>{this.props.name} rate <span className="text-danger">{this.props.rate}</span></div>}
            </small>
          </div>
        </td>
      </tr>
    );
  }
}
