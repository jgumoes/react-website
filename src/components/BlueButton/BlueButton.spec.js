import { shallow } from "enzyme";
import BlueButton from "./BlueButton";

describe('BlueButton', () => {
  it("should refresh page if a route is given", () => {
    const reloadMock = jest.fn()
    const button = shallow(<BlueButton text="test" route="/test" reloadingFunction={reloadMock}/>)

    button.find('button').simulate('click')
    expect(reloadMock).toHaveBeenCalled()
  });

  it("shouldn't refresh page if no route is given", () => {
    const reloadMock = jest.fn()
    const button = shallow(<BlueButton text="test" route="/test" reloadingFunction={reloadMock}/>)

    button.find('button').simulate('click')
    expect(reloadMock).not.toHaveBeenCalled()
  });
});