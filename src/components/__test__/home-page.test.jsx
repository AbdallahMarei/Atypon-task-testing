import { shallow } from 'enzyme';
import "../../setupTest";
import Home from "../../pages/home/home-page"


describe('Home', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot();
    });
});