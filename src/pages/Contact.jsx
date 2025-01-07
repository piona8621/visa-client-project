import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import animationData from '../assets/animation/Animation - 1736106432845.json'; // Replace with your animation file path
// import { Helmet } from "react-helmet-async";
// import Navbar from "../Components/Navbar";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jhd42d4', 'template_a8330ws', form.current, 'Q8hAmHnrsQpO9tspF')
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been successfully sent. We will get back to you shortly.',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Something went wrong! Please try again later. Error: ${error.text}`,
          });
        }
      );
  };

  return (
    <>
    
    <section className="py-12 mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-blue-900 font-mono text-center mb-6">Contact Us</h2>
        <p className="text-2xl text-white font-bold text-center mb-20 ">
          Have questions or need assistance?  We'd love to hear from you!
        </p>

        <div className="flex flex-col lg:flex-row-reverse gap-12">
          {/* Lottie Animation Section */}
          <div className="lg:w-1/3 flex justify-center items-center">
            <Lottie animationData={animationData} options={{ animationData, loop: true, autoplay: true }} height={400} width={400} />
          </div>

          {/* Contact Information and Form Section */}
          <div className="lg:w-2/3 space-y-8">
            {/* Contact Info */}
            <div className=" bg-blue-900 opacity-80 shadow-md rounded-lg p-8">
              <h3 className="text-3xl font-semibold text-red-600 mb-4">Get in Touch</h3>
              <p className="text-white mb-6">
                Feel free to reach out via email or phone, or send a message using the form.
              </p>
              <div className="space-y-4">
                <p>
                  <strong className="text-white text-xl"> ✉️ Email:</strong>{' '}
                  <a
                    href="mailto:Pionara02@gmail.com"
                    className="text-blue-300 text-xl hover:underline"
                  >
                    Pionara02@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-white text-xl"> 📞 Phone:</strong>{' '}
                  <a
                    href="tel:+1234567890"
                    className="text-blue-300 text-xl hover:underline"
                  >
                    +1234567890
                  </a>
                </p>
                <p>
                  <strong className="text-white text-xl"> 📱💬 WhatsApp:</strong>{' '}
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 text-xl hover:underline"
                  >
                    +1234567890
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-900 bg-opacity-70 shadow-md rounded-lg p-8">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-white text-xl font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-white text-xl font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-white text-xl font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    name="message"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-800 btn btn-outline  text-white font-semibold py-2 rounded-md hover:bg-blue-300 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;







