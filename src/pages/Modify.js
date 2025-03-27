import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Modify.css';

function Modify({ onUpdate }) {
    const navigate = useNavigate();
    const location = useLocation();
    const rowData = location.state?.data || {};

    const [formData, setFormData] = useState({
        employee: rowData.employee || '',
        extension: rowData.extension || '',
        mobile: rowData.mobile || '',
        email: rowData.email || '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
        navigate('/home');
    };

    return (
        <>
            <Navbar />
            <div className="extension-container">
                <div className="form-box">
                    <h2 className="form-title">Modify Extension</h2>
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
                        <button type="submit" className="save-btn">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Modify;
