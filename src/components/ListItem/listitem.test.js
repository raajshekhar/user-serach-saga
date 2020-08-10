import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListItem from './ListItem';

Enzyme.configure({ adapter: new Adapter() })

describe('ListItem Component', () => {

    it('It should render without error', () => {
        const message = shallow(<ListItem />);
        const wrapper = message.find('.list-user-edit');
        expect(wrapper.length).toBe(1);
    })

    it('It should render a message and icon', () => {
        const data = { id: 1, title: 'Works fine', body: 'success' }
        const wrapper = mount(<ListItem {...data} />);
        expect(wrapper.props().title).toEqual('Works fine');
        expect(wrapper.props().body).toEqual('success');
        expect(wrapper.props().id).toEqual(1);
    })

})