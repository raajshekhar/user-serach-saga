import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';


describe('<ListItem />', () => {

    it('Renders successfully without error', () => {
      const listItemComponent = render(
          <ListItem {...{ id: 1, title: 'Title', body: 'Body' }} />
      );
      expect(listItemComponent.container).toBeTruthy();
    });

    it('Shows List Item and shows Edit form', () => {
        const { getByRole, getByText } = render(
            <ListItem {...{ id: 1, title: 'Title', body: 'Body' }} />
        );

        const editButton = getByRole('button', { name: /edit/i });
        fireEvent.click(editButton);

        const listItem = getByText('Title');
        expect(listItem.children.length).toBe(1); 
      });

});