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
        <div className='mt-4 w-11/12 m-auto bg-slate-100 p-4 px-8 shadow-sm rounded-sm'>
            <h1 className='text-3xl text-center font-bold text-blue-600'>Student Form</h1>
            <form onSubmit={handleSubmit} className='my-4'>
                <div className='flex flex-col md:flex-row justify-between gap-10'>
                    <div className='flex flex-1 flex-col gap-4'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="first_name" className='font-bold text-lg w-full'>First Name {errors.first_name && <span className='text-red-400 text-base font-medium'>({errors.first_name})</span>}</label>
                            <input
                                id="first_name"
                                name="first_name"
                                type="text"
                                value={formValues.first_name}
                                onChange={handleChange}
                                className='p-2 border border-gray-400 w-full'
                            />

                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="last_name" className='font-bold text-lg w-full'>Last Name {errors.last_name && <span className='text-red-400 text-base font-medium'>({errors.last_name})</span>}</label>
                            <input
                                id="last_name"
                                name="last_name"
                                type="text"
                                value={formValues.last_name}
                                onChange={handleChange}
                            />

                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='font-bold text-lg w-full'>Gender {errors.gender && <span className='text-red-400 text-base font-medium'>({errors.gender})</span>}</label>
                            <div className='flex gap-2'>
                                <label className='flex gap-2'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={formValues.gender === 'Male'}
                                        onChange={handleChange}
                                    />
                                    Male
                                </label>
                                <label className='flex gap-2'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={formValues.gender === 'Female'}
                                        onChange={handleChange}
                                    />
                                    Female
                                </label>
                                <label className='flex gap-2'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                        checked={formValues.gender === 'Other'}
                                        onChange={handleChange}
                                    />
                                    Other
                                </label>
                            </div>

                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="address" className='font-bold text-lg w-full'>Address {errors.address && <span className='text-red-400 text-base font-medium'>({errors.address})</span>}</label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                value={formValues.address}
                                onChange={handleChange}
                            />

                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="phone_no" className='font-bold text-lg w-full'>Phone Number {errors.phone_no && <span className='text-red-400 text-base font-medium'>({errors.phone_no})</span>}</label>
                            <input
                                id="phone_no"
                                name="phone_no"
                                type="text"
                                value={formValues.phone_no}
                                onChange={handleChange}
                            />

                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email" className='font-bold text-lg w-full'>Email {errors.email && <span className='text-red-400 text-base font-medium'>({errors.email})</span>}</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="vio_details" className='font-bold text-lg w-full'>Violations Details</label>
                            <textarea
                                id="vio_details"
                                name="vio_details"
                                value={formValues.vio_details}
                                onChange={handleChange}
                                className='min-h-32 max-h-32 p-2'
                            />
                            {errors.vio_details && <div>{errors.vio_details}</div>}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="thana" className='font-bold text-lg w-full'>Thana</label>
                            <select
                                id="thana"
                                name="thana"
                                value={formValues.thana}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="Thana1">Khilgaon</option>
                                <option value="Thana2">Rampura</option>
                                <option value="Thana3">Badda</option>
                                <option value="Thana3">Gulshan</option>
                                <option value="Thana3">Mirpur</option>
                                <option value="Thana3">Tajgaon</option>
                                <option value="Thana3">Ramna</option>
                            </select>
                            {errors.thana && <div>{errors.thana}</div>}
                        </div>
                    </div>


                    <div className='flex flex-col gap-4 w-full md:w-2/5'>
                        <label htmlFor="photo" className='font-bold text-lg w-full'>Photo</label>
                        {photoPreview && <img src={photoPreview} alt="Photo Preview" />}
                        <input
                            id="photo"
                            name="photo"
                            type="file"
                            onChange={handlePhotoChange}
                        />
                        {errors.photo && <div>{errors.photo}</div>}
                    </div>
                </div>

                <button type="submit" className='btn bg-blue-400 hover:bg-blue-600 text-white font-bold w-full mt-6 text-xl'>Submit</button>
            </form>
        </div>
    );
};

export default Form;