'use strict';

describe('ReactTestApp', () => {
  let React = require('react/addons');
  let ReactTestApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactTestApp = require('components/ReactTestApp.js');
    component = React.createElement(ReactTestApp);
  });

  it('should create a new instance of ReactTestApp', () => {
    expect(component).toBeDefined();
  });
});
