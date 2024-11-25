'use client';

import {useState} from 'react';
import styles from './EditProfileForm.module.scss';

export interface UserFormData {
    name: string;
    username: string;
    email: string;
    password: string;
    dateOfBirth: string;
    presentAddress: string;
    permanentAddress: string;
    city: string;
    postalCode: string;
    country: string;
    birth: string;
    address: string;
    perm_address: string;
    code: string;
}

const EditProfileForm = () => {
    const [formData, setFormData] = useState<UserFormData>({
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
        birth: '25 January 1990',
        address: 'San Jose, California, USA',
        perm_address: 'San Jose, California, USA',
        code: '45962'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className={styles.editProfile}>
            <div className={styles.avatarContainer}>
                <img src="/images/avatar.svg" alt="avatar" className={styles.avatar}/>
                <div className={styles.editIcon}>
                    <div className={styles.iconBackground}>
                        <img src="/icons/pencil.svg" alt="edit" className={styles.icon}/>
                    </div>
                </div>
            </div>
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
                        <label htmlFor="username">User Name</label>
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
                    <div className={styles.formGroup}>
                        <label htmlFor="birth">Date of Birth</label>
                        <input
                            type="text"
                            id="birth"
                            name="birth"
                            value={formData.birth}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">Present Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="perm_address">Permanent Address</label>
                        <input
                            type="perm_address"
                            id="perm_address"
                            name="perm_address"
                            value={formData.perm_address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">City</label>
                        <input
                            type="city"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="code">Postal Code</label>
                        <input
                            type="code"
                            id="code"
                            name="code"
                            value={formData.code}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="country">Country</label>
                        <input
                            type="country"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className={styles.saveButton}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditProfileForm;
