import React from 'react';
import Header from '../../../src/components/Header/Header';
import { mount } from 'enzyme';

describe('Header', () => {
  it('Should render a h1', () => {
    const wrapper = mount(<Header />);
    expect(wrapper).to.have.descendants('h1');
  });
});
