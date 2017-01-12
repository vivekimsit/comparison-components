import React, { Component } from 'react';

import DemoAmountInput from './DemoAmountInput';
import { ComparisonTable, ComparisonBarTable } from '../../src';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: 'GBP',
      target: 'EUR',
      amount: 5000,
      barAmount: 5000
    };
  }

  onTableInputChange = (event) => {
    this.setState({
      amount: parseInt(event.target.value, 10),
    });
  }

  onBarTableInputChange = (event) => {
    this.setState({
      barAmount: parseInt(event.target.value, 10),
    });
  }

  render() {
    return (
      <div>
        <h2 className="page-header m-t-3">
          <code>&lt;ComparisonTable /&gt;</code>
        </h2>
        <h3 className="m-b-3">Test amounts</h3>
        <DemoAmountInput
          amount={this.state.amount}
          source={this.state.source}
          onChange={this.onTableInputChange}
        />

        <hr />

        <h3 className="m-b-3">Result</h3>

        <ComparisonTable
          source={'GBP'}
          target={'EUR'}
          amount={this.state.amount}
        />

        <h2 className="page-header m-t-3">
          <code>&lt;ComparisonBarTable /&gt;</code>
        </h2>

        <DemoAmountInput
          amount={this.state.barAmount}
          source={this.state.source}
          onChange={this.onBarTableInputChange}
        />

        <hr />

        <h3 className="m-b-3">Result</h3>
        <ComparisonBarTable
          source={'GBP'}
          target={'EUR'}
          amount={this.state.barAmount}
        />

      </div>
    );
  }
}
