import React from 'react'
import { mount, shallow } from 'enzyme'
import Main from './Main'

describe('Main', () => {
  let container

  beforeEach(() => (
    container = mount(<Main />)
  ));

  it('should render a <div />', () => {
    expect(shallow(<Main />).exists()).toBe(true)
  });

  it('should contain a carousel', () => {
    expect(container.find('.carousel-container')).toHaveLength(1)
  })
});