// src/EmergencyRequirements.js

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './EmergencyRequirements.css'; // Import your CSS file for styling

const EmergencyRequirements = () => {
    const services = {
        medicine: ['Pain Relievers', 'Antibiotics', 'Vitamins', 'First Aid Kits'],
        blood: ['O+', 'A+', 'B+', 'AB+', 'O-', 'A-', 'B-', 'AB-'],
        wards: ['General Ward', 'ICU', 'Pediatric Ward', 'Maternity Ward'],
    };

    return (
        <div className="emergency-requirements">
            <h1>Emergency Requirement</h1>
            <div className="service-container">
                {Object.keys(services).map((key, index) => (
                    <div className="card" key={index}>
                        <h2>
                            <Link to={`/contact/${key}`} style={{ color: 'white', textDecoration: 'none' }}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </Link>
                        </h2>
                        <ul>
                            {services[key].map((service, i) => (
                                <li key={i}>{service}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmergencyRequirements;
