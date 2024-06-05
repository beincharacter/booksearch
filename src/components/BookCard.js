import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const BookCard = ({ book, addToBookshelf, isInBookshelf }) => {
    return (
        <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">
                    {book.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {book.author_name && book.author_name.join(', ')}
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => addToBookshelf(book)} 
                    disabled={isInBookshelf}
                >
                    {isInBookshelf ? 'In Bookshelf' : 'Add to Bookshelf'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default BookCard;
