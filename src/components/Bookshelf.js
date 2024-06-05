import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const Bookshelf = ({ books, removeFromBookshelf }) => {
    return (
        <Box>
            {books.length > 0 ? (
                books.map(book => (
                    <Card key={book.key} variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h6">
                                {book.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {book.author_name && book.author_name.join(', ')}
                            </Typography>
                            <Button variant="contained" color="secondary" onClick={() => removeFromBookshelf(book)}>
                                Remove
                            </Button>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography variant="body1">
                    No books in your bookshelf
                </Typography>
            )}
        </Box>
    );
};

export default Bookshelf;
