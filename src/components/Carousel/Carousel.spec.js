import React from 'react'
import { mount, shallow } from 'enzyme'
import Carousel from './Carousel'
import getCarouselDataMock from "./CarouselSpecHelpers"
import { act, render, screen } from 'react-dom/cjs/react-dom-test-utils.production.min'

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(getCarouselDataMock())
}))

// global.fetch = jest.fn().mockImplementation(() => getCarouselDataMock())
describe('Carousel', () => {
  
  it('should load a div', () => {
    expect(shallow(<Carousel />).exists()).toBe(true)
  });

  // it('should contain 3 child divs',
  //   async () => {
  //     const container = await mount(<Carousel testing="true"/>)
  //     console.log("container", container.children())
  //     expect(container.children()).toHaveLength(3)
  //     // await act(async () => render(<Carousel />))
  //     // expect(screen.)
  //   }
  // )

  it.todo('only one div should be visible at a time')

  it.todo('clicking the right button loads the next div')

  it.todo('clicking the right button loads the previous div')
});