import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from './List';

Enzyme.configure({ adapter: new Adapter() })

describe('List Component', () => {

    it('It should render without error', () => {
        const component = shallow(<List />);
        const wrapper = component.find('.list-section');
        expect(wrapper.length).toBe(1);
    })

})