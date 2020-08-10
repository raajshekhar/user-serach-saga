import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import InputField from './index';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() })
 
describe('Form Testing', () => {

    it('It should render the elements when type is search', () => {
        const data = { type: 'search', id: 'usersearch', value: 'one', id: 'one', readOnly: true, className: 'usersearch' }
        const wrapper = mount(<InputField {...data} />);

        const customElement = wrapper.find('.custom-input-validation');
        const positionElement = wrapper.find('.position-relative');
        const dynamicInputElement = wrapper.find('.search-result');

        expect(customElement.length).toBe(1);
        expect(positionElement.length).toBe(1);
        expect(dynamicInputElement.length).toBe(1);
    })
})