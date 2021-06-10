import { mount, shallow } from 'enzyme'
import Carousel from './Carousel'

describe('Carousel', () => {
  it('should load a div', () => {
    expect(shallow(<Carousel />).exists()).toBe(true)
  });
});