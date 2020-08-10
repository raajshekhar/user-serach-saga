import React from 'react';
import { render } from '@testing-library/react';
import UserEditForm from './index';

describe('<UserEditForm />', () => {

    it('Renders successfully without error', () => {
        const data = { data: 1, onClick: () => {} }
        const UserEditFormComponent = render(<UserEditForm {...data} />);
        expect(UserEditFormComponent.container).toBeTruthy();
      });

    it('It should render the message section without error', () => {
        const data = { data: 1, onClick: () => {} }
        const { getAllByRole } = render(<UserEditForm {...data} />);
        const editButton = getAllByRole('button');
        expect(editButton.length).toBe(1);
    })

    it('It show render the modal element with passing props', () => {

        const data = { data: 1, onClick: () => {} }
        const { queryAllByText } = render(<UserEditForm {...data} />);

        const childElementString = queryAllByText('Title');
        expect(childElementString.length).toBe(1);
      });

})