import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import BookSearch from '../components/BookSearch';

const SearchPage = ({ addToBookshelf, bookshelf }) => {
    return (
        <Box position="relative" padding={2}>
            <Box position="absolute" top={16} right={16}>
                <Button variant="contained" color="primary" href="/bookshelf">
                    Go to Bookshelf
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
                Search Books
            </Typography>
            <BookSearch addToBookshelf={addToBookshelf} bookshelf={bookshelf} />
        </Box>
    );
};

export default SearchPage;
