import React from 'react';
import { render } from '@testing-library/react';
import UserEditForm from './index';

describe('<UserEditForm />', () => {

    it('Renders successfully without error', () => {
        const data = { data: 1, onClick: () => {} }
        const UserEditFormComponent = render(<UserEditForm {...data} />);
        expect(UserEditFormComponent.container).toBeTruthy();
      });

    it('It should render the messafe section without error', () => {
        const data = { data: 1, onClick: () => {} }
        const { getByTestId } = render(<UserEditForm {...data} />);
        const wrapper = getByTestId('user-seach-edit-form');
        expect(wrapper.children.length).toBe(1);
    })

})