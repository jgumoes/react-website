import { mount } from 'enzyme'
import CarouselButton from './CarouselButton'

describe('CarouselButton', () => {
  
  it('should contain 1 div', () => {
    const container = mount(<CarouselButton />)
    expect(container.children()).toHaveLength(1)
  });
});