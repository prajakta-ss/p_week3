/*  import React, { useEffect, useState } from 'react'

import Cards from './cards'
import axios from 'axios'
import {  Link } from "react-router-dom";

function Course() {
  const [book,setBook] = useState([])
  useEffect(() => {
  const getBook = async() =>{
    try {
     const res = await  axios.get('http://localhost:4001/api/book')
     console.log(res.data);
     setBook(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  getBook();
  },[]);
  return (
   <>

   <div className='max-w-2x1 container mx-auto md:px-20 px-4  '>
    <div className='  mt-28 items-center justify-center text-center'>
      <h1 className='text-black text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!! :)</span> 
      </h1>
      <p className=' text-black mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur, laboriosam, veritatis libero omnis, ipsum vel quo soluta fugit quod explicabo cumque earum nulla molestiae. Assumenda ea optio perferendis quibusdam!</p>
      <Link to = '/'>
      <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300ms'>Back</button>

      </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-4'>
      {
       book.map((item) => (
        <Cards key={item.id} item={item} />
      ))
      }
    </div>
   </div>
   
   </>
  )
}

export default Course  */

import React, { useEffect, useState } from "react";
import Cards from "./cards.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/api/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  // In useEffect, after setting the book state
console.log(Array.isArray(book)); // Should log 'true'
console.log(book); // Should show the array of books

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
          book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
 

/* import React, { useEffect, useState } from "react";
import Cards from "./cards";
import axios from "axios";

import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/api/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
 */