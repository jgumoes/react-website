import { mount, shallow } from 'enzyme'
import Carousel from './Carousel'
import getCarouselDataMock from "./CarouselSpecHelpers"

describe('Carousel', () => {
  
  it('should load a div', () => {
    expect(shallow(<Carousel />).exists()).toBe(true)
  });

  it('should call getCarouselData', () => {
    const mockCall = jest.fn()
    shallow(<Carousel props={mockCall()} />)
    expect(mockCall).toHaveBeenCalled()
  });

  it.todo('should contain 3 child divs'
  // () => {
  //   const container = shallow(<Carousel fetchData={getCarouselDataMock()} />)
  //   expect(container.children()).toHaveLength(3)
  // }
  )
});