import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    // Perform your form submission logic here, e.g., API calls
  };

  return (
    <>
      <div>
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => console.log('Close modal logic here')}
        >
          ✕
        </Link>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mt-6 mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="abc@gmail.com"
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              <br />
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              <br />
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-pink-500 text-white sm:w-fit hover:bg-primary-800 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
