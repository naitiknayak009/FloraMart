// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './SearchComponent.css'; // Import your CSS file for styling
import { FaSearch } from 'react-icons/fa'; // Importing search icon from react-icons

const SearchComponent = () => {
    const [showResults, setShowResults] = useState(false);

    const handleSearchClick = () => {
        setShowResults(true);
    };

    return (
        <div className="search-container">
            <p className="search-description">Search for the Required Services</p>
            <div className="search-box">
                <FaSearch className="search-icon" />
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Blood, Emergency Wards, Medicines" 
                />
            </div>
            <button className="search-button" onClick={handleSearchClick}>
                Show Available
            </button>
            {showResults && (
                <div className="results">
                    <h2>Available Right Now </h2>
                    <ul>
                        <li>Janani Voluntary Blood Centre: 08904001559</li>
                        <li>Vivekananda Blood Bank: 08147998843</li>
                        <li>Premier Voluntary Blood Centre: 09725593150</li>
                        <li>Srikara Hospital Blood Centre: 08792483152</li>
                        <li>Sri Balaji Blood Bank: 08197369679</li>
                        <li>Navajeevan Blood Centre: 09054337102</li>
                        <li>St Theresas Blood Bank: 09035029402</li>
                        <li>Deccan&apos;s Blood Centre: Show Number</li>
                        <li>Rudhira Health Organisation: Show Number</li>
                        <li>Chiranjeevi Eye & Blood Bank Research & Development Centre: Show Number</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchComponent;
