import React from 'react'
import { mount, shallow } from 'enzyme'
import Carousel from './Carousel'
import getCarouselDataMock from "./CarouselSpecHelpers"

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(getCarouselDataMock())
}))

// global.fetch = jest.fn().mockImplementation(() => getCarouselDataMock())
describe('Carousel', () => {
  
  it('should load a div', () => {
    expect(shallow(<Carousel />).exists()).toBe(true)
  });

  describe('container', () => {
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
    
  });

  it('should contain 2 buttons', () => {
      // ie. content and two buttons
      const container = mount(<Carousel />)
      expect(container.find(".carousel-button")).toHaveLength(2)
  });
  it.todo('clicking the right button loads the next div')

  it.todo('clicking the right button loads the previous div')
});