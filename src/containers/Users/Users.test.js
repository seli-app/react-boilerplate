import React from 'react';
import { shallow } from 'enzyme';
import { Users } from './Users';

describe('Users', () => {
  it('matches snapshot', () => {
    const component = shallow(<Users />);
    expect(component).toMatchSnapshot();
  });
});
