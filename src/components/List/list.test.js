import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

const list = [{ id: 1, title: 'Title', body: 'Body' }];

describe('<List />', () => {

    it('Renders successfully without error', () => {
      const listItemComponent = render(
          <List {...{list}} />
      );
      expect(listItemComponent.container).toBeTruthy();
    });

    it('Shows List Item and shows Edit form', () => {
        const { getByText } = render(
            <List {...{list}} />
        );
        const listItem = getByText('Title');
        expect(listItem.children.length).toBe(1); 

      });

});