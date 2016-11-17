import React, { Component } from 'react';
import './App.css';
import ButterflyButton, { TB, LR, C } from '../../build';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ButterflyButton
          type={LR}
          data-image-src='http://image.flaticon.com/icons/svg/136/136530.svg'
          data-wing1-icon-class='fa fa-remove'
          data-wing1-onclick={() => alert('click wing1')}
          data-wing2-icon-class='fa fa-remove'
          data-wing2-onclick={() => alert('click wing2')}
        />
        <div className="divider"></div>
        <ButterflyButton
          type={TB}
          data-image-src='http://image.flaticon.com/icons/svg/136/136530.svg'
          data-wing1-icon-class='fa fa-remove'
          data-wing1-onclick={() => alert('click wing1')}
          data-wing2-icon-class='fa fa-remove'
          data-wing2-onclick={() => alert('click wing2')}
        />
        <div className="divider"></div>
        <ButterflyButton
          type={C}
          data-image-src='http://image.flaticon.com/icons/svg/136/136530.svg'
          data-wing1-icon-class='fa fa-remove'
          data-wing1-onclick={() => alert('click wing1')}
          data-wing2-icon-class='fa fa-remove'
          data-wing2-onclick={() => alert('click wing2')}
        />
      </div>
    );
  }
}

export default App;
