// src/components/BookSearch.js

import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import BookCard from './BookCard';

const BookSearch = ({ addToBookshelf, bookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value.length) {
            const response = await fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            const data = await response.json();
            setResults(data.docs);
        } else {
            setResults([]);
        }
    };

    return (
        <Box>
            <TextField
                label="Search for books"
                variant="outlined"
                fullWidth
                margin="normal"
                value={query}
                onChange={handleSearch}
            />
            <Box>
                {results.map(book => (
                    <BookCard 
                        key={book.key} 
                        book={book} 
                        addToBookshelf={addToBookshelf} 
                        isInBookshelf={bookshelf.some(b => b.key === book.key)}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default BookSearch;
