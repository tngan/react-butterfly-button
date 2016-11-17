import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import ButterflyButton from '../src/ButterflyButton'
import { TB, LR, C } from '../src/constants'

// https://gist.github.com/scmx/d98cc058a7c3dfef7890
before(() => {
  sinon.stub(console, 'error', warning => { throw new Error(warning) });
});

after(() => { console.error.restore() });

describe("<ButterflyButton />", () => {

  let wellDefinedProps = {
    'size': '5em',
    'type': TB,
    'data-image-src': 'https://iamimage.com/iamimage.jpg',
    'data-transition': '0.5s',
    'data-wing1-icon-class': 'fa fa-remove',
    'data-wing1-onclick': () => {},
    'data-wing1-style': {
      backgroundColor: '#FFF',
      fontColor: '#000',
      fontSize: '12px'
    },
    'data-wing2-icon-class': 'fa fa-remove',
    'data-wing2-onclick': () => {},
    'data-wing2-style': {
      backgroundColor: '#000',
      fontColor: '#FFF',
      fontSize: '21px'
    }
  };

  it('renders without error', () => {
    shallow(<ButterflyButton {...wellDefinedProps} />);
  });

  it('renders with error - missing wing1 config', () => {
    let badProps = Object.assign({}, wellDefinedProps);
    delete badProps['data-wing1-onclick'];
    delete badProps['data-wing1-icon-class'];
    expect(() => { shallow(<ButterflyButton {...badProps} />)})
    .to.throw(Error);
  });

  it('renders with error - missing wing2 config when type is LR and TB', () => {
    let badProps = Object.assign({}, wellDefinedProps);
    badProps.type = LR;
    delete badProps['data-wing2-onclick'];
    delete badProps['data-wing2-icon-class'];
    expect(() => { shallow(<ButterflyButton {...badProps} />)})
    .to.throw(Error);

    badProps = Object.assign({}, wellDefinedProps);
    badProps.type = TB;
    delete badProps['data-wing2-onclick'];
    delete badProps['data-wing2-icon-class'];
    expect(() => { shallow(<ButterflyButton {...badProps} />)})
    .to.throw(Error);
  });

  it('renders without error - missing wing2 config when type is C', () => {
    let badProps = Object.assign({}, wellDefinedProps);
    badProps.type = C;
    delete badProps['data-wing2-onclick'];
    delete badProps['data-wing2-icon-class'];
    expect(() => { shallow(<ButterflyButton {...badProps} />)})
    .to.not.throw(Error);
  });

});
