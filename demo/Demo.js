import React, { Component }  from 'react';

import DemoAmountInput from './DemoAmountInput';
import ComparisonWidgetCore from '../src';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: 'GBP',
      target: 'EUR',
      amount: 5000,
    };
  }

  onInputChange = (event) => {
    this.setState({
      amount: parseInt(event.target.value, 10),
    });
  }

  render() {
    return (
      <div>
        <h2 className="h3 page-header m-b-3">Test amounts</h2>
        <DemoAmountInput
          amount={this.state.amount}
          source={this.state.source}
          onChange={this.onInputChange}
        />

        <hr />

        <h2 className="h3 page-header m-b-3">Result</h2>

        <ComparisonWidgetCore
          source={'GBP'}
          target={'EUR'}
          amount={this.state.amount}
        />
      </div>
    );
  }
}
