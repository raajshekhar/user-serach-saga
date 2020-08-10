import React from 'react';
import { render } from '@testing-library/react';
import MessageComponent from './MessageComponent';

describe('<MessageComponent />', () => {

    it('Renders successfully without error', () => {
        const modalComponent = render(<MessageComponent />);
        expect(modalComponent.container).toBeTruthy();
      });

    it('It should render the message section without error', () => {
        const { getByTestId } = render(<MessageComponent />);
        const wrapper = getByTestId('message-wrapper');
        expect(wrapper.children.length).toBe(1);
    })

})