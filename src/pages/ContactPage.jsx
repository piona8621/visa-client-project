// import React, { useRef } from "react";
// import emailjs from '@emailjs/browser';

// const ContactPage = () => {

//   const form = useRef();



//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_jhd42d4', 'template_a8330ws', form.current, {
//         publicKey: 'Q8hAmHnrsQpO9tspF',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

  







//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-6 lg:px-12">
//         {/* Page Title */}
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
//           Contact Us
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Have questions or need assistance? We'd love to hear from you!
//         </p>

//         {/* Contact Form and Info */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white shadow-md rounded-lg p-8">



//           <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>




//             {/* <form ref={from} onSubmit={sendEmail}>
//               {/* Name */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="name"
                  
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="user_name"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="email"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="user_email"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               {/* Message */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="message"
//                   className="block text-gray-700 font-medium mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   name="message"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Write your message"
//                   required
//                 />
//                 <input type="submit" value="Send" />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
//               >
//                 Send Message
//               </button>
//             {/* </form> */} 


//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             {/* Phone */}
//             <div className="flex items-center space-x-4">
//               <div className="text-blue-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 10h11M9 21V3m12 7h-9m3 11V3"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-gray-800">Phone</h4>
//                 <p className="text-gray-600">+1 (234) 567-890</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-center space-x-4">
//               <div className="text-blue-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M16 12l-4 4m0 0l-4-4m4 4V4"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-gray-800">Email</h4>
//                 <p className="text-gray-600">contact@yourdomain.com</p>
//               </div>
//             </div>

//             {/* Address */}
//             <div className="flex items-center space-x-4">
//               <div className="text-blue-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M7 8h10M7 12h10m-6 4h6"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-gray-800">Address</h4>
//                 <p className="text-gray-600">123 Main Street, Anytown, USA</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;


































































// normal alert
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const ContactPage = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_jhd42d4", // Replace with your service ID
//         "template_a8330ws", // Replace with your template ID
//         form.current,
//         "Q8hAmHnrsQpO9tspF" // Replace with your public key
//       )
//       .then(
//         (result) => {
//           console.log("Message sent successfully!", result.text);
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           console.error("Message failed to send:", error.text);
//           alert("Message failed to send. Please try again.");
//         }
//       );
//   };

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-6 lg:px-12">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Have questions or need assistance? We'd love to hear from you!
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div className="bg-white shadow-md rounded-lg p-8">
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="mb-6">
//                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="user_name"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="user_email"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   name="message"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Write your message"
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div className="flex items-center space-x-4">
//               <div className="text-blue-500">
//                 <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 10h11M9 21V3m12 7h-9m3 11V3"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-gray-800">Phone</h4>
//                 <p className="text-gray-600">+1 (234) 567-890</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="text-blue-500">
//                 <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4 4m0 0l-4-4m4 4V4" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-gray-800">Email</h4>
//                 <p className="text-gray-600">contact@yourdomain.com</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="text-blue-500">
//                 <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10m-6 4h6" />
//                 </svg>
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-gray-800">Address</h4>
//                 <p className="text-gray-600">123 Main Street, Anytown, USA</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;






















// sweetalert2


// import React, { useRef } from "react";
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2';

// const ContactPage = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_jhd42d4', 'template_a8330ws', form.current, 'Q8hAmHnrsQpO9tspF')
//       .then(
//         () => {
//           Swal.fire({
//             icon: 'success',
//             title: 'Message Sent!',
//             text: 'Your message has been successfully sent. We will get back to you shortly.',
//           });
//         },
//         (error) => {
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: `Something went wrong! Please try again later. Error: ${error.text}`,
//           });
//         }
//       );
//   };

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-6 lg:px-12">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
//           Contact Us
//         </h2>
//         <p className="text-lg text-gray-600 text-center mb-12">
//           Have questions or need assistance? We'd love to hear from you!
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div className="bg-white shadow-md rounded-lg p-8">
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="mb-6">
//                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="user_name"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="user_email"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   name="message"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Write your message"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div className="space-y-8">
//             <div className="flex items-center space-x-4">
//               <div className="text-blue-500">
                
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-gray-800">Phone</h4>
//                 <p className="text-gray-600">+1 (234) 567-890</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;









// avovbe ph number





// import React, { useRef } from "react";
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2';

// const ContactPage = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_jhd42d4', 'template_a8330ws', form.current, 'Q8hAmHnrsQpO9tspF')
//       .then(
//         () => {
//           Swal.fire({
//             icon: 'success',
//             title: 'Message Sent!',
//             text: 'Your message has been successfully sent. We will get back to you shortly.',
//           });
//         },
//         (error) => {
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: `Something went wrong! Please try again later. Error: ${error.text}`,
//           });
//         }
//       );
//   };

//   return (
//     <section className="py-12 bg-gray-100">
//       <div className="container mx-auto px-6 lg:px-12">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
//         <p className="text-lg text-gray-600 text-center mb-8">
//           Have questions or need assistance? We'd love to hear from you!
//         </p>

//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Contact Information Section */}
//           <div className="lg:w-1/3 bg-white shadow-md rounded-lg p-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
//             <p className="text-gray-600 mb-6">
//               Feel free to reach out via email or phone, or send a message using the form.
//             </p>
//             <div className="space-y-4">
//               <p>
//                 <strong className="text-gray-800">Email:</strong>{' '}
//                 <a
//                   href="mailto:Pionara02@gmail.com"
//                   className="text-blue-500 hover:underline"
//                 >
//                   Pionara02@gmail.com
//                 </a>
//               </p>
//               <p>
//                 <strong className="text-gray-800">Phone:</strong>{' '}
//                 <a
//                   href="tel:+1234567890"
//                   className="text-blue-500 hover:underline"
//                 >
//                   +1234567890
//                 </a>
//               </p>
//               <p>
//                 <strong className="text-gray-800">WhatsApp:</strong>{' '}
//                 <a
//                   href="https://wa.me/1234567890"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline"
//                 >
//                   +1234567890
//                 </a>
//               </p>
//             </div>
//           </div>

//           {/* Contact Form Section */}
//           <div className="lg:w-2/3 bg-white shadow-md rounded-lg p-8">
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="mb-6">
//                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="user_name"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="user_email"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="4"
//                   name="message"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Write your message"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactPage;














































import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Lottie from 'react-lottie';
import animationData from '../assets/animation/Animation - 1736106432845.json'; // Replace with your animation file path
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";

const ContactPage = () => {
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
    <Helmet>
        <title>About</title>
      </Helmet>
      <Navbar />
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

export default ContactPage;






































