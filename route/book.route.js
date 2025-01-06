/* import express from 'express';
import { getBook } from '../controller/book.controller.js';
import Book from '../model/book.model.js';
const router = express.Router();

// Get all books
router.get('/', async (req,res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

//Create a new Book
router.post('/add', async (req, res) => {  
    const book = new Book({
        title: req.body.title,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
 });
 try {
    const newBook = await book.save();
    res.status(201).json(newBook);
 } catch (error) {
     res.status(500).json({ message: "Internal server error" });
    
 }
 //Update a book
router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
       res.json(updatedBook); 
    
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
    
});
//Delete a book
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).send("Book not Found");
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
});
export default router; */

import express from "express";
import Book from "../model/book.model.js";
import cors from "cors";
const app = express();
const router = express.Router();
app.use(cors());
// Create a new book
router.post("/add", async (req, res) => {
  try {
    const { name, title, price, category, image } = req.body;
    const newBook = new Book({ name, title, price, category, image });
    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Error adding book", error });
  }
});

// Update a book
router.put("/update/:id", async (req, res) => {
  try {
    const { name, title, price, category, image } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { name, title, price, category, image },
      { new: true }
    );
    res.status(200).json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
});

// Delete a book
router.delete("/delete/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
});

// Get all books (for Courses.jsx)
router.get("/", async (req, res) => {
  try {
    const book = await Book.find();
    res.json( book );
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
});

export default router;
