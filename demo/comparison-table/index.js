import React from 'react';
import ReactDOM from 'react-dom';

import ComparisonTableDemo from './ComparisonTableDemo';

document.querySelectorAll('.comparison-table-demo').forEach((elem) => {
  ReactDOM.render(<ComparisonTableDemo />, elem);
});
