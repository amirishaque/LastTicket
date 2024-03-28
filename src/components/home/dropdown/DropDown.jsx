import React, { useState, useRef, useEffect } from 'react';
import countriesData from './countriesData.json'; // Import country data from JSON file
import './style/style.css'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null); // New state for selected country
    const dropdownRef = useRef(null);

    // Toggle dropdown open state
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Handle country selection
    const handleSelectCountry = (country) => {
        setSelectedCountry(country); // Update selected country state
        setIsOpen(false); // Close the dropdown
    };

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <>
            <div ref={dropdownRef} className='dropdown-wrapper'>
                {/* Update button text to show selected country */}
                <button className="dropdown-btn" onClick={toggleDropdown}>
                    {selectedCountry ? (
                        <span>
                            <img className="country-flag" src={selectedCountry.flag} alt={selectedCountry.name} />
                            {selectedCountry.name}
                        </span>
                    ) : (
                        'Select a country'
                    )}
                </button>
                {isOpen && (
                    <ul className="dropdown-menu-ph">
                        {countriesData.map((country) => (
                            <li key={country.code} onClick={() => handleSelectCountry(country)}>
                                <img className="country-flag" src={country.flag} alt={country.name} />
                                {country.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default Dropdown;
