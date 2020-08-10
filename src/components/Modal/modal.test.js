import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from './Modal';

Enzyme.configure({ adapter: new Adapter() })

describe('Modal Component', () => {
    it('It should render without error', () => {
        const component = shallow(<Modal />);
        const wrapper = component.find('#modal-section');
        expect(wrapper.length).toBe(1);
    })
    it('It should render an modal children element', () => {
        const component = shallow(<Modal />);
        const wrapper = component.find('.modal-children-section');
        expect(wrapper.length).toBe(1);
    })
    it('It should pass the props to component', () => {
        const data = { title: 'Modal Component', children: <div className="test-modal">Modal children</div>, onClick: () => {} }
        const wrapper = mount(<Modal {...data} />);
        expect(wrapper.props().title).toEqual('Modal Component');
        const closeElement = wrapper.find('.close');
        expect(closeElement.length).toBe(1);
        const testModalElement = wrapper.find('.test-modal');
        expect(testModalElement.length).toBe(1);
    })
})