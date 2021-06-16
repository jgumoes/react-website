import { shallow } from "enzyme";
import BlueButton from "./BlueButton";

describe('BlueButton', () => {
  it("should refresh page if a route is given", () => {
    const button = shallow(<BlueButton text="test" route="/test"/>)
    global.location.reload = jest.fn()

    button.simulate('click')
    expect(global.location.reload).toHaveBeenCalled()
  });

  it("shouldn't refresh page if no route is given", () => {
    const button = shallow(<BlueButton text="test" />)
    global.location.reload = jest.fn()

    button.simulate('click')
    expect(global.location.reload).not.toHaveBeenCalled()
  });
});