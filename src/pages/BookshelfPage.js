import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBooks(storedBooks);
    }, []);

    const removeFromBookshelf = (book) => {
        const updatedBooks = books.filter(b => b.key !== book.key);
        setBooks(updatedBooks);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBooks));
    };

    return (
        <Box position="relative" padding={2}>
            <Box position="absolute" top={12} right={16}>
                <Button variant="contained" color="primary" href="/">
                    Back to Search
                </Button>
            </Box>
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{
                    fontSize: {
                        xs: '1.5rem', // 24px for extra small screens
                        sm: '2rem', // 32px for small screens
                        md: '2.5rem', // 40px for medium screens
                        lg: '3rem' // 48px for large screens
                    }
                }}
            >
                My Bookshelf
            </Typography>
            <Bookshelf books={books} removeFromBookshelf={removeFromBookshelf} />
        </Box>
    );
};

export default BookshelfPage;
