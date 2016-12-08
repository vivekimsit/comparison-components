import React from 'react';
import { mount } from 'enzyme';

import ComparisonTable from '../src/comparison-table/ComparisonTable';

function then(callback, timeout) {
  setTimeout(callback, timeout > 0 ? timeout : 0);
  return { then };
}

jest.dontMock('../src/comparison-table/ComparisonTable');

describe('ComparisonTable', () => {
  beforeEach(() => {
    const data = require('../__mocks__/comparisons.data.json');
    fetch.mockResponse(JSON.stringify(data));
  });

  it('should set all providers to the state if none are specified', () => {
    const props = { amount: 500, source: 'GBP', target: 'EUR' };
    const wrapper = mount(
      <ComparisonTable
        amount={props.amount}
        source={props.source}
        target={props.target}
      />
    );

    then(() => {
      expect(wrapper.state('providers')).toHaveLength(5);
    });
  });

  it('should only set specified providers to the state', () => {
    const props = { amount: 500, source: 'GBP', target: 'EUR', providers: ['bank-of-america', 'Lloyds'] };
    const wrapper = mount(
      <ComparisonTable
        amount={props.amount} source={props.source}
        target={props.target} providers={props.providers}
      />
    );

    then(() => {
      expect(wrapper.state('providers')).toHaveLength(2);
    });
  });

  it('should set providers with partial name to the state', () => {
    const props = { amount: 500, source: 'GBP', target: 'EUR', providers: ['bank-of', 'lloy'] };
    const wrapper = mount(
      <ComparisonTable
        amount={props.amount} source={props.source}
        target={props.target} providers={props.providers}
      />
    );

    then(() => {
      expect(wrapper.state('providers')).toHaveLength(2);
    });
  });
});
