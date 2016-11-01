import React from 'react';
import ReactDOM from 'react-dom';

import Demo from './Demo';

document.querySelectorAll('.tw-comparison').forEach((elem) => {
  ReactDOM.render(<Demo />, elem);
});
