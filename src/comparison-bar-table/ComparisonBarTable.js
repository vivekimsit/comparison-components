import React, { Component } from 'react';

import Loader from '../bootstrap/Loader';

import { comparisonsFor } from '../ComparisonApi';
import Provider from './Provider';
import Disclaimer from '../Disclaimer';
import './ComparisonBarTable.less';

export default class ComparisonBarTable extends Component {
  state = {
    showMore: false,
    providers: [],
    loading: true,
    error: false,
  };

  showMore = (e) => {
    e.preventDefault();
    this.setState({ showMore: true });
  }

  showLess = (e) => {
    e.preventDefault();
    this.setState({ showMore: false });
  }

  componentDidMount() {
    this.loadProviders(this.props.amount);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: true, error: false });
    this.loadProviders(nextProps.amount);
  }

  maxFee = (providers, amount) => {
    return Math.max.apply(null, providers.map(p => p.fees + p.hiddenFees));
  }

  filterProviders = (providers, selected) => {
    if (!selected) {
      return providers;
    }

    return providers.filter(p => selected.some(f => p.alias.toLowerCase().includes(f.toLowerCase())));
  }

  loadProviders(amount) {
    comparisonsFor(this.props.source, this.props.target, amount)
      .then(response => response.json())
      .then(json => {
        const providers = this.filterProviders(json.providers, this.props.providers);
        const maxFee = this.maxFee(providers, amount);

        this.setState({providers: providers.map(data => {
          return {
            id: data.id,
            logo: data.logo,
            name: data.name,
            rate: data.rate,
            fees: data.fees,
            hiddenFees: data.hiddenFees,
            amount: data.receivedAmount,
            maxFee: maxFee,
            collectedAt: data.dateCollected
          }
        }), loading: false});
      })
      .catch(e => {
        this.setState({error: true, loading: false});
        throw e;
      })
  }

  renderError() {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Ups!</strong> There was a problem retrieving data. Please try again later.
      </div>
    );
  }

  renderLoader() {
    return (
      <div className="text-xs-center m-t-5 m-b-3">
        <Loader/>
      </div>
    );
  }

  renderTable() {
    if (this.state.error) {
      return this.renderError();
    }

    if (this.state.loading) {
      return this.renderLoader();
    }

    const providers = this.state.showMore ? this.state.providers : this.state.providers.slice(0, 3);
    return (
      <div className="table-responsive" style={{position: 'static'}}>
        <table className="table">
          <tbody>
            <tr>
              <th>Provider</th>
              <th className="text-xs-right hidden-xs text-md-left text-xs-nowrap">Total cost of sending {this.props.amount} {this.props.source} to {this.props.target}</th>
              <th className="text-xs-right">Amount received</th>
            </tr>
          </tbody>
          <tbody>
            {providers.map(p => {
              return <Provider key={p.id} name={p.name} logo={p.logo} fees={p.fees} rate={p.rate} hiddenFees={p.hiddenFees} maxFee={p.maxFee} source={this.props.source} target={this.props.target} amount={p.amount} collectedAt={p.collectedAt}/>
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const providers = this.state.showMore ? this.state.providers : this.state.providers.slice(0, 3);
    const trimmed = providers.length < this.state.providers.length;
    return (
      <div className="tw-comparison-bar-table">
        {this.renderTable()}

        <div className="text-xs-center m-b-3">
          {!this.state.showMore && trimmed ?
          <a href="" onClick={this.showMore}>
              Show more providers <span className="icon icon-down"></span>
          </a> : null}

          {this.state.showMore ?
          <a href="" onClick={this.showLess}>
              Show fewer providers <span className="icon icon-up"></span>
          </a> : null}
        </div>

        <Disclaimer
          source={this.props.source}
          target={this.props.target}
        />
      </div>
    );
  }
}
