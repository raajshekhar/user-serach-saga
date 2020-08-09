import React from 'react';

const useDebounce = (value) => {

    const [ val, setVal ] = React.useState('');

    React.useEffect(() => {
        let timer = setTimeout(() => {
            setVal(value);
        }, 500);
        return () => {
            clearTimeout(timer);
        }
    }, [value])

    return val;
}
export default useDebounce;