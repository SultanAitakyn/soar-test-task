'use client';

import { useState } from 'react';
import styles from './EditProfileForm.module.scss';

const EditProfileForm = () => {
    const [formData, setFormData] = useState({
        name: 'Charlene Reed',
        username: 'Charlene Reed',
        email: 'charlenereed@gmail.com',
        password: '********',
        dateOfBirth: '1990-01-25',
        presentAddress: 'San Jose, California, USA',
        permanentAddress: 'San Jose, California, USA',
        city: 'San Jose',
        postalCode: '45962',
        country: 'USA',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button type="submit" className={styles.saveButton}>
                Save
            </button>
        </form>
    );
};

export default EditProfileForm;
