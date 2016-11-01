import React, { PropTypes as Types }  from 'react';

const DemoAmountInput = ({ amount, source, onChange }) => (
  <div className="form-group form-group-lg">
    <label
      className="control-label"
      htmlFor="amount"
    >
      Source amount
    </label>
    <div className="input-group input-group-lg">
      <input
        className="form-control"
        name="amount"
        type="text"
        onChange={onChange}
        value={amount}
      />
      <span className="input-group-addon">{source}</span>
    </div>
  </div>
);
DemoAmountInput.propTypes = {
  amount: Types.number.isRequired,
  source: Types.string.isRequired,
  onChange: Types.func.isRequired,
};

export default DemoAmountInput;
