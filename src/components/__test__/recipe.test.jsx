import { shallow,mount } from 'enzyme';
import "../../setupTest";
import Recipe from '../recipe/recipe'


const loading = false;

describe('Recipe', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Recipe />);
        expect(wrapper).toMatchSnapshot();
    });
    it('accepts loading props', ()=>{
        const wrapper = mount(<Recipe loading={loading} />);
        expect(wrapper.props().loading).toEqual(loading)
    })
});