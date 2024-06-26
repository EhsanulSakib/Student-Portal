import React, { useState } from 'react';

const Form = () => {
    const [formValues, setFormValues] = useState({
        first_name: '',
        last_name: '',
        gender: '',
        address: '',
        phone_no: '',
        email: '',
        photo: '',
        vio_details: '',
        thana: ''
    });

    const [errors, setErrors] = useState({});
    const [photoPreview, setPhotoPreview] = useState(null);

    const validate = () => {
        const newErrors = {};
        if (!formValues.first_name) {
            newErrors.first_name = 'Required';
        } else if (formValues.first_name.length > 50) {
            newErrors.first_name = 'Must be 50 characters or less';
        }

        if (!formValues.last_name) {
            newErrors.last_name = 'Required';
        } else if (formValues.last_name.length > 50) {
            newErrors.last_name = 'Must be 50 characters or less';
        }

        if (!formValues.gender) {
            newErrors.gender = 'Required';
        } else if (!['Male', 'Female', 'Other'].includes(formValues.gender)) {
            newErrors.gender = 'Invalid gender';
        }

        if (!formValues.address) {
            newErrors.address = 'Required';
        } else if (formValues.address.length > 100) {
            newErrors.address = 'Must be 100 characters or less';
        }

        if (!formValues.phone_no) {
            newErrors.phone_no = 'Required';
        } else if (!/^[0-9]+$/.test(formValues.phone_no)) {
            newErrors.phone_no = 'Must be only digits';
        } else if (formValues.phone_no.length > 20) {
            newErrors.phone_no = 'Must be 20 characters or less';
        }

        if (!formValues.email) {
            newErrors.email = 'Required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (formValues.photo && formValues.photo.length > 50) {
            newErrors.photo = 'Must be 50 characters or less';
        }

        if (formValues.vio_details.length > 250) {
            newErrors.vio_details = 'Must be 250 characters or less';
        }

        if (formValues.thana.length > 50) {
            newErrors.thana = 'Must be 50 characters or less';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormValues({
                ...formValues,
                photo: file
            });
            setPhotoPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formValues);
            // Handle form submission logic here, e.g., send data to a server
        } else {
            setErrors(validationErrors);
        }
    };


    return (
        <div className='mt-4 w-11/12 m-auto'>
            <h1 className='text-3xl text-center font-bold'>Student Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        value={formValues.first_name}
                        onChange={handleChange}
                    />
                    {errors.first_name && <div>{errors.first_name}</div>}
                </div>
            </form>
        </div>
    );
};

export default Form;