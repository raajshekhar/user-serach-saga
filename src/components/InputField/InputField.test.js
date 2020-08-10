import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from './index';

describe('<InputField />', () => {

    it('Renders successfully without error', () => {
        const InputFieldComponent = render(<InputField {...fieldData} />);
        expect(InputFieldComponent.container).toBeTruthy();
        expect(InputFieldComponent.queryByPlaceholderText('search here')).toBeTruthy();
      });

    it('Input Change', () => {
        const { queryByPlaceholderText } = render(<InputField {...fieldData} />);
        const searchInput = queryByPlaceholderText('search here');
        fireEvent.change(searchInput, { target: {value:'Autocomplete'}})
        expect(searchInput.value).toMatch('Autocomplete');
    })

})


const fieldData = {
    "name": "title",
    "id": "title",
    "type": "search",
    "placeholder": "search here",
    "onChange": () => {},
    "maxLength": "150",
    "value": "Autocomplete",
    "readOnly": false,
    "colLength": "col-md-6 col-sm-12 col-xs-12",
    "labelName": "Title",
    "restrictions": ["numbers", "left-space", "special-characters"],
    "popOverPlacement": ["bottom", "bottom"],
    "autoComplete": "off",
    "labelImp": true,
    "autoFocus": true,
    "validations": [
        {
            "type": "min",
            "params": [3, "Title cannot be less than 3 characters"]
        },
        {
          "type": "required",
          "params": ["Please Enter Title"]
        }
      ]
}