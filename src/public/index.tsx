import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {foo} from './foo';

console.log(foo());

ReactDOM.render(
  <div>hello</div>,
  document.getElementById('mount'),
);
