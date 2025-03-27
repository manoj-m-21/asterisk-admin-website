import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";

function Home({ data }) {
    const navigate = useNavigate();
    const [tableData, setTableData] = useState(data); // State to manage the data

    // Navigate to modify page
    const handleEdit = (rowData) => {
        navigate('/modify', { state: { data: rowData } });
    };

    // Delete row function
    const handleDelete = (index) => {
        const updatedData = tableData.filter((_, i) => i !== index);
        setTableData(updatedData);
    };

    return (
        <>
            <button
                className="add-extension"
                onClick={() => navigate('/extension')}
            >
                ADD EXTENSION
            </button>
            <div className="content">
                <div className="table-container">
                    <h2>EXTENSIONS</h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Extension</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.employee}</td>
                                    <td>{item.extension}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button
                                            className="action-btn"
                                            onClick={() => handleEdit(item)}
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            className="action-btn"
                                            onClick={() => handleDelete(index)}
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {tableData.length === 0 && (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: 'center' }}>
                                        No data available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Home;
