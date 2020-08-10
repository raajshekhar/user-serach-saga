import React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

describe('<List />', () => {

    it('Renders successfully without error', () => {
        const modalComponent = render(<Modal />);
        expect(modalComponent.container).toBeTruthy();
      });

    it('It should render the modal section without error', () => {
        const { getByTestId } = render(<Modal />);
        const wrapper = getByTestId('modal-section');
        expect(wrapper.children.length).toBe(1);
    })

    it('It show render the modal element with passing props', () => {

        const data = { title: 'Modal Component', children: <div className="test-modal">Modal children</div>, onClick: () => {} }
        const { getByTestId, getByText } = render(
            <Modal {...data} />
        );
        const wrapper = getByTestId('modal-children-section');
        expect(wrapper.children.length).toBe(1);

        const childElementString = getByText(/Modal Component/i);
        expect(childElementString.textContent).toMatch('Modal Component');

      });

})