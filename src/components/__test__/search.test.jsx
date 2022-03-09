import { shallow } from 'enzyme';
import "../../setupTest";
import Search from '../search/search';

describe('Search', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Search />);
      expect(wrapper).toMatchSnapshot();
    });
    it('calls correct function to reset the search', () => {
        const handleResetMock = jest.fn();
        const wrapper = shallow(
            <Search handleReset={handleResetMock} />
        )
        const buttonElement = wrapper.find('.reset-btn');
        buttonElement.simulate("click");
        expect(handleResetMock).toHaveBeenCalledTimes(1);
    })
    it('calls correct function to search for the recipes', () => {
        const handleSubmitMock = jest.fn();
        const wrapper = shallow(
            <Search handleSubmit={handleSubmitMock} />
        )
        const searchForm = wrapper.find(".form-inline");
        searchForm.simulate("submit");
        expect(handleSubmitMock).toHaveErrorMessage;
        expect(handleSubmitMock).toReturn;
    })
  });
