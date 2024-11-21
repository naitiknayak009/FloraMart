// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Importing check icon from react-icons
import './BookAppointment.css'; // Import your CSS file for styling

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        phoneNumber: '',
        specialist: '',
        date: '',
        time: ''
    });
    
    const [isBooked, setIsBooked] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsBooked(true);
    };

    return (
        <div className="appointment-container">
            <h1>Book Your Appointment</h1>
            {!isBooked ? (
                <form className="appointment-form" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="number" 
                        name="age" 
                        placeholder="Age" 
                        value={formData.age} 
                        onChange={handleChange} 
                        required 
                    />
                    <select 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        placeholder="Phone Number" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="specialist" 
                        placeholder="Specialist Required" 
                        value={formData.specialist} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="time" 
                        name="time" 
                        value={formData.time} 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit">Book Appointment</button>
                </form>
            ) : (
                <div className="confirmation">
                    <FaCheckCircle className="check-icon" />
                    <h2>Appointment Booked!</h2>
                </div>
            )}
        </div>
    );
};

export default BookAppointment;
