import React from 'react';
import { render } from '@testing-library/react';
import MessageComponent from './MessageComponent';

describe('<MessageComponent />', () => {

    it('Renders successfully without error', () => {
        const modalComponent = render(<MessageComponent />);
        expect(modalComponent.container).toBeTruthy();
      });

    it('It should render the message section without error', () => {
        const { getByRole } = render(<MessageComponent message="Hello!"  />);
        const wrapper = getByRole('article');
        expect(wrapper.children.length).toBe(2);
    })


    it('It should the message  text without error', () => {
        const { getByRole } = render(<MessageComponent message="Hello!" />);
        expect(getByRole('show-message')).toHaveTextContent('Hello!')
    })

})