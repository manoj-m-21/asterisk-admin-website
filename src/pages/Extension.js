import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Extension.css";
import Navbar from '../components/Navbar';

function Extension({ onAddExtension }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        employee: '',
        extension: '',
        mobile: '',
        email: '',
    });

    // Check if all form fields are filled
    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            onAddExtension(formData); // Add new extension
            navigate('/home'); // Redirect to Home after adding
        }
    };

    return (
        <>
            <Navbar />
            <div className="extension-container">
                <div className="form-box">
                    <h2 className="form-title">Add Extension</h2>
                    <form className="extension-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="employee"
                                placeholder="Employee Name"
                                value={formData.employee}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="extension"
                                placeholder="Extension Number"
                                value={formData.extension}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className={`add-btn ${!isFormValid ? 'disabled' : ''}`}
                            disabled={!isFormValid}
                        >
                            Add Extension
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Extension;
