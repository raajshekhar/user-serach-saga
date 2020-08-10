import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import InputField from './index';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() })
 
describe('Form Testing', () => {
 test('Find error', () => {
     const data = {type: 'search', value: 'one', id: 'one' }
 const component = shallow(<InputField {...data} />);
 expect(component.find(".custom-input-validation").at(0));
 console.log(component.find(".custom-input-validation"))
 // component.find("#submitForm").simulate("click", { target: { name: 'title', value: 'Sandip' } });
 // component.find(".title").simulate("change", { target: { name: 'title', value: 'Sandip' } });
 // component.find('input').at(0).simulate('change', { target: { name: 'title', value: 'sandip' } });
 })
})