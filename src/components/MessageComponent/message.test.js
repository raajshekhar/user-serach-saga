import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MessageComponent from './MessageComponent';

Enzyme.configure({ adapter: new Adapter() })

describe('Message Component', () => {
    it('It should render without error', () => {
        const message = shallow(<MessageComponent />);
        const wrapper = message.find('#error-section');
        expect(wrapper.length).toBe(1);
    })
    it('It should render an .material-icons', () => {
        const message = shallow(<MessageComponent />);
        const wrapper = message.find('.material-icons');
        expect(wrapper.length).toBe(1);
    })
    it('It should render a message and icon', () => {
        const data = { message: 'Works fine', icon: 'success' }
        const wrapper = mount(<MessageComponent {...data} />);
        expect(wrapper.props().message).toEqual('Works fine');
        expect(wrapper.props().icon).toEqual('success');
    })
})