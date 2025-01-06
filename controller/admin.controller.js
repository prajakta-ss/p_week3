import Book from "../model/book.model.js";
import User from "../model/user.model.js";
import { compare } from "bcryptjs";


// Admin login
const adminLogin = async (req, res) => {    
    const { email, password } = req.body;
    try {
        const adminUser = await _find({ email, isAdmin: true });
        if(!adminUser) return res.status(401).json({ message: "Unauthorized" });

        const isMatch = await compare(password, adminUser.password);
        if(!isMatch) return res.status(401).json({ message: "Invalid credentials" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

//Get all Books
const getAllBooks = async (req, res) => {
    try {
        const books = await find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};  

//Add a book
const addBook = async (req, res) => {
    try {
        const { title, author, price, category, description } = req.body;
        const newBook = new Book({ author, price, category, image,title });
        await newBook.save();
        res.status(201).json({ message: "Book added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
//Delete a book
const deleteBook = async (req, res) => {
    try {
        const book= await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).send("Book not Found");
        res.status(200).json({ message: "Book deleted successfully" });
    }catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
export { adminLogin, getAllBooks, addBook, deleteBook };