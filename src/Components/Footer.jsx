// Footer.jsx
// import React from 'react';
// import { CiFacebook, CiTwitter, CiLinkedin } from 'react-icons/ci';
// import { Typewriter } from 'react-simple-typewriter';

// const Footer = () => {
//   return (
//     <footer className="bg-blue-900 text-white py-6 mt-10">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         {/* Website Name with Typewriter Effect */}
//         <div className="mb-4">
//           <h2 className="text-2xl font-mono font-semibold">
//             <Typewriter
//               words={['Visa Navigator', ' Travel Partner', 'Explore New Destinations']}
//               loop={true}
//               cursor
//               cursorStyle="|"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </h2>
//           <p className="text-sm">&copy; {new Date().getFullYear()} Visa Navigator. All Rights Reserved.</p>
//         </div>

//         {/* Contact Information */}
//         <div className="mb-4">
//           <h3 className="text-lg font-semibold">Contact Us</h3>
//           <p className="text-sm">Email: support@visanavigator.com</p>
//           <p className="text-sm">Phone: (123) 456-7890</p>
//         </div>

//         {/* Social Media Links */}
//         <div className="flex justify-center space-x-6 text-3xl">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <CiFacebook />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <CiTwitter />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <CiLinkedin />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;









import React from 'react';
import { CiFacebook, CiTwitter, CiLinkedin } from 'react-icons/ci';
import { Typewriter } from 'react-simple-typewriter';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer className="bg-blue-900 opacity-80 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Website Name with Typewriter Effect */}
        <Fade>
          <div className="mb-4">
            <h2 className="text-2xl font-mono font-semibold">
              <Typewriter
                words={['Visa Navigator', 'Travel Partner', 'Explore New Destinations']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Visa Navigator. All Rights Reserved.
            </p>
          </div>
        </Fade>

        {/* Contact Information */}
        <Slide direction="up">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm">Email: support@visanavigator.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </Slide>

        {/* Social Media Links */}
        <Zoom>
          <div className="flex justify-center space-x-6 text-3xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <CiFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <CiTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <CiLinkedin />
            </a>
          </div>
        </Zoom>
      </div>
    </footer>
  );
};

export default Footer;



