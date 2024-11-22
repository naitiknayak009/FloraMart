// Categories.jsx
import React from 'react';
import './Categories.css'; 
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';// Import your CSS file

const Categories = () => {
    return (
        <div className="categories-container">
            <h2 className="categories-heading">Shop our Top Categories</h2>
            <div className="categories-cards">
                <div className="category-card1">
                    <h3 className="card-title">Seasonal Plants</h3>
                </div>
                <div className="category-card2">
                    <h3 className="card-title">Manure</h3>
                </div>
                <div className="category-card3">
                    <h3 className="card-title">Oxy Plants</h3>
                </div>
                <div className="category-card4">
                    <h3 className="card-title">Indoor Plants</h3>
                </div>
                <div className="category-card5">
                    <h3 className="card-title">Outdoor Plants</h3>
                </div>
            </div>
            <div className="search-bar-container">
                <h1 className="heading">Search for a <span>plant to buy</span></h1>
            <TextField
                variant="outlined"
                fullWidth
                placeholder="Search for a flower"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
        </div>
    );
};

export default Categories;
