import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import SearchPage from './pages/SearchPage';
import BookshelfPage from './pages/BookshelfPage';

const App = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBooks);
    }, []);

    const addToBookshelf = (book) => {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <Router>
            <Container>
                <Routes>
                    <Route 
                        exact 
                        path="/" 
                        element={<SearchPage addToBookshelf={addToBookshelf} bookshelf={bookshelf} />} 
                    />
                    <Route path="/bookshelf" element={<BookshelfPage />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
