import { useState } from 'react';

const useForm = (initialState) => {
    const [value, setValue] = useState(initialState);
    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
        console.log(value);
    }
    return [value, handleChange];
}

export default useForm;