import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AdminDashboard() {
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    // Fetch books from the backend
    axios
      .get("http://localhost:4001/api/book")
      .then((res) => setBooks(res.data.books))
      .catch((err) => console.error("Error fetching books", err));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error for the specific field
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Book name is required.";
    if (!formData.title.trim()) newErrors.title = "Book title is required.";
    if (!formData.price || formData.price <= 0) newErrors.price = "Price must be greater than 0.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.image.trim()) newErrors.image = "Image URL is required.";
    return newErrors;
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
      return;
    }

    try {
      await axios.post("http://localhost:4001/api/book/add", formData);
      toast.success("Book added successfully!");
      setFormData({ name: "", title: "", price: "", category: "", image: "" });
      // Reload books after adding
      const res = await axios.get("http://localhost:4001/api/book");
      setBooks(res.data.books);
    } catch (err) {
      console.error("Error adding book", err);
      toast.error("Failed to add book!");
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/api/book/delete/${id}`);
      toast.success("Book deleted successfully!");
      // Reload books after deletion
      const res = await axios.get("http://localhost:4001/api/book");
      setBooks(res.data.books);
    } catch (err) {
      console.error("Error deleting book", err);
      toast.error("Failed to delete book!");
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Form to Add Book */}
      <form
        onSubmit={handleAddBook}
        className="bg-white p-6 rounded shadow-md space-y-4 max-w-md mx-auto"
      >
        <h3 className="text-lg font-bold mb-4">Add New Book</h3>
        <div className="space-y-2">
          <label>Book Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter New Book Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Book Title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
        </div>
        <div className="space-y-2">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.price && <p className="text-sm text-red-500">{errors.price}</p>}
        </div>
        <div className="space-y-2">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="E.g., Fiction, Non-Fiction"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
        </div>
        <div className="space-y-2">
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition"
        >
          Add Book
        </button>
      </form>

      {/* Book List */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Book List</h2>
      <ul className="space-y-4">
        {books.map((book) => (
          <li
            key={book._id}
            className="flex justify-between items-center bg-white p-4 rounded shadow-md hover:bg-gray-50 transition"
          >
            <div>
              <h3 className="text-xl font-semibold">{book.name}</h3>
              <p className="text-gray-600">{book.title}</p>
              <p className="text-gray-500">{book.category}</p>
              <p className="font-semibold text-pink-500">
                {formatPrice(book.price)}
              </p>
            </div>
            <button
              onClick={() => handleDeleteBook(book._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
