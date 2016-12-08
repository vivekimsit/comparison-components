import React from 'react';
import { shallow } from 'enzyme';

import Amount from '../src/comparison-table/Amount';

jest.dontMock('../src/comparison-table/Amount');

describe('Amount', () => {
  it('should display the right currency', () => {
    const props = { currency: 'GBP', value: 200 };
    const wrapper = shallow(<Amount currency={props.currency} value={props.value} />);
    expect(wrapper.contains(props.currency)).toBe(true);
  });
});
