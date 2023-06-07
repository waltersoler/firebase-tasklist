import { useState } from 'react';

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);
    // Function push new value to list
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    };
    // Remove value from list
    const remove = (index) => {
        // const index = value.indexOf(element);
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };
    // List is empty ? true / false
    const isEmpty = () => value.length === 0;
    // TODO: Develop more function for lists
    return {
        value, setValue, push, remove, isEmpty,
    };
};

export default useList;
