export function createInitialValuesObject(fieldsData = {}){

    const initialValuesFor = Reflect.ownKeys(fieldsData);

    if(!initialValuesFor.length) return {};

    const finalValuesObject = initialValuesFor.reduce((finalField, fieldArrayName) => {
            const fieldArrayData = fieldsData[fieldArrayName].reduce((finalObject, currentObject) => {
                return ({
                            ...finalObject,
                            [`${currentObject.name}`]: currentObject.value
                        })
            }, {});
            return ({...finalField, [fieldArrayName]: [fieldArrayData]})
    }, {});

    return finalValuesObject;
}


export function yupValidationObject({fieldsData = {}, Yup}){

    const initialValuesFor = Reflect.ownKeys(fieldsData);

    if(!initialValuesFor.length) return {};

    const fields = initialValuesFor.reduce((finalObj, fieldArrayName) => {

        const fieldsInfo  = fieldsData[fieldArrayName].reduce((finalFieldObj, currentField) => {
            let { id, validations = [], validationType = 'string' } = currentField;

            if(currentField.validationType === 'string') validations = [...validations, { type: 'trim', params: [] }];

            return ([ ...finalFieldObj, {name: id, validations, validationType }]);

        },[]);

        return ({...finalObj, [fieldArrayName]: fieldsInfo});

    },{});

const validation = initialValuesFor.reduce((finalObj, currentFieldName) => {

    const yupValidationData = fields[currentFieldName].reduce((finalYup, currentYup) => {

        const { name, validations, validationType } = currentYup;

        let field = '';
        let validator = Yup[validationType]();
        validations.forEach(validation => {
            const { params, type } = validation;
            if (!validator[type])  return;
            validator = validator[type](...params);
        });

        field = { [name]: validator };

        return { ...finalYup, ...field }

     }, {});

    const yupObjectCreation =  Yup.array().of(Yup.object().shape(yupValidationData));

    return ({...finalObj, [currentFieldName]: yupObjectCreation});

    },{});

    return  Yup.object().shape({...validation});
}