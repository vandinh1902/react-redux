import React, {useState, useEffect} from 'react'

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    const[errors, setErrors] = useState({})

    const handleChange = (evt) => {
        const {value, name} = evt.target;
        setValues((values) => ({
            ...values,
            [name]: value,

        }))
    }
    const handleBlur = (evt) => {
        const {value, name} = evt.target;
        if(!value){
            setErrors((errors) =>({
                [name]: "This field is required",
            }))
        }
    }




    return {values, errors, handleChange, handleBlur}
}
