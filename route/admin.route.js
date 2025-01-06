import express from 'express';
import { adminLogin , getAllBooks,deleteBook} from '../controller/admin.controller.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import { Router } from 'express';

//Admin Login Route
Router.post('/login', adminLogin);

//Admin proteted routes
Router.get('/books', protect, admin, getAllBooks);
Router.post('/books', protect, admin, addBook);
Router.delete('/books/:id', protect, admin, deleteBook);
export default Router;