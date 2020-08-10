import React, { useRef } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { focusErrorElement } from '../../utilities/commonFunction';
import EditForm from './Forms/EditForm';
import { createInitialValuesObject, yupValidationObject } from './Forms/validationSchema';
import fieldsData from './input-fields.json';
import './user-edit-form.scss'

const UserSearchEditForm = (props) => {
    const formElement = useRef(null);
    const { onClick } = props;

    fieldsData['editForm'].forEach((data) => data.value = props.data[data.name])
    const initialValues = createInitialValuesObject(fieldsData);
    const validationSchema = yupValidationObject({fieldsData, Yup});

    const submitHandler = (formProps) => {
        if(!formProps.isValid) return focusErrorElement('error-message')
        onClick({...props.data, ...formProps.values['editForm'][0]})
    }

    return (
        <section id="user-seach-edit-form" ref={formElement}>
            <Formik initialValues={{...initialValues}} validationSchema={validationSchema}>
            {(props) => {
                const { handleSubmit } = {...props};
                return (
                    <Form onSubmit={handleSubmit}>
                        <FieldArray name='editForm' component={EditForm} />
                        <button type="submit" onClick={e => submitHandler(props)} className="send-form-request">send request</button>
                    </Form>
                )
            }}
            </Formik>
        </section>
    );
};

export default UserSearchEditForm;